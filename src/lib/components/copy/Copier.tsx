import type { IconProps, LayoutProps } from "@chakra-ui/react";

import { CustomIcon } from "../icon";
import { AmpTrackCopier } from "lib/services/amplitude";

import { CopyTemplate } from "./CopyTemplate";

interface CopierProps {
  type: string;
  value: string;
  copyLabel?: string;
  display?: LayoutProps["display"];
  ml?: IconProps["ml"];
  amptrackSection?: string;
}

export const Copier = ({
  type,
  value,
  copyLabel,
  display = "inline",
  ml = 2,
  amptrackSection,
}: CopierProps) => (
  <CopyTemplate
    value={value}
    copyLabel={copyLabel}
    triggerElement={
      <CustomIcon
        id={type}
        h={6}
        className="copier"
        display={display}
        cursor="pointer"
        m={0}
        marginLeft={ml}
        onClick={() => AmpTrackCopier(amptrackSection, type)}
        name="copy"
        boxSize={3}
        color="gray.600"
        minH={{ base: 6, md: "auto" }}
      />
    }
  />
);
