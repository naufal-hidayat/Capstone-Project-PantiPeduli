import React, { useEffect } from "react";
import AdminTerdaftar from "./AdminTerdaftar";
import AdminBelumTerdaftar from "./AdminBelumTerdaftar";
import { useAuth } from "../../../context/AuthContext";
import { Navigate } from "react-router-dom";
import { useState } from "react";

export default function Dashboard() {
  const { currentUser } = useAuth();
  if (!currentUser.uid) {
    console.log("tidak ada user_id");
    return;
    // return <Navigate to={"/login"} replace />;
  }
  const userId = currentUser.uid;

  const [dataPanti, setDataPanti] = useState(null);
  const [refresh, setRefresh] = useState("");

  useEffect(() => {
    async function getDataPanti() {
      try {
        const res = await fetch(
          `http://127.0.0.1:3000/profiles/user/${userId}`
        );
        if (!res.ok) {
          setDataPanti(null);
          return;
        }
        const data = await res.json();
        setDataPanti(data[0]);
      } catch (error) {
        console.log(error);
      }
    }
    getDataPanti();
  }, [userId]);

  return (
    <>
      {dataPanti ? (
        <AdminTerdaftar
          nama_panti={dataPanti.nama_panti}
          notelp_panti={dataPanti.notelp_panti}
          nama_pemilik={dataPanti.nama_pemilik}
          notelp_pemilik={dataPanti.notelp_pemilik}
          deskripsi_panti={dataPanti.deskripsi_panti}
          alamat_panti={dataPanti.alamat_panti}
          provinsi={dataPanti.provinsi}
          kabupaten={dataPanti.kabupaten}
          kecamatan={dataPanti.kecamatan}
          program_panti={dataPanti.program_panti}
          kebutuhan_panti={dataPanti.kebutuhan_panti}
          deskripsi_kebutuhan={dataPanti.deskripsi_kebutuhan}
          jumlah_pengurus={dataPanti.jumlah_pengurus}
          jumlah_anaklaki={dataPanti.jumlah_anaklaki}
          jumlah_anakpr={dataPanti.jumlah_anakpr}
          image={dataPanti.image}
        />
      ) : (
        <AdminBelumTerdaftar refresh={setRefresh} />
      )}
    </>
  );
}
