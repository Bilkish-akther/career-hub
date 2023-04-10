import React from 'react';
import Header from '../Header/Header';
import { Outlet } from 'react-router-dom';
import Jobfeatured from '../Jobfeatured/Jobfeatured';



const Admin = () => {
    return (
        <div>
           
            <Header></Header>
    
            <Outlet></Outlet>
        </div>
    );
};

export default Admin;