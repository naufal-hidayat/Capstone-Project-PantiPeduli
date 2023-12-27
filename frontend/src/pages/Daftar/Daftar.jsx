import React from 'react';
import DaftarBanner from "../../assets/Images/Daftar-banner.png";
import DaftarForm from './DaftarForm';


function Daftar() {
  return (
    <div className="w-full h-screen flex">
      <div className="w-1/2 h-full flex items-center justify-center">
        <DaftarForm />
      </div>
      <div className="w-1/2 h-full overflow-hidden mb-[100px]">
        <img src={DaftarBanner} className="w-full h-screen object-cover" alt="Banner" />
      </div>
    </div>
  );
}

export default Daftar;