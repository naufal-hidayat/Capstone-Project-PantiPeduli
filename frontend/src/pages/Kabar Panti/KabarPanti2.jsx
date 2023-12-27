import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { baseStyle } from "../../assets/styles";
import gizi from "../../assets/Images/pemenuhan-gizi.png";
import share from "../../assets/Icons/icon-share.svg";
import kabar from "../../assets/Images/kabar.png";
import penyaluran from "../../assets/Images/penyaluran-alat-sekolah.png";
import calendar from "../../assets/Icons/calendar.svg";

export default function KabarPanti() {
  const [article, setArticle] = useState();
  let { idArticle } = useParams();
  console.log(idArticle);
  useEffect(() => {
    async function getArticleById() {
      const res = await fetch(`http://127.0.0.1:3000/articles/${idArticle}`);
      if (!res.ok) {
        setArticle(null);
        return;
      }
      const data = await res.json();
      setArticle(data[0]);
    }
    getArticleById();
  }, []);

  return (
    <div className={`${baseStyle} mt-12 mb-10 drop-shadow`}>
      <section>
        {(article && (
          <div className="py-10 px-10 drop-shadow-xl rounded-xl overflow-hidden bg-white">
            <div className="space-y-3 p-4">
              <p className="font-inter text-2xl font-bold text-pink">
                {article.title}
              </p>
            </div>
            <div className="flex items-center justify-between space-y-3 p-4">
              <p className="font-inter text-base font-bold">
                Oleh : {article.author}
                <br></br>
                {article.createdAt}
              </p>
              <img src={share} alt="" className="ml-2" />
            </div>
            <div className="px-4">
              <img
                src={`http://127.0.0.1:3000/images/article/${article.image}`}
                alt=""
                className="w-full max-h-96 mb-11 object-cover shadow-2xl rounded-xl"
              />
            </div>
            <div className="space-y-3 p-4">
              {article.description.split(`\n`).map((data) => (
                <p className="font-inter text-base max-w-[75ch]">{data}</p>
              ))}
              {/* <p className="font-inter text-base max-w-[75ch]"></p> */}
            </div>
          </div>
        )) || <p>Loading. . .</p>}
      </section>
      {/* <section>
        <div
          key={crypto.randomUUID()}
          className="w-[290px] h-[1086px] drop-shadow-xl rounded-xl overflow-hidden bg-white"
        >
          <div className="flex justify-left space-y-3 p-4 mt-2">
            <img src={kabar} alt="" className="max-w-full h-auto" />
          </div>
          <div className="flex items-center justify-center mt-5">
            <img src={penyaluran} alt="" className="max-w-full h-auto" />
          </div>
          <div className="flex items-center gap-2 space-y-3 p-4">
            <img src={calendar} alt="" className="w-[46px] h-[44px]" />
            <p className="font-semibold">
              Penyaluran Alat sekolah kepada 89 anak panti
            </p>
          </div>
          <div className="space-y-3 p-4">
            <p className="font-inter text-xs">
              Bandung - Sabtu 2 Oktober 2023, melakukan “kolaborasi kebaikan”
              bersama sahabat yatim indonesia dalam rangka menyalurkan program
              Yatim berprestasi.
            </p>
          </div>
        </div>
      </section> */}
    </div>
  );
}
