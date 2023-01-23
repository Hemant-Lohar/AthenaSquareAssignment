import React from "react";

const Heading = (text) => {
  return (
    <>
      <div className=" flex flex-col items-center w-full text-center py-8 md:py-28">
        <div className="w-96 md:w-1/2 px-4">
          <h1 className="text-black text-[2.5rem] md:text-5xl font-bold">Double the hires, half the effort</h1>
          <p className="text-gray-600 text-lg my-4">
            Open conversations and nurture relationships at scale and be the first
            choice when your ideal candidate is ready to explore.
          </p>
          <button className="border-2 border-white bg-gray-100 hover:bg-white hover:border-black px-4 py-2 text-lg rounded-lg my-4">View Kula Outreach</button>
        </div>
      </div>
    </>
  );
};

export default Heading;
