import { HeartIcon } from "@heroicons/react/20/solid";
import LikeOrBellButton from "./LikeOrBellButton";

export default function LikeButton({ cafeteriaID }: { cafeteriaID: number }) {
  return (
    <LikeOrBellButton
      storageKey="liked"
      cafeteriaID={cafeteriaID}
      enabledIcon={<HeartIcon />}
      disabledIcon={<HeartIcon />}
      enabledStyle="text-red dark:text-red-dark border-red dark:border-red-dark"
      disabledStyle="text-gray border-gray"
    />
  );
}
