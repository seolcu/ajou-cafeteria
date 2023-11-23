import useLocalStorage from "@/functions/useLocalStorage";
import { useState } from "react";

function LikeOrBellButton({
  storageKey,
  cafeteriaID,
  enabledIcon,
  disabledIcon,
  enabledStyle,
  disabledStyle = "text-gray border-gray",
}: {
  storageKey: string;
  cafeteriaID: number;
  enabledIcon: JSX.Element;
  disabledIcon: JSX.Element;
  enabledStyle: string;
  disabledStyle: string;
}) {
  const checkboxStyle = "text-center font-bold w-6 h-6 border-2 rounded-full ";

  const [state, setState] = useLocalStorage<number[]>(storageKey, []);

  function addToList() {
    if (!state.includes(cafeteriaID)) {
      setState([...state, cafeteriaID].sort());
    }
  }

  function removeFromList() {
    if (state.includes(cafeteriaID)) {
      setState(state.filter((item) => item !== cafeteriaID));
    }
  }

  if (state.includes(cafeteriaID)) {
    return (
      <button
        className={checkboxStyle + enabledStyle}
        onClick={() => {
          removeFromList();
        }}
      >
        {enabledIcon}
      </button>
    );
  } else {
    return (
      <button
        className={checkboxStyle + disabledStyle}
        onClick={() => {
          addToList();
        }}
      >
        {disabledIcon}
      </button>
    );
  }
}

export default LikeOrBellButton;
