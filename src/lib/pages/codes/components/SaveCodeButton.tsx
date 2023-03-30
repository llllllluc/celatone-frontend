import { CustomIcon } from "lib/components/icon";
import { SaveNewCodeModal } from "lib/components/modal/code/SaveNewCode";

export const SaveCodeButton = () => (
  <SaveNewCodeModal
    buttonProps={{
      variant: "outline-primary",
      leftIcon: <CustomIcon name="bookmark" color="violet.light" />,
      children: "Save New Code",
    }}
  />
);
