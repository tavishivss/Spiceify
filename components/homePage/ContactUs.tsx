"use client";
import React from "react";
import Heading from "./Heading";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import Image from "next/image";

import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Noto_Sans } from "next/font/google";

const noto_sans2 = Noto_Sans({ weight: "600", subsets: ["devanagari"] });
const ContactUs = () => {
  const center = {
    lat: 30.7333,
    lng: 76.7794,
  };

  const containerStyle = {
    width: "90vw",
    height: "550px",
  };

  const formSchema = z.z.object({
    username: z.string().min(2).max(50),
    email: z.string().email(),
    message: z.string().min(10).max(1000),
  });
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      email: "",
      message: "",
    },
  });

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }
  return (
    <div className={`flex px-4 flex-col gap-[50px]`}>
      <Heading heading="Our Location" />
      <div className="flex items-center mt-[50px]  flex-col lg:flex-row lg:gap-0 gap-[20px]">
        <LoadScript googleMapsApiKey="AIzaSyCwCcN6c496MXlMUk3a4balxosMQnsHaHM">
          <GoogleMap
            zoom={10}
            center={center}
            mapContainerClassName="rounded-xl shadow-2xl"
            mapContainerStyle={containerStyle}
          >
            <Marker position={center} />
          </GoogleMap>
        </LoadScript>
      </div>
      <Heading heading="Contact Details" />
      <div className="flex flex-col mt-[50px] md:flex-row justify-between  items-start gap-[30px]">
        <Image
          src="/contact-us.png"
          width={600}
          height={300}
          className="shadow-2xl shadow-dark-300 rounded-3xl hover:scale-105 hover:cursor-pointer transition-all duration-500"
          alt="contact-us"
        />
        <div className="w-full">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              <FormField
                control={form.control}
                name="username"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="font-extrabold">Username</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter your username" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="font-extrabold">Email</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter your email" {...field} />
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="font-extrabold">
                      Your Message
                    </FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Describe your message"
                        className="resize-none"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button
                variant={"ghost"}
                className="hover:cursor-pointer hover:scale-105 bg-dark-500 py-4 px-8 text-white transition-all"
                type="submit"
              >
                Submit
              </Button>
            </form>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
