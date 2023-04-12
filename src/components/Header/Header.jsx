import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <div className="bg-gray-200 p-2">
      <div className="hub ">
        <h2 className="text-2xl font-semibold ">EmployNet</h2>
        <nav className="gap-8  flex text-center">
          <Link to="/" >Home</Link>
          <Link to="/statistics">Statistics</Link>
          <Link to="/applied">Applied Jobs</Link>
          <Link to="/blog">Blog</Link>
        </nav>
        <div>
          {" "}
          <button className="bg-violet-500  py-3 px-5 rounded text-white">
            Star Applying
          </button>
        </div>
      </div>

      
    </div>
  );
};

export default Header;
