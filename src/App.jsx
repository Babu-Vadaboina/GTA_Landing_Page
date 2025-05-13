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
                className=" absolute top-0 left-0 w-full h-full object-cover"
                src="./sky.png"
                alt=""
              />
              <img
                className="absolute top-0 left-0 w-full h-full object-cover"
                src="./bg.png"
                alt=""
              />
              <img
                className="absolute -bottom-[55%] left-1/2 -translate-x-1/2 scale-[0.8]"
                src="./girlbg.png"
                alt=""
              />
            </div>
            <div className="btmbr absolute bottom-0 left-0 w-full py-15 px-10 bg-gradient-to-t from-black to-transparent text-white">
              <div className="flex gap-4 items-center">
                <i class="ri-arrow-down-line text-4xl"></i>
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
        </div>
      )}
    </>
  );
}

export default App;
