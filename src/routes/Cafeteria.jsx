import cafeteriaInfoList from "../functions/cafeteriaInfoList";
import ErrorPage from "./ErrorPage";

function Cafeteria({ params }) {
  const cafeteriaInfo = cafeteriaInfoList.find(
    (singleCafeteriaInfo) => singleCafeteriaInfo.id == params.cafeteriaID
  );

  if (!cafeteriaInfo) {
    return <ErrorPage />;
  } else {
    return (
      <main className="p-4 flex flex-col gap-4">
        <div className="flex flex-row gap-4 items-center">
          <Link href="/">←</Link>
          <h1 className="text-xl font-bold">{cafeteriaInfo.name}</h1>
        </div>
        <img
          className="h-56 rounded"
          src={"/" + cafeteriaInfo.pictureName}
          alt="사진"
        />
        <div className="grid grid-cols-2 gap-4">
          <div
            className={
              "flex flex-col gap-4 justify-between items-center p-4 rounded " +
              (cafeteriaInfo.crowded == 0
                ? "bg-gray dark:bg-gray-dark text-base"
                : cafeteriaInfo.crowded == 1
                ? "bg-green dark:bg-green-dark text-base dark:text-base-dark"
                : cafeteriaInfo.crowded == 2
                ? "bg-yellow dark:bg-yellow-dark text-base dark:text-base-dark"
                : cafeteriaInfo.crowded == 3
                ? "bg-red dark:bg-red-dark text-base dark:text-base-dark"
                : "bg-blue dark:bg-blue-dark text-base dark:text-base-dark")
            }
          >
            <h2 className="font-medium">
              {cafeteriaInfo.crowded == 0
                ? "휴무"
                : cafeteriaInfo.crowded == 1
                ? "여유"
                : cafeteriaInfo.crowded == 2
                ? "보통"
                : cafeteriaInfo.crowded == 3
                ? "혼잡"
                : "정보 없음"}
            </h2>
          </div>
          <Link
            to={"/cafeteria/" + cafeteriaInfo.id + "/menu"}
            className="bg-base flex flex-col gap-4 justify-between items-center p-4 rounded"
          >
            <h2 className="font-medium">메뉴</h2>
          </Link>
        </div>
      </main>
    );
  }
}

export default Cafeteria;
