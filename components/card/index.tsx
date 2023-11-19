import { DataArticleDetails } from "@/data/artikel";
import { getFormattedDate } from "@/lib/date";
import { TArtikel, TArtikels } from "@/type";
import { faBookmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Card(dataArtikel: TArtikels) {
  const handleSimpan = (data: any) => {
    const lokasi = {
      slug: data.slug,
      id: data.id,
      title: data.title,
      author: { full_name: data.author?.full_name },
      category: data.category,
      content: data.content,
      created_at: data.created_at,
      tags: data.tags,
      thumbnail: data.thumbnail,
      views: data.views,
      isSimpan: "yes",
    };
    const storedSimpan = localStorage.getItem("simpan");
    const storedSimpanArray = storedSimpan ? JSON.parse(storedSimpan) : [];

    const existingItemIndex = storedSimpanArray.findIndex(
      (item: any) => item.slug === lokasi.slug
    );

    if (existingItemIndex === -1) {
      storedSimpanArray.push(lokasi);
      localStorage.setItem("simpan", JSON.stringify(storedSimpanArray));
      console.log("Lokasi berhasil ditambahkan ke dalam penyimpanan.");
    } else {
      storedSimpanArray.splice(existingItemIndex, 1);
      localStorage.setItem("simpan", JSON.stringify(storedSimpanArray));
      console.log("Lokasi berhasil dihapus dari penyimpanan.");
    }
  };

  return (
    <>
      {dataArtikel?.dataArtikel?.map((artikels: TArtikel) => (
        <div key={artikels.id} className="relative">
          <Link href={`/sekilas-ilmu/${artikels.slug}`}>
            <div className="">
              <div className="w-80 h-96 sm:w-60 md:w-60 lg:w-48 xl:w-72 2xl:w-80 mb-3 max-w-sm rounded-lg m overflow-hidden shadow-md border-2 bg-white border-gray-100">
                <div className="relative w-full h-48">
                  <Image
                    className="object-cover rounded p-2"
                    src={artikels.thumbnail}
                    alt="Placeholder Image"
                    layout="fill"
                  />
                </div>
                <div className="flex px-3 py-2 justify-between">
                  <span className="inline-block bg-green-200 rounded-lg px-3 py-1 text-sm text-gray-700 font-semibold mr-2">
                    #{artikels.tags[0]}
                  </span>
                  <span className="font-normal text-sm">
                    {getFormattedDate(artikels.created_at)}
                  </span>
                </div>
                <div className="px-3 py-2">
                  <div className="font-bold text-medium mb-2">
                    {artikels.title}
                  </div>
                </div>
              </div>
            </div>
          </Link>
          <div className="absolute px-4  mb-3 bottom-3 w-full">
            <div className="flex justify-between">
              <p className="text-gray-400 text-sm md:text-base">
                {artikels.views} views
              </p>
              <button
                onClick={() =>
                  handleSimpan({
                    slug: artikels.slug,
                    author: artikels.author,
                    title: artikels.title,
                    content: artikels.content,
                    category: artikels.category,
                    created_at: artikels.created_at,
                    tags: artikels.tags,
                    id: artikels.id,
                    thumbnail: artikels.thumbnail,
                    views: artikels.views,
                  })
                }
              >
                <FontAwesomeIcon
                  icon={faBookmark}
                  className={`p-2 rounded-md  ${
                    artikels.isSimpan == "yes"
                      ? "bg-blue-100 text-blue-700"
                      : "bg-gray-100 text-gray-400"
                  } `}
                />
              </button>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}
