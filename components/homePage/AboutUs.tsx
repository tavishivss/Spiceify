import Image from "next/image";
import React from "react";
import { Noto_Sans } from "next/font/google";
import { Inter } from "next/font/google";
import Heading from "./Heading";

const noto_sans2 = Noto_Sans({ weight: "500", subsets: ["greek-ext"] });

const inter = Inter({ weight: "500", subsets: ["latin"] });

const AboutUs = () => {
  return (
    <>
      <Heading heading="About Us" />
      <div className="flex mt-5 flex-col lg:flex-row justify-between items-center px-6 sm:px-10 gap-10">
        <Image
          src="/about-us.png"
          width={500}
          height={200}
          className="rounded-xl duration-300 hover:scale-110 transition-all hover:cursor-pointer object-contain shadow-black shadow-2xl"
          alt="about-us"
        />
        <div
          className={`${noto_sans2.className} leading-normal text-justify w-full  text-gray-700`}
        >
          <p className="first-letter:text-[24px] leading-[26px]">
            Established in 1984. Devbhumi Ratan Herbal is a tapestry woven with
            threads of tradition, innovation and a profound respect for nature.
            Rooted in the lap of Himalayas, our journey began with a vision to
            unlock the secrets of ancient herbal wisdom. With a deep
            understanding of the rich biodiversity that graces the{" "}
            <span className="font-extrabold text-black">Devbhumi </span>
            <span className="italic text-black"> (Land of the Gods)</span>, we
            embarked on a mission to harness the healing power of the herbs that
            thrive in this sacred soil.
          </p>
        </div>
      </div>
    </>
  );
};

export default AboutUs;
