export default function Settings() {
  return (
    <main className="flex flex-col gap-4 p-4">
      <h1 className="text-xl font-bold">설정</h1>
      <div className="bg-base dark:bg-base-dark flex flex-col gap-4 p-4">
        <h2 className="font-medium">알림</h2>
        <div className="flex flex-row gap-4 items-center">
          <input type="checkbox" />
          <label>관심 식당 혼잡도 증가 시 알림</label>
        </div>
      </div>
      <div className="bg-base dark:bg-base-dark flex flex-col gap-4 p-4">
        <h2 className="font-medium">언어</h2>
        <div className="flex flex-row gap-4 items-center">
          <input type="radio" name="language" />
          <label>한국어</label>
          <input type="radio" name="language" />
          <label>English</label>
        </div>
      </div>
    </main>
  );
}
