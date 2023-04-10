import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Jobfeatured from '../Jobfeatured/Jobfeatured';

const Featured = () => {
    
    const featureds = useLoaderData();
    const [data, setData] = useState([]);
    return (
        <div>
            {
                featureds.map(featured => <Jobfeatured
                key={featured.id}
                featured={featured}
                
                ></Jobfeatured>)
            }
        </div>
    );
};

export default Featured;
