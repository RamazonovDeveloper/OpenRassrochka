import { useState } from "react";
import "./App.css";

import ruFlag from "./assets/Flag.png";
import uzFlag from "./assets/bayroq.png";
import headerGirl from "./assets/headerGirl.png";

import message from "./assets/message.png";
import phone from "./assets/call.png";

import { data } from "./data";

function App() {
  let identifyLang = localStorage.getItem("lang");

  if (!identifyLang) {
    localStorage.setItem("lang", "uz");
    identifyLang = "uz";
  }

  const [lang, setLang] = useState(identifyLang);

  const handleLangClick = (name) => {
    localStorage.setItem("lang", name);
    setLang(name);
  };

  let langData = data[lang];

  // console.log(langData);

  return (
    <div className="">
      <div className="container">
        <div className="flex justify-end gap-x-3.5 mt-11">
          <div
            className={
              lang === "uz"
                ? "opacity-50 flex cursor-pointer"
                : "flex cursor-pointer"
            }
            onClick={() => handleLangClick("ru")}
          >
            <img className="w-7 me-2" src={ruFlag} alt="" />
            <p className="text-base">Русский</p>
          </div>
          <div
            className={
              lang === "ru"
                ? "opacity-50 flex cursor-pointer"
                : "flex cursor-pointer"
            }
            onClick={() => handleLangClick("uz")}
          >
            <img className="w-7 me-2" src={uzFlag} alt="" />
            <p className="text-base">O'zbek</p>
          </div>
        </div>
      </div>

      {/* HERO SECTION START */}
      <div className="hero overflow-hidden w-full min-h-[700px] xl:pl-[10%] flex flex-col justify-between">
        {/* hero TITLE */}
        <h1 className="hero__title text-black text-uppercase text-[35px] max-w-[202px] px-4 py-2 sm:text-[40px] lg:text-[50px] xl:text-[60px] smm:max-w-[300px] md:max-w-[550px] md:mt-[140px]">
          open
          <p className="text-main_color"> {langData?.header_title}</p>
        </h1>

        {/* hero BLOCK */}
        <div className="hero__block bg-main_color py-[30px] pl-2.5 pr-7 lg:px-[60px] lg:py-[45px]  max-w-[309px] sm:max-w-[377px] smm:max-w-[400px] md:max-w-[414px] lg:max-w-[574px] xl:max-w-[650px] xl:px-[70px] ">
          <p className="hero__text text-white text-base sm:text-xl md:uppercase lg:text-[22px] xl:text-[25px]">
            {langData?.header_text1}
          </p>
          <p className="hero__text text-white text-base sm:text-xl md:uppercase lg:text-[22px] xl:text-[25px]">
            {langData?.header_text2}
          </p>
        </div>
      </div>

      {/* HERO SECTION END */}
      {/* HERO SECTION START */}
      {/* <div className="hero overflow-hidden">

        <h1 className="hero__title text-black text-uppercase text-[35px] max-w-[202px] px-4 py-2 sm:text-[40px] smm:max-w-[300px] md:align-middle">
          open
          <span className="text-main_color"> {langData?.header_title}</span>
        </h1>
        <div className="relative">
          <div className="hero__img-block relative -z-10 bg-gray_form w-[920px] h-[620px] translate-x-[9%] -translate-y-[18%] lg:translate-x-[40%] lg-w-70%">
            <img
              className="hero__img w-full -translate-x-[21%] sm:-translate-x-[12%] smm:-translate-x-[5%] md:translate-x-0 -translate-y-[4%]"
              src={headerGirl}
              alt="main girl"
            />
          </div>
        </div>

        <div className="hero__block bg-main_color py-[30px] pl-2.5 pr-7 max-w-[309px]  sm:max-w-[377px] smm:max-w-[400px] md:max-w-[414px]  -translate-y-[200px] smm:-translate-y-[300px] lg:px-[60px] lg:py-[45px] lg:max-w-[574px]">
          <p className="hero__text text-white text-base sm:text-xl md:uppercase lg:text-[22px]">
            {langData?.header_text1}
          </p>
          <p className="hero__text text-white text-base sm:text-xl md:uppercase lg:text-[22px]">
            {langData?.header_text2}
          </p>
        </div>
      </div> */}

      {/* HERO SECTION END */}

      <div className="container mt-[56px] ">
        <div className="flex text-main_color font-medium text-[14px] mb-10">
          <p className="uppercase">{langData.service_name}</p>
        </div>
        <p className="uppercase text-[25px] text-main_color leading-7 font-light">
          Open <span className="text-black">muddatli kartasi</span> - Bu
          biznesingiz o’sishi va rivojlanishi
        </p>
        <div className="text-base mt-4 font-medium">
          <p>{langData.service_text1}</p>
          <p>{langData.service_text1}</p>
        </div>
      </div>

      <div className="container">
        <p className="uppercase text-[14px] font-medium my-10">
          <span className="text-main_color mr-2">02</span>
          {langData.service_item2_title}
        </p>
        <div className="my-10 font-medium">
          <p className="uppercase text-[14px] font-medium mb-[14px]">
            <span className="text-main_color mr-2">03</span>
            {langData.service_item3_title}
          </p>
          <p className="leading-[18px] text-[14px]">
            {langData.service_item3_text}
          </p>
        </div>
        <div className="my-10 font-medium">
          <p className="uppercase text-[14px] font-medium mb-[14px]">
            <span className="text-main_color mr-2">04</span>
            {langData.service_item4_title}
          </p>
          <p className="leading-[18px] text-[14px]">
            {langData.service_item4_text}
          </p>
        </div>
        <div className="my-10 font-medium">
          <p className="uppercase text-[14px] font-medium mb-[14px]">
            <span className="text-main_color mr-2">05</span>
            {langData.service_item5_title}
          </p>
          <p className="leading-[18px] text-[14px]">
            {langData.service_item5_text}
          </p>
        </div>
        <div className="my-10 font-medium">
          <p className="uppercase text-[14px] font-medium mb-[14px]">
            <span className="text-main_color mr-2">06</span>
            {langData.service_item6_title}
          </p>
          <p className="leading-[18px] text-[14px]">
            {langData.service_item6_text}
          </p>
        </div>
        <div className="my-10 font-medium">
          <p className="uppercase text-[14px] font-medium mb-[14px]">
            <span className="text-main_color mr-2">07</span>
            {langData.service_item7_title}
          </p>
          <p className="leading-[18px] text-[14px]">
            {langData.service_item7_text}
          </p>
        </div>
        <div className="my-10 font-medium">
          <p className="uppercase text-[14px] font-medium mb-[14px]">
            <span className="text-main_color mr-2">08</span>
            {langData.service_item8_title}
          </p>
          <p className="leading-[18px] text-[14px]">
            {langData.service_item8_text}
          </p>
        </div>
      </div>

      <div className="form_section relative h-[160px]">
        <div className="container">
          <div className="form_section_card py-[40px] px-[10px] bg-gray_form absolute top-3/4">
            <h3 className="font-medium text-base uppercase">
              {langData.partners_header}
            </h3>
            <p className="text-[14px] my-6 font-medium">
              {langData.partners_text}
            </p>
            <input
              className="w-full py-4 px-2 bg-gray_input"
              type="text"
              placeholder={langData.partners_input_name}
            />
            <input type="text" placeholder={langData.partners_input_tel} />
            <button className="w-full bg-main_color text-white py-3 uppercase mt-6 mb-10">
              {langData.partners_btn}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
