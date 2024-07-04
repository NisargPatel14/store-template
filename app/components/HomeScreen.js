import React from "react";

function HomeScreen() {
  return (
    <div
      className="h-[90%] w-screen bg-cover flex lg:items-center md:items-center"
      style={{
        backgroundImage:
          'url("https://images.pexels.com/photos/5965656/pexels-photo-5965656.jpeg")',
      }}
    >
      <div className="lg:w-[40%] md:w-screen sm:w-screen flex flex-col gap-9 p-10">
        <div className="text-[#3a3a3a] font-semibold lg:text-2xl sm:text-2xl md:text-2xl text-2xl">
          Save upto 15 % off
        </div>
        <div className="text-[#3a3a3a] font-bold lg:text-5xl sm:text-4xl md:text-4xl text-3xl">
          Buy Fresh Groceries and Organic food.
        </div>
        <div className="text-[#3a3a3a] text-xl font-medium">
          Organic food is the product of a farming system which avoids the use
          of man-made fertilisers, pesticides; growth regulators and livestock
          feed additives.
        </div>
      </div>
    </div>
  );
}

export default HomeScreen;
