import React, { useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import "remixicon/fonts/remixicon.css";

function App() {
  let [showContent, setShowContent] = useState(false);
  useGSAP(() => {
    const tl = gsap.timeline();
    tl.to(".vi-mask-group", {
      rotate: 10,
      duration: 2,
      ease: "Power4.easeInOut",
      transformOrigin: "50% 50%",
    }).to(".vi-mask-group", {
      scale: 10,
      delay: -1.8,
      duration: 2,
      ease: "Expo.easeInOut",
      transformOrigin: "50% 50%",
      opacity: 0,
      onUpdate: function () {
        if (this.progress() > 0.9) {
          document.querySelector(".svg").remove();
          setShowContent(true);
          this.kill();
        }
      },
    });
  });
  useGSAP(() => {
    const main = document.querySelector(".main");
    main?.addEventListener("mousemove", (e) => {
      const xMove = (e.clientX / window.innerWidth - 0.5) * 40;
      const yMove = (e.clientY / window.innerHeight - 0.5) * 40;
      gsap.to(".main .text", { x: `${xMove * 0.4}%` });
      gsap.to(".sky", { x: xMove });
      gsap.to(".bg", { x: xMove * 1.7 });
    });
  }, [showContent]);
  return (
    <>
      <div className="svg flex items-center justify-center fixed top-0 left-0 z-[100] w-full h-full h-screen overflow-hidden bg-[#000]">
        <svg viewBox="0 0 800 600" preserveAspectRatio="xMidYMid slice">
          <defs>
            <mask id="viMask">
              <rect width="100%" height="100%" fill="black" />
              <g className="vi-mask-group">
                <text
                  x="50%"
                  y="50%"
                  fontSize="250"
                  textAnchor="middle"
                  fill="white"
                  dominantBaseline="middle"
                  fontFamily="Arial Black"
                >
                  VI
                </text>
              </g>
            </mask>
          </defs>
          <image
            href="./bg.png"
            width="100%"
            height="100%"
            preserveAspectRatio="xMidYMid slice"
            mask="url(#viMask)"
          />
          "
        </svg>
      </div>
      {showContent && (
        <div className="main w-full">
          <div className="landing w-full h-screen bg-black">
            <div className="navbar absolute top-0 left-0 z-[10] w-full py-10 px-10 ">
              <div className="logo flex gap-5">
                <div className="lines flex flex-col gap-[5px]">
                  <div className="lines w-13 h-2 bg-white"></div>
                  <div className="lines w-8 h-2 bg-white"></div>
                  <div className="lines w-5 h-2 bg-white"></div>
                </div>
                <h3 className="text-3xl text-white -mt-[8px] leading-none">
                  Rockstar
                </h3>
              </div>
            </div>

            <div className="imagesdiv relative w-full h-screen overflow-hidden">
              <img
                className="sky absolute scale-[1.3] top-0 left-0 w-full h-full object-cover"
                src="./sky.png"
                alt=""
              />
              <img
                className="bg absolute scale-[1.1] top-0 left-0 w-full h-full object-cover"
                src="./bg.png"
                alt=""
              />
              <div className="text text-white flex flex-col gap-2 absolute top-5 left-1/2 -translate-x-1/2 ">
                <h1 className="text-[8rem] leading-none -ml-40">grand</h1>
                <h1 className="text-[8rem] leading-none ml-5">theft</h1>
                <h1 className="text-[8rem] leading-none -ml-40">auto</h1>
              </div>
              <img
                className="character absolute -bottom-[55%] left-1/2 -translate-x-1/2 scale-[0.8]"
                src="./girlbg.png"
                alt=""
              />
            </div>
            <div className="btmbr absolute bottom-0 left-0 w-full py-15 px-10 bg-gradient-to-t from-black to-transparent text-white">
              <div className="flex gap-4 items-center">
                <i className="ri-arrow-down-line text-4xl"></i>
                <h3 className="font-[Helvitica_Now_Display] text-xl">
                  Scroll down
                </h3>
              </div>
              <img
                className=" absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[55px]"
                src="./ps5.png"
                alt=""
              />
            </div>
          </div>
          <div className="w-full h-screen flex items-center justify-center bg-black">
            <div className="cntnr w-full h-[80%] flex text-white">
              <div className="limg relative w-1/2 h-full">
                <img
                  className="absolute  scale-[1] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                  src="./imag.png "
                  alt=""
                />
              </div>
              <div className="rg w-[30%] py-5">
                <h1 className="text-6xl">Still Running</h1>
                <h1 className="text-6xl">not hunting</h1>
                <p className="mt-10 text-xl font-[Helvotoca_Now_Display]">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris consequat.
                </p>
                <p className="mt-3 text-xl font-[Helvotoca_Now_Display]">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt
                </p>
                <p className="mt-10 text-xl font-[Helvotoca_Now_Display]">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris consequat.
                </p>
                <button className="px-10 py-10 bg-yellow-500 text-4xl text-black mt-10">
                  Download Now
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default App;
