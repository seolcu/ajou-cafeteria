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

  const crowdedIndicatorStyle =
    "text-center p-4 rounded font-medium text-base ";

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
          {cafeteriaInfo.crowded == 0 ? (
            <div className={crowdedIndicatorStyle + "bg-overlay0"}>휴무</div>
          ) : cafeteriaInfo.crowded == 1 ? (
            <div className={crowdedIndicatorStyle + "bg-green"}>여유</div>
          ) : cafeteriaInfo.crowded == 2 ? (
            <div className={crowdedIndicatorStyle + "bg-yellow"}>보통</div>
          ) : cafeteriaInfo.crowded == 3 ? (
            <div className={crowdedIndicatorStyle + "bg-red"}>혼잡</div>
          ) : (
            <div className={crowdedIndicatorStyle + "bg-blue"}>정보 없음</div>
          )}

          <div className="bg-base text-center p-4 rounded font-medium">
            뭐 넣을지 고민중
          </div>
        </div>

        <hr className="border-2 rounded border-text" />

        {cafeteriaInfo.type == "collection" ? (
          <>
            <h2 className="font-bold text-lg">식당 목록</h2>
          </>
        ) : cafeteriaInfo.type == "random" ? (
          <>
            <h2 className="font-bold text-lg">오늘의 메뉴</h2>
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
