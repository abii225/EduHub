import { Button, Tooltip } from "antd";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const navLinks = [
  {
    id: 1,
    url: "/",
    title: "Lectures",
  },
  // { id: 2, url: "/assignments", title: "Assignments" },
  // { id: 3, url: "/discussions", title: "Discussions" },
  // { id: 4, url: "/messages", title: "Messages" },
  { id: 5, url: "/courses", title: "Courses" },
  { id: 6, url: "/create", title: "Create" },
];
const Navbar = () => {
  const [open, setOpen] = useState(false);

  let url = window.location.pathname.split("/");
  url = url[1];
  console.log(url);
  const [path, setPath] = useState("" || url);
  useEffect(() => {
    let newPath = window.location.pathname.split("/");
    newPath = newPath[1];
    setPath(newPath);
    console.log(newPath);
  }, [path]);
  return (
    <div className="w-[100%] min-h-[40px] h-[100%] mt-0 mx-auto  bg-primary flex flex-col md:flex-row justify-evenly items-center p-2">
      <div className="w-[90%] md:w-[100%] mx-auto  flex flex-row justify-between items-center">
        <Link to="/">
          <img
            className="w-[180px]"
            src="https://i.postimg.cc/k53X3jW2/Edu-hub.png"
            alt=""
          />
        </Link>
        <div className="md:hidden" onClick={(e) => setOpen((prev) => !prev)}>
          <Button />
        </div>
      </div>

      {/*  nav links */}
      <div
        style={{ display: open ? "none" : "inline-flex" }}
        className=" h-[100%]  hidden flex-col   md:flex-row md:gap-5 items-center"
      >
        {navLinks.map((ele) => {
          return (
            <Link style={{ display: "block" }} key={ele.id} to={ele.url}>
              {/* <Tooltip title="search"> */}
              <Button type="primary" shape="default">
                {ele.title}
              </Button>
              {/* </Tooltip> */}
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Navbar;
