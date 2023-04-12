import React, { useState, useEffect } from "react";
import { getJobCart } from "../Utilities/Utilities";
import { faHourglass1 } from "@fortawesome/free-solid-svg-icons";
import JobCartDesign from "../../assets/Category Image/JobCartDesign/JobCartDesign";
import "./JobCart.css";
import NojobDesign from "../NoJobDesign/NojobDesign";

const JobCart = () => {
  let filterType = "all";
  const [jobs, setJobs] = useState([]);
  const [job, setJob] = useState([]);
  const [filterJob, setFilterJob] = useState([]);
  useEffect(() => {
    fetch("/featureds.json")
      .then((res) => res.json())
      .then((data) => setJobs(data));
  }, []);

  useEffect(() => {
    const storedCart = getJobCart();
    const savedCart = [];
    for (const id in storedCart) {
      const addedJob = jobs.find((j) => j.id == id);
      if (addedJob) {
        savedCart.push(addedJob);
      }
    }
    setJob(savedCart);
   
        setFilterJob(savedCart);
  }, [jobs]);



  const filterHandler = (value) => {
    filterType = value;
    let tempStore = [];
    if (filterType == "Remote") {
      tempStore = job.filter((j) => j.remote_or_onsite == filterType);
    }else{
        tempStore = job.filter((j) => j.fulltime_or_parttime == filterType);
    }

    setFilterJob(tempStore);
  };

  return (
    <div className=" grid">
      <div className="filter-Button">
        <button
          onClick={() => filterHandler("Remote")}
          className="bg-gray-100 py-2 px-4 me-4 rounded-md"
        >
          Remote
        </button>
        <button
          onClick={() => filterHandler("Full-time")}
          className="bg-gray-100 py-2 px-4 me-4 rounded-md"
        >
          Full-Time
        </button>
      </div>

      {filterJob.length!=0?filterJob.map((jobCartDe) => (
        <div className="my-10">
          <JobCartDesign jobCartDe={jobCartDe}></JobCartDesign>
        </div>
      )):<NojobDesign></NojobDesign>}
    </div>
  );
};

export default JobCart;
