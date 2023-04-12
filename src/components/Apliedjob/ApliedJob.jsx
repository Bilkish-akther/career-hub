import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Jobfeatured from '../Jobfeatured/Jobfeatured';

const Featured = () => {
    
   
    const [featureds, setFeatureds] = useState([]);


    useEffect(() => {
        fetch('./featureds.json')
        .then(res=>res.json())
        .then(data=> setFeatureds(data))

    },[]);
    return (
        <div>
           <div>
           <div className='text-center mt-10'>
            <h1 className='text-2xl'>Featured Jobs</h1>
            <p>Explore thousands of job opportunities with all the information you need. Its your future</p>

            </div>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-4 mt-5 ms-40 my-6 lg:px-6 rounded'>
                
            {
                featureds.map(featured => <Jobfeatured
                key={featured.id}
                featured={featured}
                
                ></Jobfeatured>)
            }
            </div>
            <button className="bg-violet-500  py-3 px-5 rounded text-white  ms-96 ">See More</button>
           </div>
           
        </div>
    );
};

export default Featured;
