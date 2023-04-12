import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./JobDetails.css";
import { addToDb } from "../Utilities/Utilities";
//2 import for toast
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {  faLocationDot,faDollar,faEnvelope, faPhone,faPenToSquare } from "@fortawesome/free-solid-svg-icons";

const JobDetails = () => {
  const { id } = useParams();
  console.log(id);
  const [job, setJob] = useState({});
  useEffect(() => {
    fetch("../featureds.json")
      .then((res) => res.json())
      .then((data) => {
        for (let index = 0; index < data.length; index++) {
          if (data[index]["id"] == id) {
            setJob(data[index]);
          }
        }
      });
  }, []);
  const {
    company_logo,
    job_title,
    company_name,
    location,
    fulltime_or_parttime,
    remote_or_onsite,
    educational_requirements,
    job_description,
    experiences,
    job_responsibility,
    contact_information_Phone,
    contact_information_Email,
    phone,
    email,
    salary,
  } = job;
  return (
    <div>
      <div className="title-container text-center">
        <h1 className="titlesJob text-3xl">Job Details</h1>
      </div>
      <div className="main-container gap-0 rounded -ms-24 mt-11 me-6 px-20 py-12">

        <div className="balDesign">
         <h1 className="" ><span className=" text-2xl ">job_description: </span> {job_description}</h1>
          <p> <span className=" text-2xl"> job_responsibility: </span> {job_responsibility}</p>
          <h1><span className=" text-2xl "> educational_requirements:</span> {educational_requirements}</h1>
          <p> <span className=" text-2xl "> experiences:   </span>{experiences}</p>
          
        </div>

        <div className="jobDetails   bg-gray-200  me-40 text-start  w-60 h-96 px-4 rounded">
            <p className=" text-xl titlesJob gap-4 mb-4 ">Job Details   <hr/></p>
          
            <p className="flex"><p><FontAwesomeIcon
            icon={faDollar}style={{ color: "grey", paddingRight: "8px" }} /></p>{salary}</p>

            <p className="flex"> <p><FontAwesomeIcon
            icon={faPenToSquare}style={{ color: "grey", paddingRight: "8px" }} /></p>   { job_title}</p>

            <h1 className=" text-xl mb-4 mt-2 ">Contact Information </h1>
            <hr />
            <h2 className="flex"> <p><FontAwesomeIcon
            icon={faPhone}style={{ color: "grey", paddingRight: "8px" }} /></p>{contact_information_Phone}</h2>
            <h2 className="flex"><p><FontAwesomeIcon
            icon= {faEnvelope}style={{ color: "grey", paddingRight: "8px" }} /></p>{contact_information_Email}</h2>
            <h1 className="flex"> <p><FontAwesomeIcon
            icon={faLocationDot}style={{ color: "grey", paddingRight: "8px" }} /></p> Address: {location}</h1>

            
            <button onClick={()=>addToDb(id)} className="bg-violet-950 ms-6 mb-7 mt-6   py-5 px-5 me-0 rounded items-center text-white">
            Apply Now
          </button>
        </div>
    
      </div>
      <ToastContainer/>
    </div>
  );
};

export default JobDetails;
