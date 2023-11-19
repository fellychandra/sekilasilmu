import { DataArticle } from '@/data/artikel';
import { TArtikel } from '@/type';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

export default function CardList() {
  const { data } = DataArticle(2, 5,'');
  // console.log(data?.data?.data.data);

  return (
    <>
      <div>
        {data?.data?.data.data.map((artikel: TArtikel) => (
          <Link href={`/sekilas-ilmu/${artikel.slug}`} key={artikel.id}>
            <div
              className="flex py-2 items-center border-b-2 border-gray-300 justify-start"
              key={artikel.id}
            >
              <div className="flex-none mr-2 justify-start">
                <Image
                  src={`${artikel?.thumbnail ? artikel?.thumbnail : null}`}
                  alt="Thumbnail"
                  width={100}
                  height={100}
                  className="rounded-md w-full lg:w-20 md:w-16 sm:w-10"
                />
              </div>
              <div>
                <h2 className="lg:text-lg md:text-base sm:text-sm font-bold pb-2 ">
                  {artikel.title}
                </h2>
                <div className="flex text-center">
                  <span className="inline-block bg-gray-200 rounded-lg lg:px-3 md:px-3 sm:px-1 mr-1 text-sm text-gray-700 font-semibold sm:font-normal">
                    #{artikel.tags[0]}
                  </span>
                  <p className="text-gray-600"> | tanggal dan jam</p>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
}
