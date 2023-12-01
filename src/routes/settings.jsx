import { Link } from "react-router-dom";
import SimpleCheckBox from "../components/SimpleCheckbox";
import SimpleButton from "../components/SimpleButton";
import useLocalStorage from "../functions/useLocalStorage";
import { ArrowUturnLeftIcon, TrashIcon } from "@heroicons/react/20/solid";
import { useState } from "react";

export default function Settings() {
  const [language, setLanguage] = useLocalStorage("language", "ko");
  const [theme, setTheme] = useLocalStorage("theme", "system");

  const [warningKeywords, setWarningKeywords] = useLocalStorage(
    "warningKeywords",
    []
  );
  const [warningKeywordInput, setWarningKeywordInput] = useState("");
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

      <div className="bg-base p-4 flex flex-col gap-4 rounded-lg">
        <h2 className="text-lg font-bold">경고 키워드</h2>
        <p className="text-sm">
          경고 키워드가 들어간 음식은 메뉴에서{" "}
          <span className="text-red">붉은색</span>으로 표시됩니다
        </p>
        <div className="flex flex-row gap-4 items-center">
          <input
            type="text"
            placeholder="경고 키워드를 입력하세요."
            className="border-2 rounded-lg bg-surface0 border-text p-2 grow"
            value={warningKeywordInput}
            onChange={(e) => setWarningKeywordInput(e.target.value)}
          />
          <SimpleButton
            enableCondition={warningKeywordInput != ""}
            onClick={() => {
              setWarningKeywords([...warningKeywords, warningKeywordInput]);
              setWarningKeywordInput("");
            }}
          >
            추가
          </SimpleButton>
        </div>
        <ul className="flex flex-col gap-2">
          {warningKeywords.map((warningKeyword) => (
            <li
              className="rounded-lg p-2 bg-surface0 flex flex-row"
              key={Math.random()}
            >
              <div className="grow truncate">{warningKeyword}</div>
              <TrashIcon
                className="w-6 h-6 shrink-0 text-red"
                onClick={() =>
                  setWarningKeywords(
                    warningKeywords.filter((k) => k != warningKeyword)
                  )
                }
              />
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}
