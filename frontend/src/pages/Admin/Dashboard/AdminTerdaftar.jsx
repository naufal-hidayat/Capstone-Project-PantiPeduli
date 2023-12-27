import React from "react";
// import fotoProfilePanti from "../../../assets/Images/foto-profile-panti.jpg";

export default function AdminTerdaftar({
  nama_panti,
  notelp_panti,
  nama_pemilik,
  notelp_pemilik,
  deskripsi_panti,
  alamat_panti,
  provinsi,
  kabupaten,
  kecamatan,
  program_panti,
  kebutuhan_panti,
  deskripsi_kebutuhan,
  jumlah_pengurus,
  jumlah_anaklaki,
  jumlah_anakpr,
  image,
  user_id,
}) {
  return (
    <div className="px-9 py-6">
      <img
        src={`http://127.0.0.1:3000/images/profile/${image}`}
        alt="foto profil panti"
        className="rounded-lg mb-[22px] w-full object-cover"
      />
      <table className="border-collapse w-full">
        <tbody>
          <tr>
            <th className="px-6 py-[18px] border border-border-color text-start">
              Nama Panti
            </th>
            <td className="px-6 py-[18px] border border-border-color ">
              {nama_panti}
            </td>
          </tr>
          <tr>
            <th className="px-6 py-[18px] border border-border-color text-start ">
              No Tlp Panti
            </th>
            <td className="px-6 py-[18px] border border-border-color">
              {notelp_panti}
            </td>
          </tr>
          <tr>
            <th className="px-6 py-[18px] border border-border-color text-start ">
              Nama Pemilik
            </th>
            <td className="px-6 py-[18px] border border-border-color">
              {nama_pemilik}
            </td>
          </tr>
          <tr>
            <th className="px-6 py-[18px] border border-border-color text-start ">
              No Tlp Pemilik
            </th>
            <td className="px-6 py-[18px] border border-border-color">
              {notelp_pemilik}
            </td>
          </tr>
          <tr>
            <th className="px-6 py-[18px] border border-border-color text-start ">
              Alamat Panti
            </th>
            <td className="px-6 py-[18px] border border-border-color">
              {alamat_panti}
            </td>
          </tr>
          <tr>
            <th className="px-6 py-[18px] border border-border-color text-start ">
              Provinsi
            </th>
            <td className="px-6 py-[18px] border border-border-color">
              {provinsi}
            </td>
          </tr>
          <tr>
            <th className="px-6 py-[18px] border border-border-color text-start ">
              Kabupaten / Kota
            </th>
            <td className="px-6 py-[18px] border border-border-color">
              {kabupaten}
            </td>
          </tr>
          <tr>
            <th className="px-6 py-[18px] border border-border-color text-start ">
              Kecamatan
            </th>
            <td className="px-6 py-[18px] border border-border-color">
              {kecamatan}
            </td>
          </tr>
          <tr>
            <th className="px-6 py-[18px] border border-border-color text-start ">
              Program Panti
            </th>
            <td className="px-6 py-[18px] border border-border-color">
              {program_panti}
            </td>
          </tr>
          <tr>
            <th className="px-6 py-[18px] border border-border-color text-start ">
              Deskripsi Panti
            </th>
            <td className="px-6 py-[18px] border border-border-color">
              {deskripsi_panti}
            </td>
          </tr>
          <tr>
            <th className="px-6 py-[18px] border border-border-color text-start ">
              Kebutuhan Panti
            </th>
            <td className="px-6 py-[18px] border border-border-color">
              {kebutuhan_panti}
            </td>
          </tr>
          <tr>
            <th className="px-6 py-[18px] border border-border-color text-start ">
              Deskripsi Kebutuhan
            </th>
            <td className="px-6 py-[18px] border border-border-color">
              {deskripsi_kebutuhan}
            </td>
          </tr>
          <tr>
            <th className="px-6 py-[18px] border border-border-color text-start ">
              Jumlah Pengurus
            </th>
            <td className="px-6 py-[18px] border border-border-color">
              {jumlah_pengurus}
            </td>
          </tr>
          <tr>
            <th className="px-6 py-[18px] border border-border-color text-start ">
              Jumlah Anak Laki-laki
            </th>
            <td className="px-6 py-[18px] border border-border-color">
              {jumlah_anaklaki}
            </td>
          </tr>
          <tr>
            <th className="px-6 py-[18px] border border-border-color text-start ">
              Jumlah Anak Perempuan
            </th>
            <td className="px-6 py-[18px] border border-border-color">
              {jumlah_anakpr}
            </td>
          </tr>
          <tr>
            <th className="px-6 py-[18px] border border-border-color text-start">
              Jumlah Anak{" "}
            </th>
            <td className="px-6 py-[18px] border border-border-color">
              {parseInt(jumlah_anaklaki) + parseInt(jumlah_anakpr)}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
