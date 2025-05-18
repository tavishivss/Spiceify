import Image from "next/image";
import React from "react";
import "./Hero.css";
import { Noto_Sans } from "next/font/google";
import { Inter } from "next/font/google";

const noto_sans2 = Noto_Sans({ weight: "900", subsets: ["cyrillic"] });
const noto_sans2Bold = Noto_Sans({ weight: "700", subsets: ["cyrillic"] });
const inter = Inter({ weight: "500", subsets: ["latin"] });

const Hero = () => {
  return (
    <div className="flex flex-col px-8  gap-4 lg:flex-row">
      <div className="flex flex-col items-center justify-center lg:w-[50%] gap-4">
        <h1
          className={`text-[36px] sm:text-[52px] font-extrabold tracking-tight leading-normal sm:leading-[52px]  ${noto_sans2Bold.className} text-center relative`}
        >
          Welcome To
        </h1>
        <h1
          className={`text-[36px] sm:text-[52px]  tracking-tight leading-normal sm:leading-[52px]   ${noto_sans2.className}  bg-hero-light  animated-gradient text-center`}
        >
          <span
            className={`font-extrabold leading-[52px] text-[52px] sm:text-[80px] sm:leading-[80px] `}
          >
            Devbhumi
          </span>{" "}
          Ratan Harbal
        </h1>

        {/* <h5 className="text-[15px] leading-[26px] font-walsheimReg text-white ">
          Build skills with courses, certificates, and degrees online from
          world-class universities and companies.
        </h5> */}
      </div>
      {/* video */}
      <div className="flex flex-col gap-4  relative lg:w-[80%] h-[20%]   items-center">
        <div className="blob-video-wrapper relative">
          <Image src="/hero.png" alt="hero spices" width={900} height={500} />
        </div>
        {/* boxes absolutely positioned over video */}
      </div>
    </div>
  );
};

export default Hero;
