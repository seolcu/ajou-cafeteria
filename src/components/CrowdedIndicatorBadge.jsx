export default function CrowdedIndicatorBadge({ crowded }) {
  return (
    <div
      className={
        "text-center rounded-lg text-base text-xs font-bold px-1.5 py-0.5 " +
        (crowded == 0
          ? "bg-overlay0"
          : crowded == 1
          ? "bg-green"
          : crowded == 2
          ? "bg-yellow"
          : crowded == 3
          ? "bg-red"
          : "bg-overlay0")
      }
    >
      {crowded == 0
        ? "휴무"
        : crowded == 1
        ? "여유"
        : crowded == 2
        ? "보통"
        : crowded == 3
        ? "혼잡"
        : "정보 없음"}
    </div>
  );
}
