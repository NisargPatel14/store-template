"use client";
import HomeScreen from "./components/HomeScreen";
import Navbar from "./components/Navbar";
import Lenis from "lenis";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useEffect } from "react";
import { gsap } from "gsap";
import AboutUs from "./components/AboutUs";

export default function Home() {
  useEffect(() => {
    const lenis = new Lenis();

    lenis.on("scroll", (e) => {
      console.log(e);
    });

    lenis.on("scroll", ScrollTrigger.update);

    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });

    gsap.ticker.lagSmoothing(0);
  }, []);
  return (
    <main className="inter w-full h-screen">
      <Navbar />
      <HomeScreen />
      <AboutUs />
    </main>
  );
}
