"use client";
import { DataArticle } from "@/data/artikel";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import Card from "../card";
import Pagination from "../pagenation";
import { TArtikel, TArtikels } from "@/type";

type TabProps = {
  searchs: string;
};

export default function Tab(search: TabProps) {
  let cari = "";
  if (search.searchs) {
    cari = search.searchs;
  }

  const [activeTab, setActiveTab] = useState(1);
  const [page, setPage] = useState(1);
  const { data } = DataArticle(page, 10, cari);

  const handleTabClick = (tab: number) => {
    setActiveTab(tab);
  };

  const [dataSimpan, setDataSimpan] = useState<TArtikel[]>([]);

  useEffect(() => {
    const simpans = localStorage.getItem("simpan");
    if (simpans) {
      const parsedData: TArtikel[] = JSON.parse(simpans);
      setDataSimpan(parsedData);
    }
  }, [activeTab]);

  return (
    <>
      <div className="mt-6 mx-5">
        <ul className="flex lg:gap-4 md:gap-3 sm:gap-2">
          <li
            className={`mr-6 cursor-pointer md:font-medium ${
              activeTab == 1
                ? "border-b-2 px-3 md:px-2 pb-2 border-blue-500"
                : ""
            }`}
            onClick={() => handleTabClick(1)}
          >
            <span
              className={`font-medium md:text-lg sm:text-sm  ${
                activeTab == 1 ? "text-blue-700" : ""
              }`}
            >
              Sekilas Ilmu
            </span>
          </li>
          <li
            className={`mr-6 cursor-pointer ${
              activeTab == 2 ? "border-b-2 px-2 pb-2 border-blue-500" : ""
            }`}
            onClick={() => handleTabClick(2)}
          >
            <span
              className={`font-medium md:text-lg sm:text-sm ${
                activeTab == 2 ? "text-blue-700" : ""
              }`}
            >
              Disimpan
            </span>
          </li>
        </ul>
        {activeTab === 1 ? (
          <div className="mt-4 gap-1 md:gap-1 sm:gap-0 grid grid-cols-1 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 place-items-center">
            <Card dataArtikel={data?.data.data.data} />
          </div>
        ) : (
          <div className="mt-4 gap-1 md:gap-1 sm:gap-0 grid grid-cols-1 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 place-items-center">
            <Card dataArtikel={dataSimpan} />
          </div>
        )}
      </div>
      <Pagination
        current_page={data?.data.data.current_page}
        max_page={data?.data.data.max_page}
        setPage={setPage}
      />
    </>
  );
}
