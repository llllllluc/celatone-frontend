import type { UseQueryResult } from "@tanstack/react-query";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useCallback } from "react";

import {
  CELATONE_QUERY_KEYS,
  useBaseApiRoute,
  usePublicProjectConfig,
  useWasmConfig,
} from "lib/app-provider";
import type {
  PublicContract,
  Option,
  PublicInfo,
  PublicProjectInfo,
  RawPublicContract,
  RawPublicProjectInfo,
  PublicCode,
  RawPublicCode,
} from "lib/types";
import { isCodeId } from "lib/utils";

const parseContract = (raw: RawPublicContract): PublicContract => ({
  contractAddress: raw.address,
  description: raw.description,
  name: raw.name,
  slug: raw.slug,
  label: raw.label,
  instantiator: raw.instantiator,
  admin: raw.admin,
});

const parseCode = (raw: RawPublicCode): PublicCode => ({
  ...raw,
  contractCount: raw.contracts,
});

export const usePublicProjects = (): UseQueryResult<PublicProjectInfo[]> => {
  const projectsApiRoute = useBaseApiRoute("projects");
  const projectConfig = usePublicProjectConfig({ shouldRedirect: false });

  const queryFn = useCallback(async () => {
    return axios
      .get<RawPublicProjectInfo[]>(projectsApiRoute)
      .then(({ data: projects }) =>
        projects.map<PublicProjectInfo>((project) => ({
          ...project,
          codes: project.codes.map(parseCode),
          contracts: project.contracts.map(parseContract),
        }))
      );
  }, [projectsApiRoute]);

  return useQuery(
    [CELATONE_QUERY_KEYS.PUBLIC_PROJECTS, projectsApiRoute],
    queryFn,
    {
      enabled: projectConfig.enabled,
    }
  );
};

export const usePublicProjectBySlug = (
  slug: Option<string>
): UseQueryResult<PublicProjectInfo> => {
  const projectsApiRoute = useBaseApiRoute("projects");
  const projectConfig = usePublicProjectConfig({ shouldRedirect: false });

  const queryFn = useCallback(async () => {
    if (!slug) throw new Error("No project selected (usePublicProjectBySlug)");
    return axios
      .get<RawPublicProjectInfo>(`${projectsApiRoute}/${slug}`)
      .then<PublicProjectInfo>(({ data: publicProject }) => ({
        ...publicProject,
        codes: publicProject.codes.map(parseCode),
        contracts: publicProject.contracts.map(parseContract),
      }));
  }, [projectsApiRoute, slug]);

  return useQuery(
    [CELATONE_QUERY_KEYS.PUBLIC_PROJECT_BY_SLUG, projectsApiRoute, slug],
    queryFn,
    {
      enabled: Boolean(slug) && projectConfig.enabled,
    }
  );
};

export const usePublicProjectByContractAddress = (
  contractAddress: Option<string>
): UseQueryResult<PublicInfo> => {
  const projectsApiRoute = useBaseApiRoute("contracts");
  const projectConfig = usePublicProjectConfig({ shouldRedirect: false });
  const wasmConfig = useWasmConfig({ shouldRedirect: false });

  const queryFn = useCallback(async () => {
    if (!contractAddress)
      throw new Error(
        "Contract address not found (usePublicProjectByContractAddress)"
      );
    return axios
      .get<PublicInfo>(`${projectsApiRoute}/${contractAddress}`)
      .then(({ data: projectInfo }) => projectInfo);
  }, [projectsApiRoute, contractAddress]);

  return useQuery(
    [
      CELATONE_QUERY_KEYS.PUBLIC_PROJECT_BY_CONTRACT_ADDRESS,
      projectsApiRoute,
      contractAddress,
    ],
    queryFn,
    {
      enabled:
        Boolean(contractAddress) && projectConfig.enabled && wasmConfig.enabled,
      retry: false,
      refetchOnWindowFocus: false,
    }
  );
};

export const usePublicProjectByCodeId = (
  codeId: string
): UseQueryResult<PublicCode> => {
  const projectsApiRoute = useBaseApiRoute("codes");
  const projectConfig = usePublicProjectConfig({ shouldRedirect: false });
  const wasmConfig = useWasmConfig({ shouldRedirect: false });

  const queryFn = useCallback(async () => {
    if (!codeId)
      throw new Error("Code ID not found (usePublicProjectByCodeId)");

    return axios
      .get<RawPublicCode>(`${projectsApiRoute}/${codeId}`)
      .then(({ data: projectInfo }) => parseCode(projectInfo));
  }, [projectsApiRoute, codeId]);

  return useQuery(
    [CELATONE_QUERY_KEYS.PUBLIC_PROJECT_BY_CODE_ID, projectsApiRoute, codeId],
    queryFn,
    {
      enabled: isCodeId(codeId) && projectConfig.enabled && wasmConfig.enabled,
      retry: false,
      refetchOnWindowFocus: false,
    }
  );
};

export const usePublicProjectByAccountAddress = (
  accountAddress: Option<string>
): UseQueryResult<PublicInfo> => {
  const projectsApiRoute = useBaseApiRoute("accounts");
  const projectConfig = usePublicProjectConfig({ shouldRedirect: false });

  const queryFn = useCallback(async () => {
    if (!accountAddress)
      throw new Error(
        "Wallet address not found (usePublicProjectByAccountAddress)"
      );
    return axios
      .get<PublicInfo>(`${projectsApiRoute}/${accountAddress}`)
      .then(({ data: projectInfo }) => projectInfo);
  }, [accountAddress, projectsApiRoute]);
  return useQuery(
    [
      CELATONE_QUERY_KEYS.PUBLIC_PROJECT_BY_WALLET_ADDRESS,
      projectsApiRoute,
      accountAddress,
    ],
    queryFn,
    {
      enabled: Boolean(accountAddress) && projectConfig.enabled,
      retry: false,
      refetchOnWindowFocus: false,
    }
  );
};
