import React from "react";
import Heading from "./Heading";

import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import ProductData from "../../constants/Productdata";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Noto_Sans } from "next/font/google";

const noto_sans2 = Noto_Sans({ weight: "600", subsets: ["devanagari"] });

const OurProducts = () => {
  return (
    <div className="flex flex-col  gap-[50px]">
      <Heading heading="Our Products" />
      <div className=" mt-[50px] ">
        <Carousel className="w-full max-w-[75vw] sm:max-w-[90vw] sm:px-4">
          <CarouselContent className="-ml-1">
            {ProductData.map((product, index) => (
              <CarouselItem
                key={index}
                className="pl-1  md:basis-1/2 lg:basis-1/3"
              >
                <Card className="hover:shadow-xl duration-500 hover:cursor-pointer transition-all hover:shadow-black ">
                  <CardHeader>
                    <CardTitle className="capitalize">{product.name}</CardTitle>
                  </CardHeader>
                  <CardContent className="items-center">
                    <Image
                      src={product.image}
                      height={350}
                      width={350}
                      className="object-cover shadow-sm rounded-lg"
                      alt="product-data"
                    />

                    <CardDescription
                      className={`text-sm break-all text-gray-600 mt-2 ${noto_sans2.className} first-letter:text-[18px] first-letter:font-bold first-letter:text-black`}
                    >
                      {product.description.slice(0, 150)}...
                    </CardDescription>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="..." />
          <CarouselNext className="..." />
          <CarouselNext />
        </Carousel>
      </div>
    </div>
  );
};

export default OurProducts;
