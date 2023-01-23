import React, { useState } from "react";

const Section = ({ texts }) => {
  const [videdata, setVideodata] = useState("");
  const [scrollPosition, setScrollPosition] = useState(0);

  const getScroll = (event) => {
    setScrollPosition(event.currentTarget.scrollTop);
    console.log(scrollPosition);
  };

  return (
    <>
      <div className="hidden md:block video-section h-[36rem] px-8 md:px-32 py-8">
        <div className="relative flex md:flex-row flex-col justify-between items-center">
          <div
            onScroll={getScroll}
            className="z-10 absolute h-[32rem] scroll-smooth no-scrollbar md:overflow-scroll"
          >
            {texts.map((curElem, index) => {
              return (
                <div key={index} className="headings md:w-1/3 py-12">
                  <div className="pt-2">
                    <span className=" font-bold text-transparent text-2xl bg-clip-text bg-gradient-to-r from-pink-600 to-purple-600">
                      {curElem.heading}
                    </span>
                  </div>
                  <h2 className="text-5xl font-bold py-4 leading-tight">
                    {curElem.subHeading}
                  </h2>
                  <p className="py-4 text-gray-600 text-lg">
                    {curElem.description}
                  </p>
                </div>
              );
            })}
          </div>
          <div
            className={
              scrollPosition < 250
                ? `flex flex-row w-[100vw] items-end justify-end`
                : ` hidden `
            }
          >
            <div className="video   md:aspect-video rounded-[3rem] ">
              <video
                className="object-cover min-w-full max-h-full bg-cover rounded-[3rem] z-10"
                autoPlay
                loop
                muted
              >
                <source src="./videos/video0.mp4" type="video/mp4" />
              </video>
            </div>
          </div>
          <div
            className={
              scrollPosition > 250 && scrollPosition < 950
                ? `flex flex-row w-[100vw] items-end justify-end`
                : ` hidden `
            }
          >
            <div className="video   md:aspect-video rounded-[3rem] ">
              <video
                className="object-cover min-w-full max-h-full bg-cover rounded-[3rem] z-10"
                autoPlay
                loop
                muted
              >
                <source src="./videos/video1.mp4" type="video/mp4" />
              </video>
            </div>
          </div>
          <div
            className={
              scrollPosition > 950
                ? `flex flex-row w-[100vw] items-end justify-end`
                : ` hidden `
            }
          >
            <div className="video   md:aspect-video rounded-[3rem] ">
              <video
                className="object-cover min-w-full max-h-full bg-cover rounded-[3rem] z-10"
                autoPlay
                loop
                muted
              >
                <source src="./videos/video2.mp4" type="video/mp4" />
              </video>
            </div>
          </div>
          {/* </div> */}
        </div>
      </div>

      <div
        onScroll={getScroll}
        className="md:hidden video-section h-[36rem] scroll-smooth no-scrollbar md:overflow-scroll px-8 md:px-32 my-16 "
      >
        {texts.map((curElem, index) => {
          return (
            <div
              key={index}
              className="flex md:flex-row flex-col justify-between items-center"
            >
              <div className="md:w-1/3 h-[36rem] scroll-smooth no-scrollbar md:overflow-scroll ">
                <div className="headings py-8">
                  <div className="div pt-2">
                    <span className=" font-bold text-transparent text-2xl bg-clip-text bg-gradient-to-r from-pink-600 to-purple-600">
                      {curElem.heading}
                    </span>
                  </div>
                  <h2 className="text-5xl font-bold py-4 leading-tight">
                    {curElem.subHeading}
                  </h2>
                  <p className="py-4 text-gray-600 text-lg">
                    {curElem.description}
                  </p>
                </div>
              </div>
              <div className="video md:aspect-video rounded-[3rem] my-16">
                <video
                  className="object-cover min-w-full max-h-full bg-cover rounded-[3rem] z-10"
                  autoPlay
                  loop
                  muted
                >
                  <source
                    src={`./videos/video${index.toString()}.mp4`}
                    type="video/mp4"
                  />
                </video>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Section;
