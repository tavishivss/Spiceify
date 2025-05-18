import AboutUs from "@/components/homePage/AboutUs";
import ContactUs from "@/components/homePage/ContactUs";
import Footer from "@/components/homePage/Footer";
import Hero from "@/components/homePage/Hero";
import Navbar from "@/components/homePage/Navbar";
import OurProducts from "@/components/homePage/OurProducts";
import React from "react";

const Page = () => {
  return (
    <div className="w-full items-center justify-center flex flex-col gap-[100px] h-full">
      <Navbar />
      <Hero />
      <OurProducts />
      <AboutUs />
      <ContactUs />
      <div className="w-11/12 relative mx-auto">
        <Footer />
      </div>
    </div>
  );
};

export default Page;
