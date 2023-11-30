import { Link } from "react-router-dom";

function averagePrice(shop) {
  return (
    shop.menu.reduce((sum, menu) => sum + menu.price, 0) / shop.menu.length
  );
}

export default function Collection({ cafeteriaInfo }) {
  return (
    <>
      <h2 className="font-bold text-lg">식당 목록</h2>
      <div className="grid grid-cols-2 gap-4">
        {cafeteriaInfo.shops.map((shop) => (
          <Link
            key={shop.id}
            to={"/cafeteria/" + cafeteriaInfo.id + "/shop/" + shop.id}
            className="bg-base p-4 rounded-lg text-center font-medium"
          >
            <h3>{shop.name}</h3>
            <p
              className={
                averagePrice(shop) >= 8000
                  ? "text-red"
                  : averagePrice(shop) >= 5000
                  ? "text-yellow"
                  : averagePrice(shop) >= 3000
                  ? "text-green"
                  : averagePrice(shop) >= 0
                  ? "text-blue"
                  : "text-overlay0"
              }
            >
              평균 {averagePrice(shop)}원
            </p>
          </Link>
        ))}
      </div>
    </>
  );
}
