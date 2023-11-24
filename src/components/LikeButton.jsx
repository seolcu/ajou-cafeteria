import { HeartIcon } from "@heroicons/react/20/solid";
import LikeOrBellButton from "./LikeOrBellButton";

export default function LikeButton({ cafeteriaID }) {
  return (
    <LikeOrBellButton
      storageKey="liked"
      cafeteriaID={cafeteriaID}
      enabledIcon={<HeartIcon />}
      disabledIcon={<HeartIcon />}
      enabledStyle="text-red border-reds"
      disabledStyle="text-overlay0 border-overlay0"
    />
  );
}
