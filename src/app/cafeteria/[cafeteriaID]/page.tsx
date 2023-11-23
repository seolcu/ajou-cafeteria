import cafeteriaInfoList from "@/functions/cafeteriaInfoList";
import Image from "next/image";
import Link from "next/link";

export default function Cafeteria({
  params,
}: {
  params: { cafeteriaID: number };
}) {
  const cafeteriaInfo = cafeteriaInfoList.find(
    (singleCafeteriaInfo) => singleCafeteriaInfo.id == params.cafeteriaID
  );

  if (!cafeteriaInfo) {
    return (
      <main className="p-4">
        <h1 className="text-xl font-bold">Page Not Found</h1>
      </main>
    );
  } else {
    return (
      <main className="p-4 flex flex-col gap-4">
        <div className="flex flex-row gap-4 items-center">
          <Link href="/">←</Link>
          <h1 className="text-xl font-bold">{cafeteriaInfo.name}</h1>
        </div>
        <div className="relative min-w-full h-56">
          <Image
            className="object-cover rounded"
            src={"/" + cafeteriaInfo.picture}
            fill
            sizes="100%"
            alt="사진"
          />
        </div>
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
            href={"/cafeteria/" + cafeteriaInfo.id + "/menu"}
            className="bg-base dark:bg-base-dark flex flex-col gap-4 justify-between items-center p-4 rounded"
          >
            <h2 className="font-medium">메뉴</h2>
          </Link>
        </div>
      </main>
    );
  }
}
