import type { MenuItemProps } from "@chakra-ui/react";
import { MenuItem, useToast } from "@chakra-ui/react";
import { useEffect, useState } from "react";

import { useCelatoneApp, useInternalNavigate } from "lib/app-provider";
import type { FormStatus } from "lib/components/forms";
import { TextInput } from "lib/components/forms/TextInput";
import { CustomIcon } from "lib/components/icon";
import { ActionModal } from "lib/components/modal/ActionModal";
import { useGetMaxLengthError, useUserKey } from "lib/hooks";
import { useContractStore } from "lib/providers/store";
import { AmpEvent, AmpTrack } from "lib/services/amplitude";
import type { LVPair } from "lib/types";
import { formatSlugName, shortenName } from "lib/utils";

interface EditListNameModalProps {
  list: LVPair;
  menuItemProps: MenuItemProps;
  reroute?: boolean;
}
export function EditListNameModal({
  list,
  menuItemProps,
  reroute = false,
}: EditListNameModalProps) {
  const { constants } = useCelatoneApp();
  const getMaxLengthError = useGetMaxLengthError();
  const userKey = useUserKey();
  const { renameList, isContractListExist } = useContractStore();
  const navigate = useInternalNavigate();

  const [listName, setListName] = useState<string>(list.label);
  const [status, setStatus] = useState<FormStatus>({ state: "init" });

  // TODO: apply use-react-form later
  useEffect(() => {
    const trimedListName = listName.trim();
    if (trimedListName.length === 0) {
      setStatus({ state: "init" });
    } else if (trimedListName.length > constants.maxListNameLength)
      setStatus({
        state: "error",
        message: getMaxLengthError(trimedListName.length, "list_name"),
      });
    else if (
      formatSlugName(listName) !== list.value &&
      isContractListExist(userKey, listName)
    )
      setStatus({ state: "error", message: "Already existed" });
    else setStatus({ state: "success" });
  }, [
    constants.maxListNameLength,
    getMaxLengthError,
    isContractListExist,
    list.value,
    listName,
    userKey,
  ]);

  const toast = useToast();
  const handleSave = () => {
    AmpTrack(AmpEvent.LIST_EDIT);
    // TODO: check list name and different toast status
    renameList(userKey, list.value, listName);
    toast({
      title: `Edit ${shortenName(list.label)} to ${shortenName(
        listName
      )} successfully`,
      status: "success",
      duration: 5000,
      isClosable: false,
      position: "bottom-right",
      icon: <CustomIcon name="check-circle-solid" color="success.main" />,
    });
  };
  return (
    <ActionModal
      title="Edit list name"
      icon="edit-solid"
      trigger={<MenuItem {...menuItemProps} as="button" />}
      mainBtnTitle="Save"
      mainAction={() => {
        handleSave();
        if (reroute)
          navigate({
            pathname: "/contract-lists/[slug]",
            query: { slug: formatSlugName(listName) },
            replace: true,
          });
      }}
      disabledMain={status.state !== "success"}
      otherAction={() => setListName(list.label)}
    >
      <TextInput
        variant="floating"
        value={listName}
        setInputState={setListName}
        labelBgColor="gray.900"
        status={status}
        label="List Name"
      />
    </ActionModal>
  );
}
