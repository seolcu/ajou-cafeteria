import cafeteriaInfoList from "../functions/cafeteriaInfoList";
import { Link } from "react-router-dom";
import getImageUrl from "../functions/getImageUrl";
import LikeButton from "../components/LikeButton";
import BellButton from "../components/BellButton";
import { Cog6ToothIcon, HomeIcon } from "@heroicons/react/20/solid";

export default function App() {
  return (
    <main className="flex flex-col gap-4 p-4">
      <header className="flex flex-row gap-4 items-center">
        <HomeIcon className="w-4 h-4" />
        <h1 className="text-xl font-bold">학생식당</h1>
      </header>
      <div className="grid grid-cols-2 gap-4">
        {cafeteriaInfoList.map((cafeteriaInfo) => {
          return (
            <div
              className="bg-base flex flex-col gap-4 justify-between items-center p-4 rounded"
              key={cafeteriaInfo.id}
            >
              <Link
                to={`/cafeteria/${cafeteriaInfo.id}`}
                className="w-full flex flex-col gap-4 justify-between items-center"
              >
                <img
                  className="h-20 w-20 rounded-full border-2 border-text object-cover"
                  src={getImageUrl(cafeteriaInfo.pictureName)}
                  alt="사진"
                />
                <h2 className="font-medium">
                  {cafeteriaInfo.name}:{" "}
                  <span
                    className={
                      cafeteriaInfo.crowded == 0
                        ? "text-overlay0"
                        : cafeteriaInfo.crowded == 1
                        ? "text-green"
                        : cafeteriaInfo.crowded == 2
                        ? "text-yellow"
                        : cafeteriaInfo.crowded == 3
                        ? "text-red"
                        : "text-blue"
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
                  </span>
                </h2>
              </Link>
            </div>
          );
        })}
        <Link
          to="/settings"
          className="bg-base flex flex-col gap-4 justify-between items-center p-4 rounded"
        >
          <Cog6ToothIcon className="h-20 w-20 border-2 rounded-full p-2 text-text border-text" />
          <h2 className="font-medium">설정</h2>
        </Link>
      </div>
    </main>
  );
}
