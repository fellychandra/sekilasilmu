'use client';

import Jepang from '../../../public/img/jepang.svg';
import Image from 'next/image';
// import CardList from 'components/card list';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFlag, faShareFromSquare } from '@fortawesome/free-solid-svg-icons';

import { useState } from 'react';
import Breadcrumbs from '@/components/breadcrumbs';
import { getFormattedDate } from '@/lib/date';
import CardList from '@/components/card list';
import Modal from '@/components/report/report';
import { DataArticleDetails } from '@/data/artikel';

type Props = {
  params: { slug: string };
};

const DetailArtikel = ({ params }: Props) => {
  const { data } = DataArticleDetails(params.slug);
  const artikel = data?.data?.data;

  const [openModal, setOpenModal] = useState(false);
  const openModalReport = () => {
    setOpenModal(true);
  };

  const closeModalReport = () => {
    setOpenModal(false);
  };

  return (
    <>
      <div className="h-screen mx-auto px-3 sm:px-3 lg:px-16 mt-20 bg-gray-50">
        <Breadcrumbs />
        <div className="grid grid-cols-3 gap-24 md:gap-16 sm:gap-8 mx-4">
          <div className="rounded-lg col-span-3 md:col-span-2 h-screen">
            <h1 className="text-xl lg: md:text-4xl sm:text-2xl font-bold mb-4">
              {artikel?.title}
            </h1>
            <span className="inline-block bg-gray-200 rounded-lg px-3 py-2 mb-6 text-sm text-gray-700 font-semibold">
              {artikel?.tags.map((tag: string) => tag)}
            </span>
            <div className="flex justify-between text-center mb-6">
              <div className="font-normal text-xs  md:font-medium md:text-base text-gray-400">
                {artikel?.author.full_name} -{' '}
                {getFormattedDate(artikel?.created_at)}
              </div>
              <div className="flex gap-5 md:gap-10  ">
                <div className="text-blue-700 font-normal text-xs md:text-base sm:font-normal md:font-semibold">
                  <FontAwesomeIcon
                    icon={faShareFromSquare}
                    className="mr-1 md:mr-2"
                  />
                  share
                </div>
                <button onClick={openModalReport}>
                  <div className="text-red-600 font-normal text-xs md:text-base sm:font-normal md:font-semibold">
                    <FontAwesomeIcon icon={faFlag} className="mr-1 md:mr-2" />
                    laporkan
                  </div>
                </button>
              </div>
            </div>
            <div className="mb-6 md:w-auto h-96">
              <Image
                src={artikel?.thumbnail}
                alt={'thumnail'}
                className="object-cover w-full h-full rounded-md mb-6"
                height={370}
                width={750}
              />
              <div className="text-lg font-normal text-gray-700 pb-6 overflow-x-auto whitespace-normal break-words" dangerouslySetInnerHTML={{ __html: artikel?.content }}>
                
              </div>
            </div>
          </div>
          <div className="col-span-1 hidden md:block">
            <Image
              src={Jepang}
              alt="baner jepang"
              height={420}
              width={420}
              className="mb-6"
            />
            <div>
              <div className="font-bold text-2xl lg:text-2xl md:text-xl sm:text-lg mb-3">
                <span className="border-b-4 pb-1 border-blue-00">Lainnya</span>{' '}
                dari sekilas ilmu
              </div>

              <CardList />
            </div>
          </div>
        </div>
      </div>
      <Modal isOpen={openModal} onClose={closeModalReport} />
    </>
  );
};

export default DetailArtikel;
