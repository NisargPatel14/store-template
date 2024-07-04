import React from "react";

const Navbar = () => {
  return (
    <nav className="inter w-full flex justify-between items-center px-6 border-border border-[1px] rounded-md py-2 lg:px-10">
      <h1 className="text-2xl font-bold tracking-wide text-[#2f8739]">Sunny Groceries</h1>
      <div className="flex justify-center items-center gap-x-10">
        <a
          href="#"
          className="text-lg font-medium text-black hover:text-[#9ac957]"
        >
          Home
        </a>
        <a
          href="#"
          className="text-lg font-medium text-black hover:text-[#9ac957]"
        >
          About
        </a>
        <a
          href="#"
          className="text-lg font-medium text-black hover:text-[#9ac957]"
        >
          Contact
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
