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
import AveragePriceIndicatorBox from "../components/AveragePriceIndicatorBox";
import getAveragePrice from "../functions/getAveragePrice";
import CrowdedIndicatorBox from "../components/CrowdedIndicatorBox";

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
          <h1 className="text-3xl font-bold">{cafeteriaInfo.name}</h1>
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
          <CrowdedIndicatorBox crowded={cafeteriaInfo.crowded} />
          <AveragePriceIndicatorBox
            cafeteriaInfo={cafeteriaInfo}
            averagePrice={averagePrice}
          />
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
            <h2 className="font-bold text-2xl">error</h2>
          </>
        )}
      </main>
    );
  }
}
