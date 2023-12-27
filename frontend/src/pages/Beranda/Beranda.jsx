import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { baseStyle } from "../../assets/styles";
import firstCarousel from "../../assets/Images/carousel-1.jpg";
import bantuan from "../../assets/Images/bantuan.jpeg";
import hero from "../../assets/Images/hero-donatur.jpg";
import calendar from "../../assets/Icons/calendar.svg";
import { Link } from "react-router-dom";

import { alasanDonasiData, doaDonaturData } from "../../constant";
import CardKabarPanti from "../../components/CardKabarPanti";

export default function Beranda() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const [article, setArticle] = useState();

  useEffect(() => {
    async function getThreeLastArticle() {
      const res = await fetch("http://127.0.0.1:3000/articles/home");
      if (!res.ok) {
        setArticle(null);
        return;
      }
      const data = await res.json();
      // console.log("data");
      setArticle(data);
    }
    getThreeLastArticle();
  }, []);

  return (
    <>
      <section className={baseStyle}>
        <div className="mt-8 mb-14">
          <Slider {...settings}>
            <div>
              <img src={firstCarousel} alt="" />
            </div>
            <div>
              <img src={firstCarousel} alt="" />
            </div>
            <div>
              <img src={firstCarousel} alt="" />
            </div>
            <div>
              <img src={firstCarousel} alt="" />
            </div>
            <div>
              <img src={firstCarousel} alt="" />
            </div>
          </Slider>
        </div>
      </section>
      <section className={baseStyle}>
        <h1 className="text-4xl mb-12 text-center">
          Kabar{" "}
          <span className="underline font-bold text-pink">Panti Peduli</span>
        </h1>
        <div className="grid grid-cols-3 gap-4">
          {(article &&
            article.map((data) => {
              return (
                <CardKabarPanti
                  key={crypto.randomUUID()}
                  img={`http://127.0.0.1:3000/images/article/${data.image}`}
                  judul={data.title}
                  deskripsi={data.description}
                  id={data.id}
                />
              );
            })) || <p>Loading. . .</p>}
        </div>
        <div className="flex justify-center">
          <Link
            to="kabar-panti"
            className="text-lg font-semibold w-[207px] mt-8 text-pink text-center p-2 rounded-md shadow drop-shadow-lg"
          >
            Liaht Selengkapnya
          </Link>
        </div>
      </section>
      <section className={baseStyle}>
        <h1 className="text-4xl mt-12 mb-10 text-center">
          Kenapa kamu harus berdonasi di{" "}
          <span className="underline font-bold text-pink">Panti Peduli</span> ?
        </h1>
        <div className="flex justify-between">
          {alasanDonasiData.map((data) => {
            return (
              <div
                key={crypto.randomUUID()}
                className="flex items-center gap-4 max-w-[453px] w-full shadow-2xl rounded-lg px-5 py-4"
              >
                <img
                  src={data.img}
                  alt=""
                  className="w-[112px] h-[112px] object-contain"
                />
                <div className="flex flex-col gap-4">
                  <p className="text-xl font-medium">{data.title}</p>
                  <p className="">{data.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </section>
      <section>
        <div className="mt-6 relative pb-72">
          <img src={hero} alt="" className="mx-auto" />
          <div
            className={`${baseStyle} absolute top-[77px] right-1/2 translate-x-1/2`}
          >
            <h2 className="text-white mb-14 text-4xl font-bold text-center">
              Pesan dan Doa Donatur
            </h2>
            <div className="flex justify-between gap-4">
              {doaDonaturData.map((data) => {
                return (
                  <div
                    key={crypto.randomUUID()}
                    className="font-normal w-[280px]"
                  >
                    <div className="p-5 bg-white text-xs shadow-lg mb-4 text-black rounded-md">
                      <p>{data.doa}</p>
                    </div>
                    <div className="flex gap-2">
                      <img src={data.avatar} alt="" />
                      <div className="text-sm text-black">
                        <p className="font-bold">{data.nama}</p>
                        <p>{data.profesi}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
