import useLocalStorage from "../functions/useLocalStorage";

export default function PersistentRoundButton({
  storageKey,
  cafeteriaID,
  enabledIcon,
  disabledIcon,
  enabledStyle,
  disabledStyle,
}) {
  const checkboxStyle =
    "text-center font-bold p-0.5 w-6 h-6 border-2 rounded-full ";

  const [state, setState] = useLocalStorage(storageKey, []);

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