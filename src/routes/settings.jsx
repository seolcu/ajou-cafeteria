import { Link } from "react-router-dom";

export default function Settings() {
  return (
    <main className="p-4 flex flex-col gap-4">
      <div className="flex flex-row gap-4 items-center">
        <Link to="/">←</Link>
        <h1 className="text-xl font-bold">설정</h1>
      </div>
      <div className="flex flex-col gap-4">
        <div className="flex flex-row gap-4 items-center">
          <h2 className="text-lg font-bold">테마</h2>
          <div className="flex flex-row gap-4 items-center">
            <button
              className="w-4 h-4 rounded-full bg-base border-2 border-text"
              onClick={() => {
                document.documentElement.classList.remove("dark");
              }}
            ></button>
            <button
              className="w-4 h-4 rounded-full bg-base border-2 border-text"
              onClick={() => {
                document.documentElement.classList.add("dark");
              }}
            ></button>
          </div>
        </div>
        <div className="flex flex-row gap-4 items-center">
          <h2 className="text-lg font-bold">언어</h2>
          <div className="flex flex-row gap-4 items-center">
            <button
              className="w-4 h-4 rounded-full bg-base border-2 border-text"
              onClick={() => {
                document.documentElement.lang = "ko";
              }}
            ></button>
            <button
              className="w-4 h-4 rounded-full bg-base border-2 border-text"
              onClick={() => {
                document.documentElement.lang = "en";
              }}
            ></button>
          </div>
        </div>
      </div>
    </main>
  );
}
