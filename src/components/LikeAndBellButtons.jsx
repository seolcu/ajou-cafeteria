import { HeartIcon } from "@heroicons/react/20/solid";
import { BellAlertIcon, BellIcon } from "@heroicons/react/20/solid";
import PersistentRoundButton from "./PersistentRoundButton";

export default function LikeAndBellButtons({ cafeteriaID, className }) {
  return (
    <div className={"flex flex-row gap-1 items-center"}>
      <PersistentRoundButton
        storageKey="liked"
        cafeteriaID={cafeteriaID}
        enabledIcon={<HeartIcon />}
        disabledIcon={<HeartIcon />}
        enabledStyle="text-red border-red"
        disabledStyle="text-overlay0 border-overlay0"
      />
      <PersistentRoundButton
        storageKey="notified"
        cafeteriaID={cafeteriaID}
        enabledIcon={<BellAlertIcon />}
        disabledIcon={<BellIcon />}
        enabledStyle="text-yellow border-yellow"
        disabledStyle="text-overlay0 border-overlay0"
      />
    </div>
  );
}
