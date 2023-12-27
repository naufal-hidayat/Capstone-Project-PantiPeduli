import React from "react";

export default function KabarPantiAdmin() {
  return (
    <div>
      <h1 className="text-lg font-semibold px-9 py-6">Donasi Masuk</h1>
      <hr className="text-border-color" />
      <div className="overflow-x-auto">
        <table className="table-auto min-w-full">
          <thead>
            <tr>
              <th className="px-4 py-2 bg-gray-200 text-center">Tanggal</th>
              <th className="px-4 py-2 bg-gray-200 text-center">
                Nama Donatur
              </th>
              <th className="px-4 py-2 bg-gray-200 text-center">Kontak</th>
              <th className="px-4 py-2 bg-gray-200 text-center">
                Jumlah Donasi
              </th>
              <th className="px-4 py-2 bg-gray-200 text-center">
                Bukti Transaksi
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="px-4 py-2 text-center">13-11-2023</td>
              <td className="px-4 py-2 text-center">Sakinah Lestari</td>
              <td className="px-4 py-2 text-center">081268005069</td>
              <td className="px-4 py-2 text-center">Rp. 700.000,00</td>
              <td className="text-center w-[10px] bg-green-500 rounded-[8px] text-white">
                Diterima
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
