"use client"

import Link from "next/link";
import React, { useEffect, useRef } from "react";
import { Button } from "./ui/button";
import Image from "next/image";

const Hero = () => {
  const imageRef = useRef<HTMLImageElement | null>(null);

  useEffect(()=>{
    const imageElement = imageRef.current;
    const handleScroll = () => {
       if (!imageElement) return;
       
    const scrollPosition = window.scrollY;
    const scrollThreshold = 100;

    if(imageElement && scrollPosition > scrollThreshold){
      imageElement.classList.add("scrolled")
    }else{
      imageElement?.classList.remove("scrolled")
    }
    };
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)


  },[])


  return (
    <section className="pt-36 w-full pb-10 md:pt-48">
      <div className="space-y-6 text-center">
        <div className="space-y-6 mx-auto"> 
          <h1 className="text-5xl font-bold md:text-6xl lg:text-7xl xl:text-8xl bg-gradient-to-b from-gray-400 via-gray-200 to-gray-600 font-extrabold tracking-tighter text-transparent bg-clip-text pb-2 pr-2">
            Your Smartest Move <br /> Toward Career Excellence
          </h1>
          <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl">
            Unlock job success through AI-powered tools, tailored guidance, and
            expert interview prep.
          </p>
        </div>
        <div className="flex justify-center space-x-4">
          <Link href="/dashbord">
            <Button size="lg" className="px-8">
              Get Started
            </Button>
          </Link>
          <Link href="https://youtu.be/w__L-MAnu6U">
            <Button size="lg" className="px-8" variant={"outline"}>
               Demo Video
            </Button>
          </Link>
        </div>

        <div className="hero-image-wrapper mt-5 md:mt-0">
          <div ref={imageRef} className="hero-image">
            <Image 
            src={"/banner.png"}
            width={1270}
            height={710}
            alt="CoachMind AI"
            className="rounded-lg shadow-2xl border mx-auto"
            priority
            
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
