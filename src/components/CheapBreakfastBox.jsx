export default function CheapBreakfastBox({ leftQuantity, fullQuantity }) {
  const leftPercentage = leftQuantity / fullQuantity;
  return (
    <div
      className={
        "text-center p-4 rounded text-base " +
        (leftPercentage > 2 / 3
          ? "bg-green"
          : leftPercentage > 1 / 3
          ? "bg-yellow"
          : leftPercentage > 0
          ? "bg-red"
          : "bg-overlay0")
      }
    >
      <h2 className="font-bold">{leftQuantity}개 남음</h2>
      <p className="text-xs">천원 조식 {fullQuantity}개 중</p>
    </div>
  );
}
