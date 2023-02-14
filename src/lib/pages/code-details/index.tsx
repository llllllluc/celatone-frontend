import { Divider, Flex, Heading, Text, Image } from "@chakra-ui/react";
import { observer } from "mobx-react-lite";
import { useRouter } from "next/router";
import { useEffect } from "react";

import { BackButton } from "lib/components/button/BackButton";
import { ExplorerLink } from "lib/components/ExplorerLink";
import { Loading } from "lib/components/Loading";
import PageContainer from "lib/components/PageContainer";
import { InvalidState } from "lib/components/state/InvalidState";
import { useCodeStore } from "lib/hooks";
import type { CodeDataState } from "lib/model/code";
import { useCodeData } from "lib/model/code";
import { AmpEvent, AmpTrack } from "lib/services/amplitude";
import { InstantiatePermission } from "lib/types";
import { getFirstQueryParam, isCodeId } from "lib/utils";

import { CodeInfoSection } from "./components/CodeInfoSection";
import { CTASection } from "./components/CTASection";
import { ContractTable } from "./components/table/contracts/ContractTable";

interface CodeDetailsBodyProps {
  codeDataState: CodeDataState;
  codeId: number;
}

const InvalidCode = () => <InvalidState title="Code does not exist" />;

const CodeDetailsBody = observer(
  ({ codeDataState, codeId }: CodeDetailsBodyProps) => {
    const { getCodeLocalInfo } = useCodeStore();
    const localCodeInfo = getCodeLocalInfo(codeId);
    const { chainId, codeData, publicProject } = codeDataState;

    if (!codeData) return <InvalidCode />;

    return (
      <>
        <Flex align="center" justify="space-between" mt={6}>
          <Flex direction="column" gap={1}>
            <Flex gap={1}>
              {publicProject.publicDetail?.logo && (
                <Image
                  src={publicProject.publicDetail.logo}
                  borderRadius="full"
                  alt={publicProject.publicDetail.name}
                  width={7}
                  height={7}
                />
              )}
              <Heading as="h5" variant="h5">
                {localCodeInfo?.name ??
                  publicProject.publicCodeData?.name ??
                  codeId}
              </Heading>
            </Flex>
            <Flex gap={2}>
              <Text fontWeight={500} color="text.dark" variant="body2">
                Code ID
              </Text>
              <ExplorerLink type="code_id" value={codeId.toString()} />
            </Flex>
          </Flex>
          <CTASection
            id={codeId}
            uploader={localCodeInfo?.uploader ?? codeData.uploader}
            name={localCodeInfo?.name}
            instantiatePermission={
              codeData.instantiatePermission ?? InstantiatePermission.UNKNOWN
            }
            permissionAddresses={codeData.permissionAddresses ?? []}
          />
        </Flex>
        <Divider borderColor="pebble.700" my={12} />
        <CodeInfoSection codeData={codeData} chainId={chainId} />
        <ContractTable codeId={codeId} />
      </>
    );
  }
);

const CodeDetails = observer(() => {
  const router = useRouter();
  const codeIdParam = getFirstQueryParam(router.query.codeId);
  const data = useCodeData(Number(codeIdParam));

  if (data.isLoading) return <Loading />;

  useEffect(() => {
    if (router.isReady) AmpTrack(AmpEvent.TO_CODE_DETAIL);
  }, [router.isReady]);

  return (
    <PageContainer>
      <BackButton />
      {!isCodeId(codeIdParam) ? (
        <InvalidCode />
      ) : (
        <CodeDetailsBody codeDataState={data} codeId={Number(codeIdParam)} />
      )}
    </PageContainer>
  );
});

export default CodeDetails;
