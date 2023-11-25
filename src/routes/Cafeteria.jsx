import { Link, useParams } from "react-router-dom";
import cafeteriaInfoList from "../functions/cafeteriaInfoList";
import ErrorPage from "./ErrorPage";
import getImageUrl from "../functions/getImageUrl";
import LikeButton from "../components/LikeButton";
import BellButton from "../components/BellButton";

export default function Cafeteria() {
  const params = useParams();
  const cafeteriaInfo = cafeteriaInfoList.find(
    (singleCafeteriaInfo) => singleCafeteriaInfo.id == params.cafeteriaID
  );

  if (!cafeteriaInfo) {
    return <ErrorPage />;
  } else {
    return (
      <main className="p-4 flex flex-col gap-4">
        <header className="flex flex-row gap-4 items-center">
          <Link to="/">←</Link>
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
              "flex flex-col gap-4 justify-between items-center p-4 rounded font-medium " +
              (cafeteriaInfo.crowded == 0
                ? "bg-overlay0 text-base"
                : cafeteriaInfo.crowded == 1
                ? "bg-green text-base "
                : cafeteriaInfo.crowded == 2
                ? "bg-yellow text-base "
                : cafeteriaInfo.crowded == 3
                ? "bg-red text-base"
                : "bg-blue text-base")
            }
          >
            {cafeteriaInfo.crowded == 0
              ? "휴무"
              : cafeteriaInfo.crowded == 1
              ? "여유"
              : cafeteriaInfo.crowded == 2
              ? "보통"
              : cafeteriaInfo.crowded == 3
              ? "혼잡"
              : "정보 없음"}
          </div>
          <Link
            to={"/cafeteria/" + cafeteriaInfo.id + "/menu"}
            className="bg-base flex flex-col gap-4 justify-between items-center p-4 rounded font-medium "
          >
            메뉴
          </Link>
        </div>
      </main>
    );
  }
}
