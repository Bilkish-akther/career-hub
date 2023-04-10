import React from 'react';

const Jobstore = ({ jobcategory }) => {
    const { category_logo, category_name, job_available } = jobcategory;
    return (


        <div className='text-center '>


            <div className='  mx-5  bg-slate-200 px-6 pt-4 '>
                <img className='flex flex-nowrap  justify-center' src={category_logo} alt="" />

                <div>
                    <h4>{category_name}</h4>
                    <p>{job_available}</p>
                </div>
            </div>
        </div>
    );
};

export default Jobstore;