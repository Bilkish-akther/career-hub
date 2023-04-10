import React from 'react';

const Jobfeatured = ({featured}) => {
    const {job_title, company_name, location} =featured;
    return (
        <div>
            <h2>this is page:{company_name}</h2>
        </div>
    );
};

export default Jobfeatured;