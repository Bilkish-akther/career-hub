import React from "react";
import "./JobStore.css";

const Jobstore = ({ jobcategory }) => {
  const { category_logo, category_name, job_available } = jobcategory;
  return (
    <div className="category-cart-container ">
      <div className=" bg-slate-200 px-6 pt-4 img-container">
        <img
          className="flex flex-nowrap justify-center img"
          src={category_logo}
          alt="image do not show"
        />
      </div>
      <div className="category-info">
        <h4>{category_name}</h4>
        <p>{job_available}</p>
      </div>
    </div>
  );
};

export default Jobstore;
