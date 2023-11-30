import cafeteriaInfoList from "../functions/cafeteriaInfoList";
import { Link } from "react-router-dom";
import getImageUrl from "../functions/getImageUrl";
import { Cog6ToothIcon, HomeIcon } from "@heroicons/react/20/solid";
import CrowdedIndicatorBadge from "../components/CrowdedIndicatorBadge";
import getCrowded from "../functions/getCrowded";

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
              className="bg-base flex flex-col gap-4 justify-between items-center p-4 rounded-lg"
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
                <div className="flex flex-row gap-1 items-center">
                  <h2 className="font-medium">{cafeteriaInfo.name}</h2>
                  <CrowdedIndicatorBadge crowded={getCrowded(cafeteriaInfo)} />
                </div>
              </Link>
            </div>
          );
        })}
        <Link
          to="/settings"
          className="bg-base flex flex-col gap-4 justify-between items-center p-4 rounded-lg"
        >
          <Cog6ToothIcon className="h-20 w-20 border-2 rounded-full p-2 text-text border-text" />
          <h2 className="font-medium">설정</h2>
        </Link>
      </div>
    </main>
  );
}
