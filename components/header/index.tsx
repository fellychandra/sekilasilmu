import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import Logo from '../../public/img/logo.png';
import Avatar from '../../public/img/orang.png';
import '@fortawesome/fontawesome-svg-core/styles.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faBell } from '@fortawesome/free-solid-svg-icons';

export default function Header() {
  return (
    <>
      <div className="justify-center">
        <div className="fixed bg-white shadow-md z-10 w-full px-8 lg:px-20 md:px-8 sm:px-8 py-4 flex justify-between items-center top-0">
          <Link href="/" className="text-white">
            <Image src={Logo} alt="logo" width={80} height={60} />
          </Link>
          <div className="flex items-center">
            <Link
              href="/"
              className=" hover:bg-gray-700 px-3 rounded py-1"
            ></Link>
            <Link
              href="/"
              className=" hover:bg-gray-400 px-3 m-2 rounded py-1 bg-gray-200"
            >
              <FontAwesomeIcon
                icon={faSun}
                style={{ fontSize: 15, color: 'orange' }}
              />
            </Link>
            <Link
              href="/"
              className=" hover:bg-gray-700 px-3 m-2 rounded py-1 bg-gray-200"
            >
              <FontAwesomeIcon icon={faBell} style={{ fontSize: 15 }} />
            </Link>
            <Link href="/" className=" hover:bg-gray-700 m-2">
              <Image
                src={Avatar}
                alt={'avatar'}
                height={30}
                width={30}
                className="rounded bg-gray-200"
              />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
