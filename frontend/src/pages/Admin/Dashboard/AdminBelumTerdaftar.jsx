import React, { useEffect, useState } from "react";
import { useAuth } from "../../../context/AuthContext";

export default function AdminBelumTerdaftar({ refresh }) {
  const { currentUser } = useAuth();
  const userId = currentUser ? currentUser.uid : null;
  if (!currentUser.uid) {
    console.log("current user not found");
    return;
  }

  useEffect(() => {
    async function getProvinsi() {
      const res = await fetch(
        "https://alamat.thecloudalert.com/api/provinsi/get/"
      );
      const data = await res.json();
      setProvinsi(data.result);
    }
    getProvinsi();
  }, []);

  const [provinsi, setProvinsi] = useState([]);
  const [kabupaten, setKabupaten] = useState([]);
  const [kecamatan, setKecamatan] = useState([]);

  const [formData, setFormData] = useState({
    nama_panti: "",
    notelp_panti: "",
    nama_pemilik: "",
    notelp_pemilik: "",
    deskripsi_panti: "",
    alamat_panti: "",
    provinsi: "",
    kabupaten: "",
    kecamatan: "",
    program_panti: "",
    kebutuhan_panti: "",
    deskripsi_kebutuhan: "",
    jumlah_pengurus: "",
    jumlah_anaklaki: "",
    jumlah_anakpr: "",
    image: {},
    user_id: userId,
  });

  const handleInputChange = async (e) => {
    if (e.target.id === "provinsi") {
      const prov = e.target.value;
      const res = await fetch(
        `https://alamat.thecloudalert.com/api/kabkota/get/?d_provinsi_id=${
          provinsi.filter(
            (data) => data.text.toLowerCase() === prov.toLowerCase()
          )[0].id
        }`
      );
      const data = await res.json();
      setKabupaten(data.result);
    } else if (e.target.id === "kabupaten") {
      const kab = e.target.value;
      const res = await fetch(
        `https://alamat.thecloudalert.com/api/kecamatan/get/?d_kabkota_id=${
          kabupaten.filter(
            (data) => data.text.toLowerCase() === kab.toLowerCase()
          )[0].id
        }`
      );
      const data = await res.json();
      setKecamatan(data.result);
    }

    setFormData((prevData) => ({
      ...prevData,
      [e.target.id]: e.target.value,
    }));
  };

  const handleInputChangeImage = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      [e.target.id]: e.target.files[0],
    }));
  };

  async function handleSubmit(e) {
    e.preventDefault();
    const form = new FormData();
    Object.entries(formData).forEach(([key, value]) => {
      form.append(key, value);
    });

    console.log(formData);
    const tambahDataPanti = await fetch("http://127.0.0.1:3000/profiles", {
      method: "POST",
      body: form,
    });
    if (!tambahDataPanti.ok) {
      console.log("tidak berhasil upload data panti");
      return;
    }
    console.log("berhasil upload data panti");
    location.reload();
  }

  return (
    <div>
      <h1 className="text-lg font-semibold px-9 py-6">
        Silahkan Isi Profil dan Data Panti
      </h1>
      <hr className="text-border-color" />
      <div className="px-9 py-6">
        <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
          <div className="flex justify-between gap-3">
            <label
              htmlFor="nama_panti"
              className="w-full max-w-[192px] font-semibold"
            >
              Nama Panti
            </label>
            <input
              required
              type="text"
              id="nama_panti"
              value={formData.nama_panti}
              onChange={handleInputChange}
              className="border rounded-md px-3 py-1 outline-none w-full"
            />
          </div>
          <div className="flex justify-between gap-3">
            <label
              htmlFor="notelp_panti"
              className="w-full max-w-[192px] font-semibold"
            >
              No Tlp Panti
            </label>
            <input
              required
              type="number"
              id="notelp_panti"
              value={formData.notelp_panti}
              onChange={handleInputChange}
              className="border rounded-md px-3 py-1 outline-none w-full"
            />
          </div>
          <div className="flex justify-between gap-3">
            <label
              htmlFor="nama_pemilik"
              className="w-full max-w-[192px] font-semibold"
            >
              Nama Pemilik
            </label>
            <input
              required
              type="text"
              id="nama_pemilik"
              value={formData.nama_pemilik}
              onChange={handleInputChange}
              className="border rounded-md px-3 py-1 outline-none w-full"
            />
          </div>
          <div className="flex justify-between gap-3">
            <label
              htmlFor="noTlpPemilik"
              className="w-full max-w-[192px] font-semibold"
            >
              No Tlp Pemilik
            </label>
            <input
              required
              type="number"
              id="notelp_pemilik"
              value={formData.notelp_pemilik}
              onChange={handleInputChange}
              className="border rounded-md px-3 py-1 outline-none w-full"
            />
          </div>
          <div className="flex flex-col gap-[14px]">
            <label
              htmlFor="deskripsi_panti"
              className="w-full max-w-[192px] font-semibold"
            >
              Deskripsi Panti
            </label>
            <textarea
              name="deskripsi_panti"
              id="deskripsi_panti"
              cols="30"
              rows="7"
              className="border rounded-md px-3 py-1 outline-none"
              value={formData.deskripsi_panti}
              onChange={handleInputChange}
              placeholder="Isi deskripsi panti anda."
            ></textarea>
          </div>
          <div className="flex gap-[14px]">
            <label
              htmlFor="alamat_panti"
              className="w-full max-w-[192px] font-semibold"
            >
              Alamat
            </label>
            <input
              required
              type="text"
              id="alamat_panti"
              value={formData.alamat_panti}
              onChange={handleInputChange}
              className="border rounded-md px-3 py-1 outline-none w-full"
            />
          </div>
          <div className="flex justify-between gap-3">
            <label
              htmlFor="provinsi"
              className="w-full max-w-[192px] font-semibold"
            >
              Provinsi
            </label>
            <select
              required
              id="provinsi"
              name="provinsi"
              onChange={handleInputChange}
              className="w-full border rounded-md px-3 py-1 outline-none"
            >
              <option value="null">--Pilih Provinsi--</option>
              {provinsi.map((data) => (
                <option key={data.id} value={data.text.toLowerCase()}>
                  {data.text}
                </option>
              ))}
            </select>
          </div>
          <div className="flex justify-between gap-3">
            <label
              htmlFor="kabupaten"
              className="w-full max-w-[192px] font-semibold"
            >
              Kabupaten / Kota
            </label>
            <select
              required
              id="kabupaten"
              name="kabupaten"
              onChange={handleInputChange}
              className="w-full border rounded-md px-3 py-1 outline-none"
            >
              <option value="null">--Pilih Kabupaten--</option>
              {kabupaten.map((data) => (
                <option key={data.id} value={data.text.toLowerCase()}>
                  {data.text}
                </option>
              ))}
            </select>
          </div>
          <div className="flex justify-between gap-3">
            <label
              htmlFor="kecamatan"
              className="w-full max-w-[192px] font-semibold"
            >
              Kecamatan
            </label>
            <select
              required
              id="kecamatan"
              name="kecamatan"
              onChange={handleInputChange}
              className="w-full border rounded-md px-3 py-1 outline-none"
            >
              <option value="null">--Pilih Kecamatan--</option>
              {kecamatan.map((data) => (
                <option key={data.id} value={data.text.toLowerCase()}>
                  {data.text}
                </option>
              ))}
            </select>
          </div>
          <div className="flex flex-col gap-[14px]">
            <label
              htmlFor="deskripsi_kebutuhan"
              className="w-full max-w-[192px] font-semibold"
            >
              Deskripsi Kebutuhan
            </label>
            <textarea
              name="deskripsi_kebutuhan"
              id="deskripsi_kebutuhan"
              cols="30"
              rows="3"
              className="border rounded-md px-3 py-1 outline-none"
              value={formData.deskripsi_kebutuhan}
              onChange={handleInputChange}
              placeholder="Isi deskripsi singkat kebutuhan"
            ></textarea>
          </div>
          <div className="flex justify-between gap-3">
            <label
              htmlFor="kebutuhan_panti"
              className="w-full max-w-[192px] font-semibold"
            >
              Kebutuhan Panti
            </label>
            <input
              type="text"
              id="kebutuhan_panti"
              className="border rounded-md px-3 py-1 outline-none w-full"
              placeholder="beras, sayuran, ikan"
              value={formData.kebutuhan_panti}
              onChange={handleInputChange}
            />
          </div>
          <div className="flex justify-between gap-3">
            <label
              htmlFor="program_panti"
              className="w-full max-w-[192px] font-semibold"
            >
              Program Panti
            </label>
            <input
              type="text"
              id="program_panti"
              className="border rounded-md px-3 py-1 outline-none w-full"
              placeholder="mengaji, hafalan al-quran"
              value={formData.program_panti}
              onChange={handleInputChange}
            />
          </div>
          <div className="flex justify-between gap-3">
            <label
              htmlFor="jumlah_pengurus"
              className="w-full max-w-[192px] font-semibold"
            >
              Jumlah Pengurus
            </label>
            <input
              required
              type="number"
              id="jumlah_pengurus"
              value={formData.jumlah_pengurus}
              onChange={handleInputChange}
              className="border rounded-md px-3 py-1 outline-none w-full"
            />
          </div>
          <div className="flex justify-between gap-3">
            <label
              htmlFor="jumlah_anaklaki"
              className="w-full max-w-[192px] font-semibold"
            >
              Jumlah Anak Laki-laki
            </label>
            <input
              required
              type="number"
              id="jumlah_anaklaki"
              value={formData.jumlah_anaklaki}
              onChange={handleInputChange}
              className="border rounded-md px-3 py-1 outline-none w-full"
            />
          </div>
          <div className="flex justify-between gap-3">
            <label
              htmlFor="jumlah_anakpr"
              className="w-full max-w-[192px] font-semibold"
            >
              Jumlah Anak Perempuan
            </label>
            <input
              required
              type="number"
              id="jumlah_anakpr"
              value={formData.jumlah_anakpr}
              onChange={handleInputChange}
              className="border rounded-md px-3 py-1 outline-none w-full"
            />
          </div>

          <div className="flex flex-col gap-[14px]">
            <label
              htmlFor="foto"
              className="w-full max-w-[192px] font-semibold"
            >
              Foto Panti
            </label>
            <div className="flex gap-5">
              <svg
                viewBox="0 0 256 256"
                className="w-24 h-24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect fill="none" />
                <rect
                  fill="none"
                  height="160"
                  rx="8"
                  stroke="#000"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="16"
                  width="192"
                  x="32"
                  y="48"
                />
                <path
                  d="M32,168l50.3-50.3a8,8,0,0,1,11.4,0l44.6,44.6a8,8,0,0,0,11.4,0l20.6-20.6a8,8,0,0,1,11.4,0L224,184"
                  fill="none"
                  stroke="#000"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="16"
                />
                <circle cx="156" cy="100" r="12" />
              </svg>
              <div>
                <p>
                  Max : 2MB.
                  <br />
                  Format : jpg | png
                </p>
                <input
                  required
                  type="file"
                  accept="image/png, image/jpeg, image/jpg"
                  id="image"
                  name="image"
                  className="mt-2"
                  onChange={handleInputChangeImage}
                />
              </div>
            </div>
          </div>
          <button
            type="submit"
            className="bg-medium-pink px-4 py-2 rounded-md font-semibold mt-[18px] w-fit self-center"
          >
            Simpan
          </button>
        </form>
      </div>
    </div>
  );
}
