import useLocalStorage from "@/functions/useLocalStorage";

function LikeOrBellButton(
  key: string,
  cafeteriaID: number,
  enabledIcon: JSX.Element,
  disabledIcon: JSX.Element,
  enabledStyle: string,
  disabledStyle: string
) {
  const checkboxStyle = "text-center font-bold w-6 h-6 border-2 rounded-full ";

  const [state, setState] = useLocalStorage<number[]>(key, []);

  function addToList() {
    if (!state.includes(cafeteriaID)) {
      setState([...state, cafeteriaID]);
    }
  }

  function removeFromList() {
    if (state.includes(cafeteriaID)) {
      let tmp = state;
      tmp.splice(state.indexOf(cafeteriaID), 1);
      setState(tmp);
    }
  }

  return state.includes(cafeteriaID) ? (
    <button
      className={checkboxStyle + enabledStyle}
      onClick={() => {
        addToList();
      }}
    >
      {enabledIcon}
    </button>
  ) : (
    <button
      className={checkboxStyle + disabledStyle}
      onClick={() => {
        removeFromList();
      }}
    >
      {disabledIcon}
    </button>
  );
}

export default LikeOrBellButton;
