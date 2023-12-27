import React from "react";
import { Link } from "react-router-dom";

export default function CardKabarPanti({ img, judul, deskripsi, id }) {
  return (
    <div className="relative max-w-xs drop-shadow-xl rounded-xl overflow-hidden bg-gradient-to-b from-gradient-pink to-white">
      <img src={img} alt="" className="w-full h-56 object-cover" />
      <div className="flex flex-col justify-between h-fit p-4 relative bottom-0">
        <div>
          <div className="flex items-center gap-2 mb-3">
            <p className="font-semibold line-clamp-3">{judul}</p>
          </div>
          <p className="text-sm line-clamp-4 mb-3">{deskripsi}</p>
        </div>
        <Link
          to={`/kabar-panti/${id}`}
          className="block mt-auto shadow-lg text-xs p-2 rounded-md border-[1.5px] border-black w-fit"
        >
          selengkapnya
        </Link>
      </div>
    </div>
  );
}
