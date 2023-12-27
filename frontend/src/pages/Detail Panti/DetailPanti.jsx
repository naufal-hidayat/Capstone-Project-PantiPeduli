import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { baseStyle } from "../../assets/styles";
import detailPanti from "../../assets/Images/detail-panti.jpg";
import share from "../../assets/Icons/share.svg";

export default function DetailPanti() {
  const { idPanti } = useParams();
  const [dataPanti, setDataPanti] = useState({
    nama_panti: "",
    image: "",
    nama_pemilik: "",
    notelp_pemilik: "",
    notelp_panti: "",
    alamat_panti: "",
    kecamatan: "",
    kabupaten: "",
    provinsi: "",
    deskripsi_panti: "",
    deskripsi_kebutuhan: "",
    kebutuhan_panti: "",
    jumlah_anaklaki: "",
    jumlah_anakpr: "",
    program_panti: "",
  });
  const [detailButton, setDetailButton] = useState("deskripsiPanti");

  useEffect(() => {
    async function getPantiById() {
      const res = await fetch(`http://127.0.0.1:3000/profiles/${idPanti}`);
      const data = await res.json();
      console.log(data[0]);
      setDataPanti(data[0]);
    }
    getPantiById();
  }, []);

  return (
    <section className={`${baseStyle}`}>
      <div className="px-9 py-6 rounded-lg shadow-2xl my-8">
        <img
          src={`http://127.0.0.1:3000/images/profile/${dataPanti.image}`}
          alt=""
          className="w-full h-72 object-cover mb-12"
        />
        <div className="flex justify-between items-center mb-10">
          <h1 className="font-semibold text-3xl text-pink">
            {dataPanti.nama_panti}
          </h1>
          {/* <div className="flex gap-4">
            <Link
              to="/relawan"
              className="bg-pink text-white text-xl font-medium px-6 py-2 rounded-md"
            >
              Relawan
            </Link>
            <img src={share} alt="" />
          </div> */}
        </div>
        <hr />
        <div className="w-full flex justify-between gap-4 mt-[14px] mb-6">
          <button
            className={`${
              detailButton === "deskripsiPanti" ? "bg-medium-pink" : ""
            } w-full py-2 rounded-full text-xl`}
            onClick={() => {
              setDetailButton("deskripsiPanti");
            }}
          >
            Detail Panti
          </button>
          <button
            className={`${
              detailButton === "kebutuhanPanti" ? "bg-medium-pink" : ""
            } w-full py-2 rounded-full text-xl`}
            onClick={() => {
              setDetailButton("kebutuhanPanti");
            }}
          >
            Deskripsi Kebutuhan
          </button>
        </div>
        <div>
          {detailButton === "deskripsiPanti" ? (
            <DeskripsiPanti
              namaPemilik={dataPanti.nama_pemilik}
              kontak={`${dataPanti.notelp_pemilik} / ${dataPanti.notelp_panti}`}
              alamat={`${dataPanti.alamat_panti}, ${dataPanti.kecamatan}, ${dataPanti.kabupaten}, ${dataPanti.provinsi}`}
              deskripsi={dataPanti.deskripsi_panti}
            />
          ) : (
            <KebutuhanPanti
              deskripsiKebutuhan={dataPanti.deskripsi_kebutuhan}
              listKebutuhan={dataPanti.kebutuhan_panti}
              anakLaki={dataPanti.jumlah_anaklaki}
              anakPr={dataPanti.jumlah_anakpr}
              listProgramPanti={dataPanti.program_panti}
            />
          )}
        </div>
      </div>
    </section>
  );
}

function DeskripsiPanti({ namaPemilik, kontak, alamat, deskripsi }) {
  return (
    <div className="flex flex-col gap-6">
      <div>
        <h2 className="text-xl font-extrabold mb-3">Nama Pemilik</h2>
        <p className="text-lg">{namaPemilik}</p>
      </div>
      <div>
        <h2 className="text-xl font-extrabold mb-3">Kontak</h2>
        <p className="text-lg">{kontak}</p>
      </div>
      <div>
        <h2 className="text-xl font-extrabold mb-3">Alamat</h2>
        <p className="text-lg">{alamat}</p>
      </div>
      <div>
        <h2 className="text-xl font-extrabold mb-3">Deskripsi</h2>
        <p className="text-lg">{deskripsi}</p>
      </div>
    </div>
  );
}

function KebutuhanPanti({
  listKebutuhan,
  deskripsiKebutuhan,
  anakLaki,
  anakPr,
  listProgramPanti,
}) {
  return (
    <div className="flex flex-col gap-6">
      <div>
        <h2 className="text-xl font-extrabold mb-3">Kebutuhan</h2>
        <div className="text-lg">
          <p>{deskripsiKebutuhan} : </p>
          <ul className="list-disc ml-10">
            {listKebutuhan.split(",").map((data) => (
              <li>{data}</li>
            ))}
          </ul>
        </div>
      </div>
      <div>
        <h2 className="text-xl font-extrabold mb-3">Total Anak</h2>
        <div className="text-lg">
          <p>
            Total {parseInt(anakLaki) + parseInt(anakPr)} anak, terdiri dari:
          </p>
          <ul className="list-disc ml-10">
            <li>Laki-laki : {anakLaki} anak</li>
            <li>Perempuan : {anakPr} anak</li>
          </ul>
        </div>
      </div>
      <div>
        <h2 className="text-xl font-extrabold mb-3">Program Panti</h2>
        <div className="text-lg">
          <p>Berikut program panti : </p>
          <ul className="list-disc ml-10">
            {listProgramPanti.split(",").map((data) => (
              <li>{data}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
