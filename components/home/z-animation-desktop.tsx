"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import { useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

export default function ZAnimationDesktop() {
  const containerRef = useRef<HTMLDivElement>(null);
  const blanketRef = useRef<HTMLDivElement>(null);
  const firstRef = useRef<HTMLDivElement>(null);
  const secondRef = useRef<HTMLDivElement>(null);
  const thirdRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      // Ensure refs are available
      if (
        !firstRef.current ||
        !secondRef.current ||
        !thirdRef.current ||
        !blanketRef.current
      ) {
        return;
      }

      const items = [firstRef.current, secondRef.current, thirdRef.current];

      // 1. PINNING THE 3 COLUMNS
      items.forEach((item) => {
        if (!item) return;

        ScrollTrigger.create({
          trigger: item,
          start: "top 10%",
          endTrigger: blanketRef.current,
          end: "bottom bottom",
          pin: true,
          pinSpacing: false,
        });
      });

      // 2. THE BLANKET ANIMATION
      if (blanketRef.current) {
        gsap.from(blanketRef.current, {
          y: 100,
          ease: "none",
          scrollTrigger: {
            trigger: blanketRef.current,
            start: "top bottom",
            end: "top top",
            scrub: true,
          },
        });
      }
    },
    { scope: containerRef },
  );

  return (
    <div ref={containerRef} className="relative">
      <div className="flex flex-row px-10 justify-between items-start relative z-0">
        {/* Red: Starts low */}
        <div
          ref={secondRef}
          className="relative h-[500px] mt-[100vh] w-[28%] overflow-hidden flex justify-start"
        >
          <div className="relative w-[50%] h-[350px]">
            <Image
              src="https://i.pinimg.com/736x/97/da/a0/97daa081bff94a6b032e1538b0407f12.jpg"
              alt="Red Image"
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* Blue: Starts high */}
        <div
          ref={firstRef}
          className="relative h-[750px] mt-[10vh] w-[36%] overflow-hidden flex flex-col"
        >
          <div className="relative w-full h-[600px]">
            <Image
              src="https://i.pinimg.com/1200x/b1/2a/4b/b12a4bd6a36f48c14157e595992d1a46.jpg"
              alt="Blue Image"
              fill
              className="object-cover"
            />
          </div>
          <p className="p-4 text-xl uppercase border-t-2 border-white">
            Full-stack development with modern tools – React, Next.js, and React
            Native to bring your ideas to life.
          </p>
        </div>

        {/* Green: Starts lowest */}
        <div
          ref={thirdRef}
          className="h-[600px] mt-[200vh] relative w-[28%] rounded-xl flex justify-end items-end"
        >
          <div className="relative w-[50%] h-[350px]">
            <Image
              src="https://i.pinimg.com/736x/55/c4/d0/55c4d0f567c9f938bf719d6390975a89.jpg"
              alt="Green Image"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>

      <div className="h-[50vh]"></div>

      <div
        ref={blanketRef}
        className="relative z-10 w-full min-h-screen bg-white"
      >
        <div className="text-center py-10">
          <h2 className="uppercase font-bold text-sm">
            My <br /> Philosophy
          </h2>
          <p className="text-center text-[62px] font-light leading-[100%] mt-10">
            Clean code, performant apps,
            <br />
            seamless experiences.
          </p>
          {/* Code-themed visual section - Full screen */}
          <div className="w-full h-screen flex items-center justify-center px-4 md:px-10">
            <div className="bg-[#1e1e1e] rounded-2xl overflow-hidden shadow-2xl w-full max-w-5xl">
              <div className="flex items-center gap-2 px-6 py-4 bg-[#323232]">
                <div className="w-4 h-4 rounded-full bg-[#ff5f56]" />
                <div className="w-4 h-4 rounded-full bg-[#ffbd2e]" />
                <div className="w-4 h-4 rounded-full bg-[#27ca40]" />
                <span className="ml-4 text-base text-gray-400 font-mono">
                  portfolio.tsx
                </span>
              </div>
              <div className="p-8 md:p-12 font-mono text-lg md:text-2xl lg:text-3xl text-left">
                <pre className="text-gray-300 leading-relaxed">
                  <code>
                    <span className="text-[#569cd6]">const</span>{" "}
                    <span className="text-[#4fc1ff]">developer</span>{" "}
                    <span className="text-white">=</span> {"{"}
                    {"\n"}
                    {"  "}
                    <span className="text-[#9cdcfe]">name</span>:{" "}
                    <span className="text-[#ce9178]">
                      "Lenish Yesmali Magar"
                    </span>
                    ,{"\n"}
                    {"  "}
                    <span className="text-[#9cdcfe]">role</span>:{" "}
                    <span className="text-[#ce9178]">
                      "Full-Stack Developer"
                    </span>
                    ,{"\n"}
                    {"  "}
                    <span className="text-[#9cdcfe]">skills</span>: [{"\n"}
                    {"    "}
                    <span className="text-[#ce9178]">"React"</span>,{" "}
                    <span className="text-[#ce9178]">"Next.js"</span>,{" "}
                    <span className="text-[#ce9178]">"TypeScript"</span>,{"\n"}
                    {"    "}
                    <span className="text-[#ce9178]">"Node.js"</span>,{" "}
                    <span className="text-[#ce9178]">"React Native"</span>,{" "}
                    <span className="text-[#ce9178]">"Expo"</span>
                    {"\n"}
                    {"  "}],
                    {"\n"}
                    {"  "}
                    <span className="text-[#9cdcfe]">passion</span>:{" "}
                    <span className="text-[#ce9178]">
                      "Building exceptional experiences"
                    </span>
                    ,{"\n"}
                    {"  "}
                    <span className="text-[#9cdcfe]">available</span>:{" "}
                    <span className="text-[#569cd6]">true</span>
                    {"\n"}
                    {"}"};{"\n\n"}
                    <span className="text-[#569cd6]">export default</span>{" "}
                    <span className="text-[#4fc1ff]">developer</span>;
                  </code>
                </pre>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
