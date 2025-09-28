import Button from "../components/Button";
import Navbar from "../components/Navbar";
import Nithlogo from "../assets/nithlogo.png";
import RadialGradient from "../components/gradient";
import Footer from "./footer";
import { useState } from "react";

function Home() {

  return (
        <div className="min-h-screen w-full relative">
  {/* Radial Gradient Background */}
  <div
    className="absolute inset-0 z-0"
    style={{
      background: "radial-gradient(125% 125% at 50% 10%, #fff 40%, #6366f1 100%)",
    }}
  />
     <div className=" min-h-screen w-screen flex flex-col justify-center items-center px-4 sm:px-6 md:px-8 sm:pt-28 md:pt-32">
      <h1 className="text-4xl sm:text-5xl md:text-6xl text-center font-bold z-10 leading-tight mx-auto">
        Online email Allotement
      </h1>
      <h2 className="text-base sm:text-lg md:text-xl text-center mt-3 font-medium z-10 mx-auto">
        one stop solution for students to get their verified NIT Hamirpur Email
        ID and access campus services{" "}
      </h2>
      <div className="flex flex-col justify-center items-center sm:flex-row gap-3 sm:gap-6 mt-8 sm:mt-10 z-10 w-full">
        <Button variant="primary"> login</Button>
        <Button variant="secondary">Sign Up</Button>
      </div>
      <div className="fixed top-0 left-0 font-medium ">
        <Navbar></Navbar>
      </div>
  
    </div>
</div>
  );
}
export default Home;
