import React from "react";
import "./JobCart.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee, faLocationDot,faDollar } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

const JobCartDesign = ({ jobCartDe }) => {
    const navigate=useNavigate();
  const {
    id,
    company_logo,
    job_title,
    company_name,
    location,
    fulltime_or_parttime,
    remote_or_onsite,
    salary,
  } = jobCartDe;

  return (
    <div className=" jobCartDesign">
      <div className=" imageSection">
        <div className="imageDiv ">
          <img src={company_logo} alt="" />
        </div>

        <div className="job-Info-Section">
          <h3 className="text-2xl">{job_title}</h3>
          <p>{company_name}</p>
          <div className="flex flex-nowrap ga p-2 mt-2 mb-3 ">
            <button className="bg-white100  py-1 px-3 rounded text-violet-950 border-2">
              {remote_or_onsite}
            </button>
            <button className="bg-white-100  py-1 px-3 rounded text-violet-950 border-2">
              {fulltime_or_parttime}
            </button>
          </div>
          <div className="address-info">
            <p>
              <FontAwesomeIcon
                icon={faLocationDot}
                style={{ color: "grey", paddingRight: "8px" }}
              />
              {location}
            </p>
            <p><FontAwesomeIcon
                icon={faDollar}
                style={{ color: "grey", paddingRight: "8px" }}
              />{salary}</p>
          </div>
        </div>
      </div>
      <div className="btn-details">
        <button
          onClick={()=>navigate(`../details/${id}`)}
          className=" py-2 px-4 rounded text-white btn"
        >
          View Details
        </button>
      </div>
    </div>
  );
};

export default JobCartDesign;
