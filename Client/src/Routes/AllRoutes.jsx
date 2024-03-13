import React from "react";
import { Route, Routes } from "react-router";
import Lectures from "../Pages/Lectures";
import Assignments from "../Pages/Assignments";
import Discussions from "../Pages/Discussions";
import Messages from "../Pages/Messages";
import Courses from "../Pages/Courses";
import AdminCreate from "../Pages/Admin/AdminCreate";
import Signin from "../Pages/Signin";
import SignUp from "../Pages/SignUp";

const AllRoutes = () => {
  return (
    <div className="min-h-[80vh] ">
      <Routes>
        <Route path="/" element={<Lectures />}></Route>
        <Route path="/assignments" element={<Assignments />}></Route>
        <Route path="/discussions" element={<Discussions />}></Route>
        <Route path="/messages" element={<Messages />}></Route>
        <Route path="/courses" element={<Courses />}></Route>
        <Route path="/create" element={<AdminCreate />}></Route>
        <Route path="/signin" element={<Signin />}></Route>
        <Route path="/signup" element={<SignUp/>}></Route>
      </Routes>
    </div>
  );
};

export default AllRoutes;
