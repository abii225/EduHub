import React from "react";

const Lectures = () => {
  //  all the lecture data
  const arr = [1, 2, 3, 4, 5, 6, 7, 8];
  return (
    <div className="font-primary flex flex-col gap-4 mt-2 p-2">
      only for students ,admin can only create a lecture via create
      {arr.map((ele) => {
        return (
          <div className="w-[80%] min-h-[50px] mx-auto bg-primary text-white rounded-md p-2 flex flex-col md:flex-row justify-between items-center cursor-pointer">
            <h1 className="text-[16px] md:text-[20px] ">
              Mock 6 IBM Maching Coding | Evaluation Recording Submission{" "}
            </h1>
            <h2 className="text-[16px] md:text-[20px] ">
              {"("} Course name {")"}
            </h2>
          </div>
        );
      })}
    </div>
  );
};

export default Lectures;
