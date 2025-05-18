"use client";
import Link from "next/link";
import React, { useState } from "react";
import { FaInstagram, FaYoutube } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { LuLinkedin } from "react-icons/lu";
import { IoMailOutline } from "react-icons/io5";
import { Inter } from "next/font/google";
import { Noto_Sans } from "next/font/google";
import { Button } from "../ui/button";

const noto_sans2 = Noto_Sans({ weight: "600", subsets: ["latin"] });
const inter = Inter({ weight: "400", subsets: ["latin"] });
const navbarLinks = [
  { href: "/products", title: "Products", id: "1" },
  { href: "/about", title: "About", id: "2" },
  { href: "/contact", title: "Contact", id: "3" },
  ,
];
const Footer = () => {
  const [feedback, setFeedback] = useState("");
  return (
    <div
      className={`flex flex-col py-[50px] justify-center gap-[50px] ${noto_sans2.className}`}
    >
      <div className="flex flex-row w-full items-center justify-start gap-[20px]">
        <p className="text-black dark:text-white text-lg font-sans">
          Follow me
        </p>
        <Link href="/">
          <FaInstagram
            size={24}
            className="text-gray-500 hover:text-black duration-300 hover:scale-110 cursor-pointer"
          />
        </Link>
        <Link href="/">
          <FaGithub
            size={24}
            className="text-gray-500 hover:text-black duration-300 hover:scale-110 cursor-pointer"
          />
        </Link>
        <Link href="/">
          <FaYoutube
            size={24}
            className="text-gray-500 hover:text-black duration-300 hover:scale-110 cursor-pointer"
          />
        </Link>
        <Link href="/">
          <LuLinkedin
            size={24}
            className="text-gray-500 hover:text-black duration-300 hover:scale-110 cursor-pointer"
          />
        </Link>
      </div>
      <div className="flex flex-col justify-center items-start gap-[10px] py-10 border-t-2 border-b-2 border-pure-greys-200 ">
        <form className="w-full flex-1 relative flex flex-col md:flex-row gap-[30px]">
          <IoMailOutline
            size={24}
            className="absolute text-pure-greys-200 left-4 top-[20%] md:top-[50%] translate-y-[-50%]"
          />
          <input
            type="text"
            className="form-style w-full h-[50px] rounded-md font-sans font-semibold !bg-transparent border !text-pure-greys-300 !pl-[60px] sm:placeholder:text-[16px] placeholder:text-[12px]"
            placeholder="Send us your Feedback anonymously"
            onChange={(e) => setFeedback(e.target.value)}
            value={feedback}
          />
          <Button
            type="submit"
            className="py-2 px-8 font-sans transition-all font-semibold bg-black text-white  rounded-md duration-300 hover:scale-110"
          >
            Submit
          </Button>
        </form>
        <p className="text-pure-greys-400 text-sm font-sans">
          I accept Devbhumi Ratan Harbal&apos;s Terms and Conditions and
          acknowledge that my information will be used in accordance with
          Devbhumi Ratan Harbal&apos;s{" "}
          <Link
            href="/"
            className="underline underline-offset-8 text-blue-500 hover:text-violet-500 "
          >
            Privacy Policy.
          </Link>
        </p>
      </div>
      <div className="flex flex-row items-center justify-start gap-[10px]">
        <div className="flex flex-col items-start justify-start sm:flex-row text-pure-greys-200 sm:items-center sm:justify-center gap-5">
          <Link href="/" className="font-sans">
            <h1
              className={`text-[36px] sm:text-[52px]  tracking-tight leading-normal sm:leading-[52px]   ${noto_sans2.className}  bg-hero-light  animated-gradient text-center`}
            >
              <span
                className={`font-extrabold leading-[52px] text-[52px] sm:text-[80px] sm:leading-[80px] `}
              ></span>{" "}
            </h1>
            <h1
              className={`text-xl  tracking-tight leading-normal   ${noto_sans2.className}  bg-hero-light  animated-gradient text-center`}
            >
              Devbhumi Ratan Harbal
            </h1>
          </Link>
          {navbarLinks.map((link: any) => (
            <div className="text-pure-greys-200" key={link.id}>
              <Link
                href={`/${link.href}`}
                className="hover:underline hover:underline-offset-[20px] hover:cursor-pointer decoration-caribbeangreen-300"
              >
                {link.title}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Footer;
