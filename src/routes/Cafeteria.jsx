import { Link, useParams } from "react-router-dom";
import cafeteriaInfoList from "../functions/cafeteriaInfoList";
import ErrorPage from "./ErrorPage";
import getImageUrl from "../functions/getImageUrl";
import BellButton from "../components/BellButton";
import { ArrowUturnLeftIcon } from "@heroicons/react/20/solid";
import Restaurant from "../components/Restaurant";
import Random from "../components/Random";
import Collection from "../components/Collection";
import AveragePriceIndicatorBox from "../components/AveragePriceIndicatorBox";
import getAveragePrice from "../functions/getAveragePrice";
import CrowdedIndicatorBox from "../components/CrowdedIndicatorBox";
import CrowdedIndicatorBadge from "../components/CrowdedIndicatorBadge";
import getCrowded from "../functions/getCrowded";

export default function Cafeteria() {
  const params = useParams();
  const cafeteriaInfo = cafeteriaInfoList.find(
    (singleCafeteriaInfo) => singleCafeteriaInfo.id == params.cafeteriaID
  );

  const averagePrice = getAveragePrice(cafeteriaInfo);

  if (!cafeteriaInfo) {
    return <ErrorPage />;
  } else {
    return (
      <main className="p-4 flex flex-col gap-4">
        <header className="flex flex-row gap-4 items-center">
          <Link to="/" className="w-4 h-4">
            <ArrowUturnLeftIcon />
          </Link>
          <div className="flex flex-row gap-2 items-center">
            <h1 className="text-xl font-bold">{cafeteriaInfo.name}</h1>
            <CrowdedIndicatorBadge crowded={getCrowded(cafeteriaInfo)} />
          </div>
          <div className="grow" />
          <BellButton cafeteriaID={cafeteriaInfo.id} />
        </header>

        <img
          className="h-60 rounded-lg object-cover border-2 border-text"
          src={getImageUrl(cafeteriaInfo.pictureName)}
          alt="사진"
        />

        <div className="grid grid-cols-2 gap-4">
          <CrowdedIndicatorBox cafeteriaInfo={cafeteriaInfo} />
          <AveragePriceIndicatorBox
            cafeteriaInfo={cafeteriaInfo}
            averagePrice={averagePrice}
          />
        </div>

        <hr className="border-2 rounded-lg border-text" />

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
