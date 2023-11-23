import { BellAlertIcon, BellIcon } from "@heroicons/react/20/solid";
import LikeOrBellButton from "./LikeOrBellButton";

export default function BellButton({ cafeteriaID }: { cafeteriaID: number }) {
  return (
    <LikeOrBellButton
      storageKey="notified"
      cafeteriaID={cafeteriaID}
      enabledIcon={<BellAlertIcon />}
      disabledIcon={<BellIcon />}
      enabledStyle="text-yellow dark:text-yellow-dark border-yellow dark:border-yellow-dark"
      disabledStyle="text-gray border-gray"
    />
  );
}
