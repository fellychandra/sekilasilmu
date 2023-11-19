'use client';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { usePathname } from 'next/navigation';

export default function Breadcrumbs() {
  const pathname = usePathname();

  const [breadcrumbs, setBreadcrumbs] = useState<
    { text: string; href: string }[]
  >([]);

  useEffect(() => {
    if (pathname) {
      const pathSegments = pathname
        .split('/')
        .filter((segment) => segment !== '');
      const pathList = pathSegments.map((segment, index) => ({
        text: segment,
        href: `/${pathSegments.slice(0, index + 1).join('/')}`,
      }));
      setBreadcrumbs(pathList);
    }
  }, [pathname]);

  return (
    <>
      <div>
        <div className="text-sm sm:text-base">
          <div className="list-none inline-flex">
            <Link href={'/'}>
              <div className="p-4 text-blue-700 font-semibold">Beranda</div>{' '}
            </Link>
            {breadcrumbs.map((path, index) => (
              <div key={index} className="flex items-center">
                {index < breadcrumbs.length && (
                  <FontAwesomeIcon icon={faAngleRight} />
                )}
                <Link href={path.href}>
                  <div
                    className={`p-4 font-semibold ${
                      pathname.startsWith(path.href) &&
                      index == breadcrumbs.length - 1
                        ? 'hover:text-gray-700 text-gray-500'
                        : 'text-blue-700 font-semibold'
                    }`}
                  >
                    {path.text}
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
