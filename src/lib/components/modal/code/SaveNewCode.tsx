import type { ButtonProps } from "@chakra-ui/react";
import { Button, Icon, useToast, FormControl } from "@chakra-ui/react";
import { useQuery } from "@tanstack/react-query";
import { useEffect, useMemo, useState } from "react";
import { MdBookmark, MdCheckCircle } from "react-icons/md";

import type { FormStatus } from "lib/components/forms";
import { TextInput, NumberInput } from "lib/components/forms";
import { ActionModal } from "lib/components/modal/ActionModal";
import {
  getMaxCodeDescriptionLengthError,
  MAX_CODE_DESCRIPTION_LENGTH,
} from "lib/data";
import { useCodeStore, useEndpoint, useUserKey } from "lib/hooks";
import { getCodeIDInfo } from "lib/services/contract";

interface ModalProps {
  buttonProps: ButtonProps;
}

export function SaveNewCodeModal({ buttonProps }: ModalProps) {
  /* STATE */
  const [codeId, setCodeID] = useState("");
  const [codeIdStatus, setCodeIDStatus] = useState<FormStatus>({
    state: "init",
  });
  const [uploader, setUploader] = useState("No Description");
  const [uploaderStatus, setUploaderStatus] = useState<FormStatus>({
    state: "init",
  });
  const [description, setDescription] = useState("");
  const [descriptionStatus, setDescriptionStatus] = useState<FormStatus>({
    state: "init",
  });

  useEffect(() => {
    const trimedDescription = description.trim();
    if (trimedDescription.length === 0) {
      setDescriptionStatus({ state: "init" });
    } else if (trimedDescription.length > MAX_CODE_DESCRIPTION_LENGTH)
      setDescriptionStatus({
        state: "error",
        message: getMaxCodeDescriptionLengthError(trimedDescription.length),
      });
    else setDescriptionStatus({ state: "success" });
  }, [description]);

  /* DEPENDENCY */
  const toast = useToast();
  const userKey = useUserKey();
  const { isCodeIDExist, saveNewCode, updateCodeInfo, getCodeLocalInfo } =
    useCodeStore();
  const endpoint = useEndpoint();

  const { refetch, isFetching, isRefetching } = useQuery(
    ["query", endpoint, codeId],
    async () => getCodeIDInfo(endpoint, Number(codeId)),
    {
      enabled: false,
      retry: false,
      cacheTime: 0,
      onSuccess(data) {
        setCodeIDStatus({ state: "success", message: "Valid Code ID" });
        setUploader(data.code_info.creator);
        setUploaderStatus({ state: "success" });
      },
      onError() {
        setCodeIDStatus({ state: "error", message: "Invalid Code ID" });
        setUploader("Not Found");
        setUploaderStatus({ state: "error" });
      },
    }
  );

  /* CALLBACK */
  const reset = () => {
    setCodeID("");
    setCodeIDStatus({ state: "init" });
    setUploader("");
    setUploaderStatus({ state: "init" });
    setDescription("");
  };

  const handleSave = () => {
    const id = Number(codeId);

    saveNewCode(userKey, id);

    if (description.trim().length) {
      updateCodeInfo(userKey, id, {
        description,
        uploader,
      });
    } else {
      updateCodeInfo(userKey, id, {
        uploader,
      });
    }

    // TODO: abstract toast to template later
    toast({
      title: `Saved ${codeId} to Saved Codes`,
      status: "success",
      duration: 5000,
      isClosable: false,
      position: "bottom-right",
      icon: (
        <Icon
          as={MdCheckCircle}
          color="success.main"
          boxSize="6"
          display="flex"
          alignItems="center"
        />
      ),
    });

    reset();
  };

  /* SIDE EFFECT */
  // update uploader, uploaderStatus
  useEffect(() => {
    if (isFetching || isRefetching) {
      setUploader("Loading");
      setUploaderStatus({ state: "loading" });
    }
  }, [isFetching, isRefetching]);

  // update codeIdStatus
  useEffect(() => {
    if (codeId.trim().length === 0) {
      setCodeIDStatus({ state: "init" });
    } else {
      setCodeIDStatus({ state: "loading" });

      if (isCodeIDExist(userKey, Number(codeId))) {
        setCodeIDStatus({
          state: "error",
          message: "You already added this Code ID",
        });
      } else {
        const timer = setTimeout(() => {
          refetch();
        }, 500);

        return () => clearTimeout(timer);
      }
    }

    return () => {};
  }, [userKey, isCodeIDExist, codeId, refetch]);

  // update code description
  useEffect(() => {
    if (codeIdStatus.state === "success") {
      const localDescription =
        getCodeLocalInfo(userKey, Number(codeId))?.description ?? "";
      setDescription(localDescription);
    }
  }, [codeId, codeIdStatus.state, getCodeLocalInfo, setDescription, userKey]);

  /* LOGIC */
  const disableMain = useMemo(() => {
    // HACK: check uploader address
    return (
      codeIdStatus.state !== "success" ||
      uploader.length < 20 ||
      descriptionStatus.state === "error"
    );
  }, [codeIdStatus, uploader, descriptionStatus]);

  return (
    <ActionModal
      title="Save New Code"
      icon={MdBookmark}
      trigger={<Button {...buttonProps} />}
      mainBtnTitle="Save New Code"
      mainAction={handleSave}
      otherAction={reset}
      disabledMain={disableMain}
      otherBtnTitle="Cancel"
    >
      <FormControl display="flex" flexDir="column" gap="36px">
        Save other stored Codes to your &quot;Saved Codes&quot; list
        <NumberInput
          variant="floating"
          value={codeId}
          onInputChange={setCodeID}
          label="Code ID"
          labelBgColor="gray.800"
          status={codeIdStatus}
          helperText="ex. 1150"
        />
        <TextInput
          value={uploader}
          label="Uploader"
          labelBgColor="gray.800"
          setInputState={() => {}}
          status={uploaderStatus}
          isDisabled
        />
        <TextInput
          variant="floating"
          value={description}
          setInputState={setDescription}
          label="Code Description"
          labelBgColor="gray.800"
          helperText="Fill in code description to define its use as a reminder"
          status={descriptionStatus}
        />
      </FormControl>
    </ActionModal>
  );
}
