import { Link, useParams } from "react-router-dom";
import cafeteriaInfoList from "../functions/cafeteriaInfoList";
import ErrorPage from "./ErrorPage";
import getImageUrl from "../functions/getImageUrl";
import LikeButton from "../components/LikeButton";
import BellButton from "../components/BellButton";
import { ArrowUturnLeftIcon } from "@heroicons/react/20/solid";
import Restaurant from "../components/Restaurant";
import Random from "../components/Random";
import Collection from "../components/Collection";

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

  let averagePrice = 0;
  if (cafeteriaInfo.type == "collection") {
    let sum = 0;
    let count = 0;
    cafeteriaInfo.shops.forEach((shop) => {
      shop.menu.forEach((menu) => {
        sum += menu.price;
        count++;
      });
    });
    averagePrice = Math.round(sum / count);
  } else if (cafeteriaInfo.type == "random") {
    averagePrice = cafeteriaInfo.price;
  } else if (cafeteriaInfo.type == "restaurant") {
    averagePrice =
      cafeteriaInfo.menu.reduce((sum, menu) => sum + menu.price, 0) /
      cafeteriaInfo.menu.length;
  }

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
        </div>

        <hr className="border-2 rounded border-text" />

        {cafeteriaInfo.type == "collection" ? (
          <Collection cafeteriaInfo={cafeteriaInfo} />
        ) : cafeteriaInfo.type == "random" ? (
          <Random cafeteriaInfo={cafeteriaInfo} />
        ) : cafeteriaInfo.type == "restaurant" ? (
          <Restaurant cafeteriaInfo={cafeteriaInfo} />
        ) : (
          <>
            <h2 className="font-bold text-lg">error</h2>
          </>
        )}
      </main>
    );
  }
}
