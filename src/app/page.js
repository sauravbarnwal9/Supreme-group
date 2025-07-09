"use client";
import { ContactAndFooter } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { Navbar } from "@/components/Navbar";
import { VehicleSolutions } from "@/components/VehicleSolutions";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      {/* <div className="border border-red-400 h-[50px]"> */}
      <Navbar />
      {/* </div> */}
      <Hero />
      <VehicleSolutions/>
      <ContactAndFooter />
    </div>
  );
}
