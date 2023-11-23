"use client";

import Image from "next/image";
import cafeteriaInfoList from "../functions/cafeteriaInfoList";
import ajouLogo from "public/ajou.png";
import Link from "next/link";
import useLocalStorage from "@/functions/useLocalStorage";
import { useState } from "react";
import { BellAlertIcon, BellIcon, HeartIcon } from "@heroicons/react/20/solid";
import LikeOrBellButton from "@/components/LikeOrBellButton";

export default function Home() {
  const [likedList, setLikedList] = useState<number[]>([]);
  const [notifiedList, setNotifiedList] = useState<number[]>([]);

  return (
    <main className="flex flex-col gap-4 p-4">
      <h1 className="text-xl font-bold">학생식당</h1>
      <div className="grid grid-cols-2 gap-4">
        {cafeteriaInfoList.map((cafeteriaInfo) => {
          return (
            <div
              className="bg-base dark:bg-base-dark flex flex-col gap-4 justify-between items-center p-4 rounded"
              key={cafeteriaInfo.id}
            >
              <div className="flex flex-row w-full gap-1 text-sm items-center justify-end">
                <LikeOrBellButton
                  key="liked"
                  cafeteriaID={cafeteriaInfo.id}
                  enabledIcon={<HeartIcon />}
                  disabledIcon={<HeartIcon />}
                  enabledStyle="text-red dark:text-red-dark border-red dark:border-red-dark"
                  disabledStyle="text-gray border-gray"
                />
              </div>
              <Link
                href={"/cafeteria/" + cafeteriaInfo.id}
                className="flex flex-col gap-4 justify-between items-center"
              >
                <div className="relative w-20 h-20">
                  <Image
                    className="object-cover rounded-full border-2 border-text dark:border-text-dark"
                    src={"/" + cafeteriaInfo.picture}
                    fill
                    alt="사진"
                  />
                </div>
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
              </Link>
            </div>
          );
        })}
        <Link
          href="/settings"
          className="bg-base dark:bg-base-dark flex flex-col gap-4 justify-between items-center p-4 rounded"
        >
          {/* place holder */}
          <div className="h-6"></div>
          <div className="relative w-20 h-20">
            <Image
              className="object-cover rounded-full border-2 border-text dark:border-text-dark"
              src={ajouLogo}
              fill
              alt="사진"
            />
          </div>
          <h2 className="font-medium">설정</h2>
        </Link>
      </div>
    </main>
  );
}
