import React from 'react';

interface ModalPropsSuccess {
  isSuccess: boolean;
  onClose: () => void;
}

const Success = ({ isSuccess, onClose }: ModalPropsSuccess) => {
  return (
    <>
      {isSuccess && (
        <div className="fixed z-50 inset-0 overflow-y-auto bg-gray-500 bg-opacity-75 flex justify-center items-center">
          <div className="bg-white rounded-lg w-72 p-2 md:w-96 md:p-6">
            <div className="text-center mb-2 md:mb-4">
              <div className="flex justify-center items-center mb-1 md:mb-3  w-full">
                <div className="rounded-full bg-green-600 h-8 w-8 md:h-10 md:w-10 flex items-center justify-center border-4 border-gray-200">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 md:h-6 md:w-6 text-white"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M18.293 5.293a1 1 0 0 1 1.414 1.414l-11 11a1 1 0 0 1-1.414 0l-7-7a1 1 0 1 1 1.414-1.414L7 14.586l10.293-10.293a1 1 0 0 1 1.414 0z"
                    />
                  </svg>
                </div>
              </div>
              <p className="text-center font-medium md:font-bold text-base md:text-lg">
                Terimakasih telah memberi tahu kami.
              </p>
            </div>
            <p className="text-center mt-2 font-normal text-sm md:font-normal md:text-base md:mt-4">
              Masukan dari Anda sangat penting untuk membantu kami menjaga
              komunitas Kampus Gratis agar tetap aman.
            </p>
            <div className="flex justify-end mt-3 md:mt-6">
              <button
                className="px-2 md:px-4 py-1 md:py-2 w-full font-normal text-sm bg-blue-700 text-white rounded-md hover:bg-gray-300"
                onClick={onClose}
              >
                Tutup
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Success;
