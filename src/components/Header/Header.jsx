import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <div className="bg-gray-200 p-2  flex justify-evenly sticky">
      <h2 className="text-2xl font-semibold ms-5">Job Finder</h2>
      <div className="">
        <nav className="gap-8  flex text-center justify-center pt-2">
          <Link to="/">Home</Link>
          <Link to="/statistics">Statistics</Link>
          <Link to="/applied">Applied Jobs</Link>
          <Link to="/">Blog</Link>
        </nav>
      </div>
      <div>
        <button className="start-btn  py-3 px-5 rounded text-white  me-5">
          Star Applying
        </button>
      </div>
    </div>
  );
};

export default Header;
