import { Link } from "react-router-dom";
import SimpleCheckBox from "../components/SimpleCheckbox";
import SimpleButton from "../components/SimpleButton";
import useLocalStorage from "../functions/useLocalStorage";
import { ArrowUturnLeftIcon } from "@heroicons/react/20/solid";

export default function Settings() {
  const [language, setLanguage] = useLocalStorage("language", "ko");
  const [theme, setTheme] = useLocalStorage("theme", "system");

  return (
    <main className="p-4 flex flex-col gap-4">
      <header className="flex flex-row gap-4 items-center">
        <Link to="/" className="w-6 h-6">
          <ArrowUturnLeftIcon />
        </Link>
        <h1 className="text-xl font-bold">설정</h1>
      </header>

      <div className="bg-base p-4 flex flex-col gap-4 rounded-lg">
        <h2 className="text-lg font-bold">알림</h2>
        <div className="flex flex-row gap-2 items-center">
          <SimpleCheckBox storageKey="notification" defaultState={true} />
          <p>관심 식당 혼잡도 증가 시 알림</p>
        </div>
      </div>

      <div className="bg-base p-4 flex flex-col gap-4 rounded-lg">
        <h2 className="text-lg font-bold">언어</h2>
        <div className="flex flex-row gap-4">
          <SimpleButton
            enableCondition={language == "ko"}
            onClick={() => setLanguage("ko")}
          >
            한국어
          </SimpleButton>
          <SimpleButton
            enableCondition={language == "en"}
            onClick={() => setLanguage("en")}
          >
            English
          </SimpleButton>
          <SimpleButton
            enableCondition={language == "cn"}
            onClick={() => setLanguage("cn")}
          >
            中文
          </SimpleButton>
        </div>
      </div>

      <div className="bg-base p-4 flex flex-col gap-4 rounded-lg">
        <h2 className="text-lg font-bold">테마 (새로고침 시 적용)</h2>
        <div className="flex flex-row gap-4">
          <SimpleButton
            enableCondition={theme == "system"}
            onClick={() => setTheme("system")}
          >
            시스템
          </SimpleButton>
          <SimpleButton
            enableCondition={theme == "light"}
            onClick={() => setTheme("light")}
          >
            라이트
          </SimpleButton>
          <SimpleButton
            enableCondition={theme == "dark"}
            onClick={() => setTheme("dark")}
          >
            다크
          </SimpleButton>
        </div>
      </div>
    </main>
  );
}
