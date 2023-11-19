import { getFormattedDate } from '@/lib/date';
import { TArtikel, TArtikels } from '@/type';
import { faBookmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';


export default function Card(dataArtikel: TArtikels) {
  return (
    <>
      {dataArtikel?.dataArtikel?.map((artikels: TArtikel) => (
        <Link href={`/sekilas-ilmu/${artikels.slug}`} key={artikels.id}>
          <div>
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
              <div className="px-4 flex justify-between mb-3 bottom-0">
                <p className="text-gray-400 text-sm md:text-base">
                  {artikels.views} views
                </p>
                <button>
                  <FontAwesomeIcon
                    icon={faBookmark}
                    className="p-2 bg-gray-200 rounded-md"
                  />
                </button>
              </div>
            </div>
          </div>
        </Link>
      ))}
    </>
  );
}

