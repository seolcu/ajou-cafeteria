import { Link, useParams } from "react-router-dom";
import cafeteriaInfoList from "../functions/cafeteriaInfoList";
import { ArrowUturnLeftIcon } from "@heroicons/react/20/solid";
import getAveragePrice from "../functions/getAveragePrice";
import AveragePriceIndicatorBox from "../components/AveragePriceIndicatorBox";
import CrowdedIndicatorBox from "../components/CrowdedIndicatorBox";

export default function Shop() {
  const params = useParams();
  const cafeteriaInfo = cafeteriaInfoList.find(
    (singleCafeteriaInfo) => singleCafeteriaInfo.id == params.cafeteriaID
  );
  const shop = cafeteriaInfo.shops.find(
    (singleShop) => singleShop.id == params.shopID
  );
  const averagePrice = getAveragePrice(shop);
  return (
    <main className="p-4 flex flex-col gap-4">
      <header className="flex flex-row gap-4 items-center">
        <Link to={"/cafeteria/" + cafeteriaInfo.id} className="w-4 h-4">
          <ArrowUturnLeftIcon />
        </Link>
        <h1 className="text-xl font-bold">
          {cafeteriaInfo.name} - {shop.name}
        </h1>
      </header>

      <div className="grid grid-cols-2 gap-4">
        <CrowdedIndicatorBox crowded={cafeteriaInfo.crowded} />
        <AveragePriceIndicatorBox
          cafeteriaInfo={shop}
          averagePrice={averagePrice}
        />
      </div>

      <div className="flex flex-col gap-4">
        {shop.menu.map((menu) => (
          <div
            key={menu.id}
            className="bg-base p-4 rounded text-center font-medium"
          >
            <h3>{menu.name}</h3>
            <p>{menu.price}원</p>
          </div>
        ))}
      </div>
    </main>
  );
}
