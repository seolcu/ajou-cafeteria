import CheapBreakfastBox from "./CheapBreakfastBox";

export default function Random({ cafeteriaInfo }) {
  return (
    <>
      <h2 className="font-bold text-lg">오늘의 메뉴</h2>
      {cafeteriaInfo.cheapBreakfast ? (
        <CheapBreakfastBox
          leftQuantity={cafeteriaInfo.cheapBreakfastLeft}
          fullQuantity={cafeteriaInfo.cheapBreakfastTotal}
        />
      ) : (
        <></>
      )}
      {cafeteriaInfo.menuofToday.map((meal) => (
        <div className="flex flex-row gap-4 bg-base p-4 rounded" key={meal.id}>
          <div className="basis-1/2 flex flex-col gap-1">
            <h3 className="font-medium">
              오늘의{" "}
              {meal.position == "breakfast"
                ? "아침"
                : meal.position == "lunch"
                ? "점심"
                : meal.position == "dinner"
                ? "저녁"
                : "에러: 개발자에게 문의하세요"}
            </h3>
            <ul className="text-sm">
              {meal.menu.map((food) => (
                <li key={Math.random()}>- {food}</li>
              ))}
            </ul>
          </div>
          <div className="basis-1/2 flex flex-col gap-1">
            <h4 className="font-medium text-sm">영양 정보</h4>
            <ul>
              {meal.ingredients.map((ingredient) => (
                <li key={Math.random()} className="text-xs">
                  - {ingredient}{" "}
                </li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </>
  );
}
