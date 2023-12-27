import React from "react";
import { baseStyle } from "../../assets/styles";

export default function Relawan() {
  return (
    <section className={`${baseStyle} flex items-center justify-center`}>
      <div className="w-[885px] h-[768px] drop-shadow rounded-xl overflow-hidden mb-10 ">
        <div
          key={crypto.randomUUID()}
          className="w-[885px] h-[768px] drop-shadow rounded-xl  overflow-hidden bg-white p-6">
          <h1 className="text-center font-bold mt-5 text-2xl">Form Menjadi Relawan</h1>
          <form className="mt-8 space-y-6">
            <div className="flex mb-4">
              <label htmlFor="nama-lengkap" className="w-[150px] font-bold">
                Nama lengkap
              </label>
              <input
                id="nama-lengkap"
                name="nama-lengkap"
                type="text"
                autoComplete="nama-lengkap"
                required
                className="rounded-lg py-2 px-3 border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 flex-1"
                placeholder="Nama lengkap"
              />
            </div>

            <div className="flex mb-4">
              <label htmlFor="pekerjaan" className="w-[150px] font-bold">
                Alamat
              </label>
              <input
                id="alamat"
                name="alamat"
                type="text"
                autoComplete="alamat"
                required
                className="rounded-lg py-2 px-3 border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 flex-1"
                placeholder="Alamat"
              />
            </div>

            <div className="flex mb-4">
              <label htmlFor="no-telpon" className="w-[150px] font-bold">
                No Telpon
              </label>
              <input
                id="no-telpon"
                name="no-telpon"
                type="text"
                autoComplete="no-telpon"
                required
                className="rounded-lg py-2 px-3 border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 flex-1"
                placeholder="No Telpon"
              />
            </div>

            <div className="flex mb-4">
              <label htmlFor="email" className="w-[150px] font-bold">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="text"
                autoComplete="email"
                required
                className="rounded-lg py-2 px-3 border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 flex-1"
                placeholder="Email"
              />
            </div>

            <div className="flex mb-4">
              <label htmlFor="pekerjaan" className="w-[150px] font-bold">
                Pekerjaan
              </label>
              <input
                id="pekerjaan"
                name="pekerjaan"
                type="text"
                autoComplete="pekerjaan"
                required
                className="rounded-lg py-2 px-3 border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 flex-1"
                placeholder="Pekerjaan"
              />
            </div>

            <div className="flex mb-4">
              <label htmlFor="pengalaman" className="w-[150px] font-bold">
                Pengalaman
              </label>
              <textarea
                id="pengalaman"
                name="pengalaman"
                type="text"
                autoComplete="pengalaman"
                required
                className="rounded-lg py-2 px-3 border border-gray-300 h-20 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 flex-1"
                placeholder="Pengalaman relawan sebelumnya"
              />
            </div>

            <div className="flex mb-4">
              <label htmlFor="motivasi" className="w-[150px] font-bold">
                Motivasi
              </label>
              <textarea
                id="motivasi"
                name="motivasi"
                type="text"
                autoComplete="motivasi"
                required
                className="rounded-lg py-2 px-3 border border-gray-300 h-20 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 flex-1"
                placeholder="Motivasi Anda atau Alasan mendaftar relawan"
              />
            </div>

            <div className="flex items-center justify-center">
              <button className="w-[150px] h-[40px] bg-[#F2CFE6] rounded-[10px] text-lg font-semibold shadow-md hover:shadow-lg transition duration-300">
                Daftar Relawan
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
