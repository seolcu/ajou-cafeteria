import { BellAlertIcon, BellIcon } from "@heroicons/react/20/solid";
import CustomCheckbox from "./CustomCheckbox";
import useLocalStorage from "../functions/useLocalStorage";

export default function BellButton({ cafeteriaID }) {
  const [notifiedListState, setNotifiedListState] = useLocalStorage(
    "notifiedList",
    []
  );

  return (
    <CustomCheckbox
      state={notifiedListState.includes(cafeteriaID)}
      enableFunction={() =>
        setNotifiedListState([...notifiedListState, cafeteriaID])
      }
      disableFunction={() =>
        setNotifiedListState(
          notifiedListState.filter((item) => item !== cafeteriaID)
        )
      }
      enabledIcon={<BellAlertIcon />}
      disabledIcon={<BellIcon />}
      enabledStyle="text-yellow border-yellow"
      disabledStyle="text-overlay0 border-overlay0"
    />
  );
}
