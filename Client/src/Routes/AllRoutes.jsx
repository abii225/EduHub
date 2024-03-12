import React from "react";
import { Route, Routes } from "react-router";
import Lectures from "../Pages/Lectures";
import Assignments from "../Pages/Assignments";
import Discussions from "../Pages/Discussions";
import Messages from "../Pages/Messages";
import Courses from "../Pages/Courses";

const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Lectures />}></Route>
        <Route path="/assignments" element={<Assignments />}></Route>
        <Route path="/discussions" element={<Discussions />}></Route>
        <Route path="/messages" element={<Messages />}></Route>
        <Route path="/courses" element={<Courses />}></Route>
      </Routes>
    </div>
  );
};

export default AllRoutes;
