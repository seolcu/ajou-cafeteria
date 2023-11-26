import { Link, useParams } from "react-router-dom";
import cafeteriaInfoList from "../functions/cafeteriaInfoList";
import { ArrowUturnLeftIcon } from "@heroicons/react/20/solid";
import getAveragePrice from "../functions/getAveragePrice";

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
      <div className="flex flex-col gap-4">
        <div className="flex flex-row gap-4 items-center">
          <div className="flex flex-col gap-1">
            <h2 className="text-lg font-bold">{shop.name}</h2>
            <p
              className={
                averagePrice >= 8000
                  ? "text-red"
                  : averagePrice >= 5000
                  ? "text-yellow"
                  : averagePrice >= 3000
                  ? "text-green"
                  : averagePrice >= 0
                  ? "text-blue"
                  : "text-overlay0"
              }
            >
              평균 {averagePrice}원
            </p>
          </div>
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
      </div>
    </main>
  );
}
