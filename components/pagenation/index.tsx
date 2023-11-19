import { TPage } from '@/type';
import React from 'react';

export default function Pagination({ current_page, max_page, setPage }: TPage) {
  // console.log(current_page);

  const scrollTop = () => {
    scrollTo({
      behavior: 'smooth',
      top: 0,
    });
  };

  const handlePrevPage = () => {
    setPage((prevState: number) => prevState - 1);
    scrollTop();
  };
  const handlePage = (page: number) => {
    setPage(page);
    scrollTop();
  };
  const handleNextPage = () => {
    setPage((prevState: number) => prevState + 1);
    scrollTop();
  };

  const pages = [];
  for (let i = 1; i <= max_page; i++) {
    pages.push(i);
  }

  return (
    <>
      <div className="pb-28 pt-16">
        <nav className="flex items-center justify-center">
          <ul className="flex list-none gap-1">
            <li>
              <button
                onClick={handlePrevPage}
                className={`px-3 py-1 font-medium text-gray-500  hover:bg-blue-700 hover:text-white rounded-md ${1===current_page ? 'cursor-not-allowed pointer-events-none text-gray-300' : ''}`}
              >
                &laquo;
              </button>
            </li>

            {pages?.map((page: number) => (
              <li key={page}>
                <button
                  onClick={ () => handlePage(page)}
                  className={`px-3 py-1 font-medium rounded-md  ${
                    page == current_page
                      ? 'text-white hover:bg-gray-300 bg-blue-700'
                      : 'text-gray-500 hover:bg-gray-300'
                  }`}
                >
                  {page}
                </button>
              </li>
            ))}
            <li>
              <button
                onClick={handleNextPage}
                className={`px-3 py-1 font-medium text-gray-500  hover:bg-blue-700 hover:text-white rounded-md ${max_page===current_page ? 'cursor-not-allowed pointer-events-none text-gray-300' : ''}`}
              >
                &raquo;
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
}
