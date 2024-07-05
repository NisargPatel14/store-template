import React from "react";
import Image from "next/image";

function AboutUs() {
  return (
    <div
      id="about"
      className="inter w-full h-full bg-[#f4fde7] flex justify-evenly lg:flex-row md:flex-col sm:flex-col lg:items-center md:items-center"
    >
      <div className="relative overflow-hidden rounded-full lg:h-3/4 sm:h-1/2 md:h-1/2 aspect-square">
        <Image
          className="object-cover rounded-full"
          src="https://images.pexels.com/photos/1656666/pexels-photo-1656666.jpeg"
          alt="About Us"
          fill
        />
      </div>
      <div className="lg:w-[40%] md:w-screen sm:w-screen flex flex-col gap-9 p-10">
        <div className="text-[#3a3a3a] font-semibold lg:text-2xl sm:text-2xl md:text-2xl text-2xl">
          About Us
        </div>
        <div className="text-[#3a3a3a] font-bold lg:text-5xl sm:text-4xl md:text-4xl text-3xl">
          We believe working with{" "}
          <span className="text-[#35893b]">trusted farmers</span>
        </div>
        <div className="text-[#3a3a3a] text-xl font-medium">
          Organic products must be certified by an accredited certification body
          to ensure they meet organic standards. Certification involves periodic
          inspections of farms, processing facilities, and documentation.
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
