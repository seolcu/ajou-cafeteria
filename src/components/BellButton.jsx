import { BellAlertIcon, BellIcon } from "@heroicons/react/20/solid";
import LikeOrBellButton from "./LikeOrBellButton";

export default function BellButton({ cafeteriaID }) {
  return (
    <LikeOrBellButton
      storageKey="notified"
      cafeteriaID={cafeteriaID}
      enabledIcon={<BellAlertIcon />}
      disabledIcon={<BellIcon />}
      enabledStyle="text-yellow border-yellow"
      disabledStyle="text-overlay0 border-overlay0"
    />
  );
}
