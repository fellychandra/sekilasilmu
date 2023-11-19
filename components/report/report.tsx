import { faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import Success from './success';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const Modal = ({ isOpen, onClose }: ModalProps) => {
  const handleOutsideClick = (e: React.MouseEvent<HTMLDivElement>) => {
    onClose();
  };

  const [report, setReport] = useState(false);
  const handleReportSuccess = () => {
    setReport(true);
  };
  const handleReportClose = () => {
    setReport(false);
  };

  return (
    <>
      {isOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center overflow-auto bg-gray-500 bg-opacity-75"
          onClick={handleOutsideClick}
        >
          <div className="relative z-50 w-72 md:w-96 max-w-lg py-6 bg-white rounded-lg shadow-xl">
            <button
              onClick={onClose}
              className="absolute top-0 right-0 m-3 text-gray-500 hover:text-gray-700 focus:outline-none"
            >
              &times;
            </button>
            <div className="text-center">
              <div className="border-b-2 w-full">
                <h2 className="text-lg md:text-xl font-semibold md:font-bold mb-1 md:mb-4">
                  Laporkan
                </h2>
              </div>
              <div className="grid text-start gap-0 md:gap-4 items-center">
                <h3 className="text-gray-700 font-medium md:font-semibold mx-5 py-1 md:py-2">
                  Mengapa anda melaporkan artikel ini?
                </h3>
                <div className="grid gap-0 md:gap-4 mx-5">
                  <div
                    className="flex justify-between items-center cursor-pointer font-normal text-sm md:text-base"
                    onClick={handleReportSuccess}
                  >
                    <p className="mb-1">Ini adalah spam</p>
                    <FontAwesomeIcon
                      className="text-xs md:text-sm text-gray-400"
                      icon={faAngleRight}
                    />
                  </div>
                  <div
                    className="flex justify-between items-center cursor-pointer font-normal text-sm md:text-base"
                    onClick={handleReportSuccess}
                  >
                    <p className="mb-1">Ujaran atau simbol kebencian</p>
                    <FontAwesomeIcon
                      className="text-xs md:text-sm text-gray-400"
                      icon={faAngleRight}
                    />
                  </div>
                  <div
                    className="flex justify-between items-center cursor-pointer font-normal text-sm md:text-base"
                    onClick={handleReportSuccess}
                  >
                    <p className="mb-1">Kekerasan atau organisasi berbahaya</p>
                    <FontAwesomeIcon
                      className="text-xs md:text-sm text-gray-400"
                      icon={faAngleRight}
                    />
                  </div>
                  <div
                    className="flex justify-between items-center cursor-pointer font-normal text-sm md:text-base"
                    onClick={handleReportSuccess}
                  >
                    <p className="mb-1">Ketelanjangan atau aktivitas seksual</p>
                    <FontAwesomeIcon
                      className="text-xs md:text-sm text-gray-400"
                      icon={faAngleRight}
                    />
                  </div>
                  <div
                    className="flex justify-between items-center cursor-pointer font-normal text-sm md:text-base"
                    onClick={handleReportSuccess}
                  >
                    <p className="mb-1">
                      Penjualan barang ilegal atau barang dengan izin khusus
                    </p>
                    <FontAwesomeIcon
                      className="text-xs md:text-sm text-gray-400"
                      icon={faAngleRight}
                    />
                  </div>
                  <div
                    className="flex justify-between items-center cursor-pointer font-normal text-sm md:text-base"
                    onClick={handleReportSuccess}
                  >
                    <p className="mb-1">
                      Perundungan (bullying) atau pelecehan
                    </p>
                    <FontAwesomeIcon
                      className="text-xs md:text-sm text-gray-400"
                      icon={faAngleRight}
                    />
                  </div>
                  <div
                    className="flex justify-between items-center cursor-pointer font-normal text-sm md:text-base"
                    onClick={handleReportSuccess}
                  >
                    <p className="mb-1">Pelanggaran hak kekayaan intelektual</p>
                    <FontAwesomeIcon
                      className="text-xs md:text-sm text-gray-400"
                      icon={faAngleRight}
                    />
                  </div>
                  <div
                    className="flex justify-between items-center cursor-pointer font-normal text-sm md:text-base"
                    onClick={handleReportSuccess}
                  >
                    <p className="mb-1">Bunuh diri atau melukai diri sendiri</p>
                    <FontAwesomeIcon
                      className="text-xs md:text-sm text-gray-400"
                      icon={faAngleRight}
                    />
                  </div>
                  <div
                    className="flex justify-between items-center cursor-pointer font-normal text-sm md:text-base"
                    onClick={handleReportSuccess}
                  >
                    <p className="mb-1">Penipuan atau penggelapan</p>
                    <FontAwesomeIcon
                      className="text-xs md:text-sm text-gray-400"
                      icon={faAngleRight}
                    />
                  </div>
                  <div
                    className="flex justify-between items-center cursor-pointer font-normal text-sm md:text-base"
                    onClick={handleReportSuccess}
                  >
                    <p className="mb-1">Saya hanya tidak menyukainya</p>
                    <FontAwesomeIcon
                      className="text-xs md:text-sm text-gray-400"
                      icon={faAngleRight}
                    />
                  </div>
                  <div
                    className="flex justify-between items-center cursor-pointer font-normal text-sm md:text-base"
                    onClick={handleReportSuccess}
                  >
                    <p className="mb-1">Informasi palsu</p>
                    <FontAwesomeIcon
                      className="text-xs md:text-sm text-gray-400"
                      icon={faAngleRight}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      <Success isSuccess={report} onClose={handleReportClose} />
    </>
  );
};

export default Modal;
