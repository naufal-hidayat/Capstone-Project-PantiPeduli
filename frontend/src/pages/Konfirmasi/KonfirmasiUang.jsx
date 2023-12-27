import React from "react";
import { baseStyle } from "../../assets/styles";
import iconNote from "../../assets/Icons/icon-notes.svg";
import iconBank from "../../assets/Icons/bank-mandiri.png";

export default function KonfirmasiUang() {
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
          <div className="flex w-3/4 justify-center align-middle mt-5">
            <p className="text-center leading-tight me-2">Isi Data Donasi</p>
            <div className="rounded-full w-5 h-5 bg-red-200">
              <p className="text-center leading-tight">1</p>
            </div>
            <div className='bg-red-200 h-1 w-24 mt-2'></div>
            <div className="rounded-full w-5 h-5 bg-red-200">
              <p className="text-center leading-tight">2</p>
            </div>
            <p className="text-center leading-tight ms-2">Konfirmasi Pembayaran</p>
          </div>
          <div className="w-3/4 border border-red-200 mt-5 shadow-md shadow-gray-900/25">
            <div className="mx-12 my-5">
              <h6 className="text-xl font-bold">Transfer Donasi</h6>
              <p className="text-md mt-3">Transfer Tepat Sesuai Nominal dibawah ini: </p>
              <h3 className="text-3xl font-bold mt-1">Rp. 50,303</h3>
              <small className="mt-2">(harap perhatikan 3 digit nominal terakir)</small>
              <p className="text-md font-bold mt-5">Ke rekening panti bang peduli:</p>
              <img src={iconBank} className="mt-3 mb-3" alt="bank-mandiri" />
              <p className="text-md mt-2">Rekening Number : <strong>1550007500005</strong></p>
              <p className="text-md mt-2 mb-5">Atas Nama : <strong>Yayasan Panti Peduli</strong></p>
              <p className="text-xs">Transfer sebelum besok 13:09:58 (23:59:35) atau donasi Anda akan otomatis dibatalkan</p>
              <p className="text-xs mt-3">Email konfirmasi donasi yang akan dikirimkan ke email anda mungkin akan masuk ke SPAM, harap periksa bagian SPAM pada email anda dan klik "NOT SPAM" agar update perkembangan campaign ini masuk ke inbox anda</p>
            </div>
          </div>
          <div className="flex w-3/4 justify-center align-middle mt-5 mb-12">
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