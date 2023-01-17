import type { ButtonProps } from "@chakra-ui/react";
import { VStack, Button } from "@chakra-ui/react";
import { useQuery } from "@tanstack/react-query";
import type { AxiosError } from "axios";
import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { MdBookmark } from "react-icons/md";

import { useCelatoneApp } from "lib/app-provider";
import type { FormStatus } from "lib/components/forms";
import { ControllerInput } from "lib/components/forms";
import { ActionModal } from "lib/components/modal/ActionModal";
import type { OffchainDetail } from "lib/components/OffChainForm";
import { OffChainForm } from "lib/components/OffChainForm";
import { DEFAULT_RPC_ERROR, INSTANTIATED_LIST_NAME } from "lib/data";
import { useContractStore, useEndpoint, useValidateAddress } from "lib/hooks";
import { useHandleContractSave } from "lib/hooks/useHandleSave";
import { queryInstantiateInfo } from "lib/services/contract";
import type { ContractAddr, LVPair, RpcQueryError } from "lib/types";
import {
  formatSlugName,
  getDescriptionDefault,
  getTagsDefault,
} from "lib/utils";

interface SaveNewContractDetail extends OffchainDetail {
  contractAddress: string;
  instantiator: string;
  label: string;
}

interface SaveNewContractProps {
  list: LVPair;
  buttonProps: ButtonProps;
}
export function SaveNewContract({ list, buttonProps }: SaveNewContractProps) {
  const endpoint = useEndpoint();
  const { getContractLocalInfo } = useContractStore();
  const { validateContractAddress } = useValidateAddress();

  const {
    appContractAddress: { example: exampleContractAddress },
  } = useCelatoneApp();
  const initialList =
    list.value === formatSlugName(INSTANTIATED_LIST_NAME) ? [] : [list];

  const {
    control,
    setValue,
    watch,
    reset,
    formState: { errors, defaultValues },
  } = useForm<SaveNewContractDetail>({
    defaultValues: {
      contractAddress: "",
      instantiator: "",
      label: "",
      name: "",
      description: "",
      tags: [],
      lists: initialList,
    },
    mode: "all",
  });

  const [status, setStatus] = useState<FormStatus>({ state: "init" });

  const contractAddressState = watch("contractAddress");
  const instantiatorState = watch("instantiator");
  const labelState = watch("label");
  const offchainState: OffchainDetail = {
    name: watch("name"),
    description: watch("description"),
    tags: watch("tags"),
    lists: watch("lists"),
  };
  const setTagsValue = (selecteTags: string[]) => {
    setValue("tags", selecteTags);
  };
  const setContractListsValue = (selectedLists: LVPair[]) => {
    setValue("lists", selectedLists);
  };

  const resetForm = (resetContractAddress = true) => {
    reset({
      ...defaultValues,
      contractAddress: resetContractAddress ? "" : contractAddressState,
    });
  };

  // TODO: Abstract query
  const { refetch } = useQuery(
    ["query", "instantiateInfo", contractAddressState],
    async () =>
      queryInstantiateInfo(endpoint, contractAddressState as ContractAddr),
    {
      enabled: false,
      retry: false,
      cacheTime: 0,
      refetchOnReconnect: false,
      onSuccess(data) {
        const contractLocalInfo = getContractLocalInfo(contractAddressState);
        reset({
          contractAddress: contractAddressState,
          instantiator: data.instantiator,
          label: data.label,
          name: contractLocalInfo?.name ?? data.label,
          description: getDescriptionDefault(contractLocalInfo?.description),
          tags: getTagsDefault(contractLocalInfo?.tags),
          lists: [
            ...initialList,
            ...(contractLocalInfo?.lists ?? []).filter(
              (item) => item.value !== list.value
            ),
          ],
        });
        setStatus({
          state: "success",
          message: "Valid Contract Address",
        });
      },
      onError(err: AxiosError<RpcQueryError>) {
        resetForm(false);
        setStatus({
          state: "error",
          message: err.response?.data.message || DEFAULT_RPC_ERROR,
        });
      },
    }
  );

  useEffect(() => {
    if (contractAddressState.trim().length === 0) {
      setStatus({
        state: "init",
      });
    } else {
      setStatus({
        state: "loading",
      });
      const timeoutId = setTimeout(() => {
        const err = validateContractAddress(contractAddressState);
        if (err !== null)
          setStatus({
            state: "error",
            message: err,
          });
        else refetch();
      }, 1000);
      return () => clearTimeout(timeoutId);
    }
    return () => {};
  }, [contractAddressState, refetch, validateContractAddress]);

  const handleSave = useHandleContractSave({
    title: `Saved ${
      offchainState.name.trim().length ? offchainState.name : labelState
    }`,
    contractAddress: contractAddressState as ContractAddr,
    instantiator: instantiatorState,
    label: labelState,
    name: offchainState.name,
    description: offchainState.description,
    tags: offchainState.tags,
    lists: offchainState.lists,
    actions: resetForm,
  });

  return (
    <ActionModal
      title="Save New Contract"
      icon={MdBookmark}
      trigger={<Button {...buttonProps} />}
      mainBtnTitle="Save"
      mainAction={handleSave}
      disabledMain={
        status.state !== "success" || !!errors.name || !!errors.description
      }
      otherBtnTitle="Cancel"
      otherAction={resetForm}
    >
      <VStack gap="16px">
        <ControllerInput
          name="contractAddress"
          control={control}
          label="Contract Address"
          variant="floating"
          helperText={`ex. ${exampleContractAddress}`}
          status={status}
          labelBgColor="gray.800"
        />
        <ControllerInput
          name="instantiator"
          control={control}
          label="Instantiated by"
          variant="floating"
          isDisabled
          labelBgColor="gray.800"
        />

        <OffChainForm<SaveNewContractDetail>
          state={offchainState}
          control={control}
          setTagsValue={setTagsValue}
          setContractListsValue={setContractListsValue}
          errors={errors}
          labelBgColor="gray.800"
        />
      </VStack>
    </ActionModal>
  );
}
