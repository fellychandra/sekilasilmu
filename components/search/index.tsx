'use client';
import { seacrhState } from '@/recoil/atom';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useRouter } from 'next/navigation';
import React from 'react';
import { useRecoilState } from 'recoil';
export default function Search() {
  const router = useRouter();
  const [text, setText] = useRecoilState(seacrhState);

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setText(event.target.value);
  };

  const onKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      router.push(`/sekilas-ilmu/search/${text}`);
    }
  };

  return (
    <>
      <div className="grid grid-cols-1 gap-6 mt-6 mx-5 text-center">
        <div className="text-center">
          <h1 className="sm:text-xl md:text-2xl font-bold p-3">Sekilas Ilmu</h1>
          <p className="text-gray-500 p-2">
            Temukan artikel menarik yang bakal menambah wawasanmu disini!
          </p>
        </div>
        <div className="relative mx:-20 md:mx-20 sm:mx-10 pb-2 z-0">
          <input
            type="text"
            className="w-full border border-gray-300 rounded-md py-2 px-4 pl-10 focus:outline-none focus:border-blue-500"
            placeholder="Cari mata kuliah"
            onKeyPress={onKeyPress}
            onChange={onChange}
          />

          <span className="absolute inset-y-0 left-0 pl-3 flex items-center top-1/2 transform -translate-y-4">
            <FontAwesomeIcon icon={faSearch} className="text-gray-400" />
          </span>
        </div>
      </div>
    </>
  );
}
