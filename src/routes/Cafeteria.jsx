import { Link, useParams } from "react-router-dom";
import cafeteriaInfoList from "../functions/cafeteriaInfoList";
import ErrorPage from "./ErrorPage";
import getImageUrl from "../functions/getImageUrl";
import LikeButton from "../components/LikeButton";
import BellButton from "../components/BellButton";
import { ArrowUturnLeftIcon } from "@heroicons/react/20/solid";

export default function Cafeteria() {
  const params = useParams();
  const cafeteriaInfo = cafeteriaInfoList.find(
    (singleCafeteriaInfo) => singleCafeteriaInfo.id == params.cafeteriaID
  );

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

  if (!cafeteriaInfo) {
    return <ErrorPage />;
  } else {
    return (
      <main className="p-4 flex flex-col gap-4">
        <header className="flex flex-row gap-4 items-center">
          <Link to="/" className="w-4 h-4">
            <ArrowUturnLeftIcon />
          </Link>
          <h1 className="text-xl font-bold">{cafeteriaInfo.name}</h1>
          <div className="grow" />
          <div className="flex flex-row gap-1">
            <LikeButton cafeteriaID={cafeteriaInfo.id} />
            <BellButton cafeteriaID={cafeteriaInfo.id} />
          </div>
        </header>

        <img
          className="h-60 rounded object-cover border-2 border-text"
          src={getImageUrl(cafeteriaInfo.pictureName)}
          alt="사진"
        />

        <div className="grid grid-cols-2 gap-4">
          <div
            className={
              "text-center p-4 rounded text-base " +
              (cafeteriaInfo.crowded == 0
                ? "bg-overlay0"
                : cafeteriaInfo.crowded == 1
                ? "bg-green"
                : cafeteriaInfo.crowded == 2
                ? "bg-yellow"
                : cafeteriaInfo.crowded == 3
                ? "bg-red"
                : "bg-blue")
            }
          >
            <h2 className="font-medium">
              {cafeteriaInfo.crowded == 0
                ? "휴무"
                : cafeteriaInfo.crowded == 1
                ? "여유 "
                : cafeteriaInfo.crowded == 2
                ? "보통"
                : cafeteriaInfo.crowded == 3
                ? "혼잡"
                : "정보 없음"}
            </h2>
            <p className="text-xs">마지막 갱신 {hours + ":" + minutes}</p>
          </div>

          <div className="bg-base text-center p-4 rounded font-medium">
            뭐 넣을지 고민중
          </div>
        </div>

        <hr className="border-2 rounded border-text" />

        {cafeteriaInfo.type == "collection" ? (
          <>
            <h2 className="font-bold text-lg">식당 목록</h2>
            <div className="grid grid-cols-2 gap-4">
              {cafeteriaInfo.shops.map((shop) => (
                <Link
                  to={"/cafeteria/" + cafeteriaInfo.id + "/shops/" + shop.id}
                  className="bg-base p-4 rounded"
                >
                  <h3 className="font-medium text-center">{shop.name}</h3>
                </Link>
              ))}
            </div>
          </>
        ) : cafeteriaInfo.type == "random" ? (
          <>
            <h2 className="font-bold text-lg">오늘의 메뉴</h2>
            {cafeteriaInfo.menuofToday.map((meal) => (
              <div className="flex flex-row gap-4 bg-base p-4 rounded">
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
                      <li>- {food}</li>
                    ))}
                  </ul>
                </div>
                <div className="basis-1/2 flex flex-col gap-1">
                  <h4 className="font-medium text-sm">영양 정보</h4>
                  <ul>
                    {meal.ingredients.map((ingredient) => (
                      <li className="text-xs">- {ingredient} </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </>
        ) : cafeteriaInfo.type == "restaurant" ? (
          <>
            <h2 className="font-bold text-lg">메뉴 목록</h2>
          </>
        ) : (
          <>
            <h2 className="font-bold text-lg">error</h2>
          </>
        )}
      </main>
    );
  }
}
