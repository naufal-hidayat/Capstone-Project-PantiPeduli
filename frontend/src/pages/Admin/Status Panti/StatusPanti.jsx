import React, { useEffect, useState } from "react";
import { useAuth } from "../../../context/AuthContext";

export default function StatusPanti() {
  const [dataPanti, setDataPanti] = useState();
  const [sertifikatPanti, setSertifikatPanti] = useState(null);
  const { currentUser } = useAuth();
  const userId = currentUser.uid;
  if (!userId) {
    console.log("user id tidak ada");
    return;
  }

  useEffect(() => {
    async function getDataPanti() {
      const res = await fetch(`http://127.0.0.1:3000/profiles/user/${userId}`);
      const data = await res.json();
      setDataPanti(data[0]);
    }
    getDataPanti();
  }, [userId]);

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      const formData = new FormData();
      formData.append("sertifikat_panti", sertifikatPanti);

      const addCertificate = await fetch(
        `http://127.0.0.1:3000/profiles/certificate/${userId}`,
        {
          method: "POST",
          body: formData,
          headers: {
            // Set the Content-Type header for file upload
            "Content-Type": "multipart/form-data",
          },
        }
      );
      if (!addCertificate.ok) {
        console.log("tidak berhasil upload");
        return;
      }
      console.log("berhasil upload");
      window.location.reload();
    } catch (error) {
      console.log("ada yang salah");
    }
  }

  return (
    <div>
      <h1 className="text-lg font-semibold px-9 py-6">Status Panti</h1>
      <hr className="text-border-color" />
      <div className="px-9 py-6 flex flex-col gap-8">
        <div className="font-semibold flex justify-between">
          <div>
            <p className="mb-1">Bergabung Sejak</p>
            <p className="text-[#545757]">
              {dataPanti ? dataPanti.createdAt : "-"}
            </p>
          </div>
          <div>
            <p className="mb-1">Terakhir Update</p>
            <p className="text-[#545757]">
              {dataPanti ? dataPanti.updatedAt : "-"}
            </p>
          </div>
        </div>
        <div>
          <p className="font-semibold mb-1">Status Panti</p>
          <div className="px-3 py-2 bg-pink rounded-md w-fit">
            <p className="text-white text-sm">
              {dataPanti ? "Terverifikasi" : "Belum Terverifikasi"}
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-1">
          {dataPanti ? (
            dataPanti.sertifikat_panti ? (
              <div>
                <p>Sertifikat Panti</p>
                <img
                  src={`http://127.0.0.1:3000/images/certificate/${dataPanti.sertifikat_panti}`}
                  alt="sertifikat panti"
                  className="w-48"
                />
              </div>
            ) : (
              <form
                className="flex flex-col gap-[14px]"
                onSubmit={handleSubmit}
              >
                <label htmlFor="foto" className="font-semibold">
                  Sertifikat Panti
                </label>
                <div className="flex gap-5">
                  {(sertifikatPanti && (
                    <img
                      src={URL.createObjectURL(sertifikatPanti)}
                      alt="Selected"
                      style={{ width: "96px", objectFit: "cover" }}
                    />
                  )) || (
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
                  )}
                  <div>
                    <p>
                      Max : 2MB. Ukuran 200 x 60 pixel.
                      <br />
                      Format : jpg | png
                    </p>
                    <input
                      type="file"
                      accept="image/png, image/jpeg, image/jpg"
                      id="sertifikat_panti"
                      className="mt-2"
                      required
                      onChange={(e) => {
                        setSertifikatPanti(e.target.files[0]);
                      }}
                    />
                  </div>
                </div>
                <button
                  type="submit"
                  className="px-3 py-2 bg-pink rounded-md w-fit text-white"
                >
                  Simpan
                </button>
              </form>
            )
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
}
