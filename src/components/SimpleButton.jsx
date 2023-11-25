export default function SimpleButton({ children, enableCondition, onClick }) {
  const buttonStyle = "p-2 rounded ";

  return (
    <button
      className={
        enableCondition
          ? buttonStyle + "bg-blue text-base"
          : buttonStyle + "bg-overlay0"
      }
      onClick={() => onClick()}
    >
      {children}
    </button>
  );
}
