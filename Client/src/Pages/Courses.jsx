import React from "react";

const Courses = () => {
  return (
    <div className="w-[90%] mx-auto mt-2 mb-2 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
      <div className=" h-[300px] bg-primary rounded-md flex flex-row items-center justify-center cursor-pointer">
        <h1 className="text-white font-bold uppercase font-primary text-5xl text-center">
          React 101
        </h1>
      </div>

      {/*  hey lets map all the courses here */}
      <div className=" h-[300px] bg-primary rounded-md flex flex-row items-center justify-center">
        <h1 className="text-white font-bold uppercase font-primary text-5xl text-center">
          React 101
        </h1>
      </div>
      <div className=" h-[300px] bg-primary rounded-md flex flex-row items-center justify-center">
        <h1 className="text-white font-bold uppercase font-primary text-5xl text-center">
          React 101
        </h1>
      </div>
      <div className=" h-[300px] bg-primary rounded-md flex flex-row items-center justify-center">
        <h1 className="text-white font-bold uppercase font-primary text-5xl text-center">
          React 101
        </h1>
      </div>
      <div className=" h-[300px] bg-primary rounded-md flex flex-row items-center justify-center">
        <h1 className="text-white font-bold uppercase font-primary text-5xl text-center">
          React 101
        </h1>
      </div>
      <div className=" h-[300px] bg-primary rounded-md flex flex-row items-center justify-center">
        <h1 className="text-white font-bold uppercase font-primary text-5xl text-center">
          React 101
        </h1>
      </div>
      <div className=" h-[300px] bg-primary rounded-md flex flex-row items-center justify-center">
        <h1 className="text-white font-bold uppercase font-primary text-5xl text-center">
          React 101
        </h1>
      </div>
    </div>
  );
};

export default Courses;
