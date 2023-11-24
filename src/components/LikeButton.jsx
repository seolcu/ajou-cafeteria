import { HeartIcon } from "@heroicons/react/20/solid";
import LikeOrBellButton from "./LikeOrBellButon";

function LikeButton({ cafeteriaID }) {
  return (
    <LikeOrBellButton
      storageKey="liked"
      cafeteriaID={cafeteriaID}
      enabledIcon={<HeartIcon />}
      disabledIcon={<HeartIcon />}
      enabledStyle="text-red border-red"
      disabledStyle="text-overlay0 border-overlay0"
    />
  );
}

export default LikeButton;
