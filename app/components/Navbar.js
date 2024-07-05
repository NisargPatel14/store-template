import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="bg-white sticky top-0 inter w-full flex justify-between items-center px-6 py-2 lg:px-10">
      <h1 className="text-2xl font-bold tracking-wide text-[#2f8739]">
        Your Organic Store
      </h1>
      <div className="flex justify-center items-center gap-x-10">
        <Link
          href="#home"
          className="text-lg font-medium text-black hover:text-[#9ac957]"
        >
          Home
        </Link>
        <Link
          href="#about"
          className="text-lg font-medium text-black hover:text-[#9ac957]"
        >
          About
        </Link>
        <Link
          href="#contact"
          className="text-lg font-medium text-black hover:text-[#9ac957]"
        >
          Contact
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
