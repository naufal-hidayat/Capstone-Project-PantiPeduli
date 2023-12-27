import React from "react";
import { Link } from "react-router-dom";
// import programDonasi from "../../assets/Images/program-donasi.jpg";
// import programDonasi from "../assets/Images/program-donasi.jpg";

export default function CardPanti({ id, namaPanti, image, alamat }) {
  return (
    <Link
      to={`panti/${id}`}
      className="bg-light-pink rounded-xl overflow-hidden max-w-[390px]"
    >
      <img src={`http://127.0.0.1:3000/images/profile/${image}`} alt="" />
      <div className="px-8 py-5">
        <p className="text-xl text-pink font-semibold mb-7">{namaPanti}</p>
        <p>{alamat}</p>
        {/* <p className="text-14">{desc}</p> */}
      </div>
      {/* <Link
        to={link}
        className="text-white block text-lg bg-purple w-full py-2 font-bold text-center"
      >
        Donasi Sekarang
      </Link> */}
    </Link>
  );
}
