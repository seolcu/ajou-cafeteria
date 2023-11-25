import { CheckIcon } from "@heroicons/react/20/solid";
import useLocalStorage from "../functions/useLocalStorage";
import CustomCheckbox from "./CustomCheckbox";

export default function SimpleCheckBox({ storageKey, defaultState = false }) {
  const [state, setState] = useLocalStorage(storageKey, defaultState);
  return (
    <CustomCheckbox
      state={state}
      enableFunction={() => setState(true)}
      disableFunction={() => setState(false)}
      enabledIcon={<CheckIcon />}
      disabledIcon={<div />}
      enabledStyle="text-blue border-blue"
      disabledStyle="text-overlay0 border-overlay0"
      checkboxStyle="p-0.5 w-5 h-5 border-2 rounded-full "
    />
  );
}
