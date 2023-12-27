import React from "react";
import { baseStyle } from "../../assets/styles";
import { cardTentangData, FaqData, faqStatData } from "../../constant";
import { CardFaq, CardTentang } from "../../components";

export default function TentangKami() {
  return (
    <>
      <section className="bg-gradient-to-t from-gradient-pink to-white py-[85px]">
        <div className={`${baseStyle} flex justify-between w-full`}>
          <div className="max-w-[650px] text-justify">
            <h1 className="text-[28px] mb-4 font-semibold">Tentang Kami</h1>
            <p className="mb-3 font-medium max-w-[500px]">
              Panti Peduli adalah platform yang bertujuan sebagai sarana
              berdonasi dengan mudah untuk membantu meringankan beban para anak
              panti asuhan demi melangsungkan kehidupan mereka. Dukung panti
              asuhan jadi mandiri lewat program pemberdayaan yang mengandalkan
              inovasi teknologi dan sistem geolokasi. Dengan tujuan meningkatkan
              kesejahteraan dan kualitas hidup para adik-adik yatim/dhuafa.
            </p>
            <p className="font-medium max-w-[500px]">
              Mulai dari fitur layanan profil panti, halaman donasi, program
              pendampingan usaha, hingga pemasaran produk untuk memajukan panti
              asuhan. Dengan penyajian informasi yang up to date serta berbasis
              sistem geolokasi kami harapkan bantuan yang diberikan tidak hanya
              cepat tapi juga dekat.
            </p>
          </div>
          <div className="flex flex-col gap-9 w-96">
            {cardTentangData.map((data) => {
              return (
                <CardTentang
                  key={crypto.randomUUID()}
                  text={data.text}
                  img={data.img}
                />
              );
            })}
          </div>
        </div>
      </section>
      <section className={baseStyle}>
        <div className="my-10">
          <h2 className="text-[28px] font-semibold mb-9">
            FAQ (Frequently Asked Questions)
          </h2>
          <div className="grid grid-cols-2 gap-x-20 gap-y-14">
            {FaqData.map((data) => {
              return (
                <CardFaq
                  key={crypto.randomUUID()}
                  img={data.img}
                  title={data.title}
                  text={data.text}
                />
              );
            })}
          </div>
          <div className="flex justify-between mt-12">
            {faqStatData.map((data) => {
              return (
                <div
                  className="flex flex-col justify-center items-center gap-3 py-5 w-[200px] shadow-lg rounded-2xl font-semibold"
                  key={crypto.randomUUID()}
                >
                  <img
                    src={data.img}
                    alt="logo-maps"
                    className="w-16 h-16 object-contain"
                  />
                  <p className="text-center text-lg">{data.title}</p>
                  <p className="text-pink">{data.count}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
