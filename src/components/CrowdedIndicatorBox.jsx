export default function CrowdedIndicatorBox({ crowded }) {
  const date = new Date();
  const intToTimeString = (time) => {
    if (time < 10) {
      return "0" + time;
    } else {
      return time;
    }
  };
  const hours = intToTimeString(date.getHours());
  const minutes = intToTimeString(date.getMinutes() - (date.getMinutes() % 10));

  return (
    <div
      className={
        "text-center p-4 rounded text-base " +
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
          : crowded == 1
          ? "여유 "
          : crowded == 2
          ? "보통"
          : crowded == 3
          ? "혼잡"
          : "정보 없음"}
      </h2>
      <p className="text-xs">마지막 갱신 {hours + ":" + minutes}</p>
    </div>
  );
}
