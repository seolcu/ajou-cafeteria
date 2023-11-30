import getCrowded from "../functions/getCrowded";

export default function CrowdedIndicatorBox({ cafeteriaInfo }) {
  const crowded = getCrowded(cafeteriaInfo);
  return (
    <div
      className={
        "text-center p-4 rounded-lg text-base " +
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
      <h2 className="font-medium">
        {crowded == 0
          ? "휴무"
          : cafeteriaInfo.totalSeats - cafeteriaInfo.occupiedSeats + "석 남음"}
      </h2>
      <p className="text-xs">
        전체 {cafeteriaInfo.totalSeats}석 {crowded == 0 ? "" : "중"}
      </p>
    </div>
  );
}
