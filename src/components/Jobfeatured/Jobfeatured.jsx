import React from 'react';

const Jobfeatured = ({featured}) => {
    const {id, company_logo, job_title, company_name, location} =featured;
    return (
        <div >
            <p>{id}</p>
            <img src={company_logo} alt="" />
             <h1>{job_title}</h1>
            <h2>{company_name}</h2>
            <p>{location}</p>
            <button>{fulltime_or_parttime}</button>
          
        </div>
    );
};

export default Jobfeatured;