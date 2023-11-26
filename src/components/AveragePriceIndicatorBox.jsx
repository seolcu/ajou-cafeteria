export default function AveragePriceIndicatorBox({
  cafeteriaInfo,
  averagePrice,
}) {
  return (
    <div
      className={
        "text-base text-center p-4 rounded font-medium " +
        (averagePrice >= 8000
          ? "bg-red"
          : averagePrice >= 5000
          ? "bg-yellow "
          : averagePrice >= 3000
          ? "bg-green"
          : averagePrice >= 0
          ? "bg-blue"
          : "bg-overlay0")
      }
    >
      <h2 className="font-medium">
        {averagePrice >= 8000
          ? "비쌈"
          : averagePrice >= 5000
          ? "보통"
          : averagePrice >= 3000
          ? "저렴"
          : averagePrice >= 0
          ? "매우 저렴"
          : "정보 없음"}
      </h2>
      <p className="text-xs">
        {cafeteriaInfo.type == "random" ? "" : "평균 "}
        {averagePrice}원
      </p>
    </div>
  );
}
