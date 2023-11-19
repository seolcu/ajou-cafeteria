import Image from "next/image";
import cafeteriaInfoList from "../functions/cafeteriaInfoList";
import ajouLogo from "public/ajou.png";

export default function Home() {
  return (
    <main className="flex flex-col gap-4 p-4">
      <h1 className="text-xl font-bold">학생식당</h1>
      <div className="grid grid-cols-2 gap-4">
        {cafeteriaInfoList.map((cafeteriaInfo) => {
          return (
            <a
              href={"/cafeteria/" + cafeteriaInfo.id}
              className="bg-base dark:bg-base-dark flex flex-col gap-4 justify-between items-center p-4 rounded"
              key={cafeteriaInfo.id}
            >
              <Image src={ajouLogo} width={75} height={75} alt="사진" />
              <h2 className="font-medium">
                {cafeteriaInfo.name}:{" "}
                <span
                  className={
                    cafeteriaInfo.crowded == 0
                      ? "text-gray dark:text-gray-dark"
                      : cafeteriaInfo.crowded == 1
                      ? "text-green dark:text-green-dark"
                      : cafeteriaInfo.crowded == 2
                      ? "text-yellow dark:text-yellow-dark"
                      : cafeteriaInfo.crowded == 3
                      ? "text-red dark:text-red-dark"
                      : "text-blue dark:text-blue-dark"
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
            </a>
          );
        })}
        <a
          href="/settings"
          className="bg-base dark:bg-base-dark flex flex-col gap-4 justify-between items-center p-4 rounded"
        >
          <Image src={ajouLogo} width={75} height={75} alt="사진" />
          <h2 className="font-medium">설정</h2>
        </a>
      </div>
    </main>
  );
}
