import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Jobstore from '../Jobstore/Jobstore';

const Cetagory = () => {
    const jobcategorys = useLoaderData();
    const [job, setJob]=useState([]);
    
    return (
        <div className='text-center mt-16  '>
            <div className=''>
            <h1 className='text-2xl'>Job Category List</h1>
            <p>Explore thousands of job opportunities with all the information you need. Its your future</p>
            </div>
           


           <div className='flex  flex-nowrap mt-10   ms-52 px-16 '>
           {
                jobcategorys.map(jobcategory => <Jobstore
                key={jobcategory.id}
                jobcategory={jobcategory}
                ></Jobstore>)
            }
           </div>
        </div>
    );
};

export default Cetagory;
