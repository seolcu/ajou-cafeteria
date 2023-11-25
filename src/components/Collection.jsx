import { Link } from "react-router-dom";

export default function Collection({ cafeteriaInfo }) {
  return (
    <>
      <h2 className="font-bold text-lg">식당 목록</h2>
      <div className="grid grid-cols-2 gap-4">
        {cafeteriaInfo.shops.map((shop) => (
          <Link
            key={shop.id}
            to={"/cafeteria/" + cafeteriaInfo.id + "/shops/" + shop.id}
            className="bg-base p-4 rounded"
          >
            <h3 className="font-medium text-center">{shop.name}</h3>
          </Link>
        ))}
      </div>
    </>
  );
}
