import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import cafeteriaInfoList from "./functions/cafeteriaInfoList";

function App() {
  return (
    <main className="flex flex-col gap-4 p-4">
      <h1 className="text-xl font-bold">학생식당</h1>
      <div className="grid grid-cols-2 gap-4">
        {cafeteriaInfoList.map((cafeteriaInfo) => {
          return (
            <div
              className="bg-base flex flex-col gap-4 justify-between items-center p-4 rounded"
              key={cafeteriaInfo.id}
            >
              <div className="flex flex-row w-full gap-1 text-sm items-center justify-end">
                <LikeButton cafeteriaID={cafeteriaInfo.id} />
                <BellButton cafeteriaID={cafeteriaInfo.id} />
              </div>
              <Link
                href={"/cafeteria/" + cafeteriaInfo.id}
                className="flex flex-col gap-4 justify-between items-center"
              >
                <div className="relative w-20 h-20">
                  <Image
                    className="object-cover rounded-full border-2 border-text"
                    src={"/" + cafeteriaInfo.picture}
                    fill
                    sizes="100%"
                    alt="사진"
                  />
                </div>
                <h2 className="font-medium">
                  {cafeteriaInfo.name}:{" "}
                  <span
                    className={
                      cafeteriaInfo.crowded == 0
                        ? "text-overlay0"
                        : cafeteriaInfo.crowded == 1
                        ? "text-green"
                        : cafeteriaInfo.crowded == 2
                        ? "text-yellow"
                        : cafeteriaInfo.crowded == 3
                        ? "text-red"
                        : "text-blue"
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
              </Link>
            </div>
          );
        })}
        <Link
          href="/settings"
          className="bg-base flex flex-col gap-4 justify-between items-center p-4 rounded"
        >
          {/* place holder */}
          <div className="h-6"></div>
          <div className="relative w-20 h-20">
            <Image
              className="object-cover rounded-full border-2 border-text"
              src={ajouLogo}
              fill
              sizes="100%"
              alt="사진"
            />
          </div>
          <h2 className="font-medium">설정</h2>
        </Link>
      </div>
    </main>
  );
}

export default App;
