import { HeartIcon } from "@heroicons/react/20/solid";
import CustomCheckbox from "./CustomCheckbox";
import useLocalStorage from "../functions/useLocalStorage";

export default function LikeButton({ cafeteriaID }) {
  const [likedListState, setLikedListState] = useLocalStorage("likedList", []);

  return (
    <CustomCheckbox
      state={likedListState.includes(cafeteriaID)}
      enableFunction={() => setLikedListState([...likedListState, cafeteriaID])}
      disableFunction={() =>
        setLikedListState(likedListState.filter((item) => item !== cafeteriaID))
      }
      enabledIcon={<HeartIcon />}
      disabledIcon={<HeartIcon />}
      enabledStyle="text-red border-red"
      disabledStyle="text-overlay0 border-overlay0"
    />
  );
}
