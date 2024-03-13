import React from "react";
import { Route, Routes } from "react-router";
import CreateLecture from "../Components/CreateLecture";
import CreateAssignment from "../Components/CreateAssignment";
import CreateCourse from "../Components/CreateCourse";

const AdminRoute = () => {
  return (
    <div>
      <Routes>
        <Route path="/create/createLecture" element={<CreateLecture />}></Route>
        <Route
          path="/create/createAssignment"
          element={<CreateAssignment />}
        ></Route>
        <Route path="/create/createCourse" element={<CreateCourse />}></Route>
      </Routes>
    </div>
  );
};

export default AdminRoute;
