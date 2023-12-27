import React from "react";
import { baseStyle } from "../../assets/styles";
import iconNote from "../../assets/Icons/icon-notes.svg";

export default function KonfirmasiBarang() {
  return (
    <>
      <section className={baseStyle}>
        <div className="w-full flex flex-wrap justify-center mt-12">
          <div className="flex w-3/4 justify-center border border-red-200 shadow-md shadow-gray-900/25">
            <img src={iconNote} className="me-5 ms-10 my-3" alt="icon-note" />
            <div className="my-3">
              <h6 className="text-xl font-bold">Selesaikan Pembayaran Donasi Anda Untuk :</h6>
              <h3 className="text-3xl font-bold mt-1">Program : Bantuan Makanan Bergizi Untuk Sehatkan Anak Panti</h3>
            </div>
          </div>
         
          <div className="flex w-3/4 justify-center align-middle mt-[450px] mb-[40px]">
            <button
              type="submit"
              className="group relative w-28 flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-red-300 hover:bg-red-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 shadow-md shadow-red-400/50"
            >
              Konfirmasi
            </button>
          </div>
        </div>

      </section>
    </>
  );
}