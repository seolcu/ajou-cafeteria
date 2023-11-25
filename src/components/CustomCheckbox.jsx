export default function CustomCheckbox({
  state,
  enableFunction,
  disableFunction,
  enabledIcon,
  disabledIcon,
  enabledStyle,
  disabledStyle,
  checkboxStyle = "p-0.5 w-6 h-6 border-2 rounded-full ",
}) {
  if (state) {
    return (
      <button
        className={checkboxStyle + enabledStyle}
        onClick={() => disableFunction()}
      >
        {enabledIcon}
      </button>
    );
  } else {
    return (
      <button
        className={checkboxStyle + disabledStyle}
        onClick={() => enableFunction()}
      >
        {disabledIcon}
      </button>
    );
  }
}
