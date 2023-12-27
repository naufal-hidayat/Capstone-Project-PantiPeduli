import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import programDonasi from "../../assets/Images/program-donasi.jpg";
import programDonasiBanner from "../../assets/Images/program-donasi-banner.jpg";
import search from "../../assets/Icons/search.svg";
import { baseStyle } from "../../assets/styles";
import { CardPanti } from "../../components";

export default function CariPanti() {
  const [listPanti, setListPanti] = useState([]);
  const [cari, setCari] = useState("");

  useEffect(() => {
    async function getListPanti(params) {
      const res = await fetch(`http://127.0.0.1:3000/profiles`);
      const data = await res.json();
      setListPanti(data);
    }
    getListPanti();
  }, []);

  async function handleCari() {
    const res = await fetch(
      `http://127.0.0.1:3000/profiles/location?lokasi=${cari}`
    );
    const data = await res.json();
    setListPanti(data);
  }

  return (
    <>
      <section>
        <div className="relative">
          <img src={programDonasiBanner} className="w-full" alt="" />
          <div
            className={`${baseStyle} absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 w-full`}
          >
            <div className="font-extrabold text-white flex justify-center gap-4 items-center mb-8">
              <h1 className="text-[26px]">
                DAFTARKAN PANTIMU, NIKMATI MANFAATNYA!
              </h1>
              <Link
                to={"#"}
                className="text-lg flex items-center px-3 h-10 rounded-md bg-pink"
              >
                Daftar Panti
              </Link>
            </div>
            <div className="flex justify-center">
              <div className="flex justify-between bg-white rounded-lg w-full max-w-[480px]">
                <input
                  type="text"
                  className="text-black outline-none rounded-md p-2 max-w-[310px] w-full"
                  placeholder="Masukkan kabupaten/kota"
                  onChange={(e) => {
                    setCari(e.target.value);
                  }}
                  value={cari}
                />
                <button
                  className="bg-pink text-white rounded-md px-5 flex justify-center items-center"
                  onClick={handleCari}
                >
                  <p>Cari</p>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section
        className={`${baseStyle} py-12 grid grid-cols-3 gap-x-8 gap-y-12`}
      >
        {(listPanti.length !== 0 &&
          listPanti.map((data) => {
            return (
              <CardPanti
                key={crypto.randomUUID()}
                id={data.id}
                image={data.image}
                namaPanti={data.nama_panti}
                alamat={`${data.alamat_panti} ${data.kecamatan} ${data.kabupaten} ${data.provinsi}`}
              />
            );
          })) || <p>Belum ada panti terdaftar</p>}
      </section>
    </>
  );
}
