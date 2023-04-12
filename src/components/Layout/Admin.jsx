import React from 'react';
import Header from '../Header/Header';
import { Outlet } from 'react-router-dom';
import './Admin.css'

import Featured from '../Featured/Featureds';
import Footer from '../Footer/Footer';



const Admin = () => {
    return (
        <div className='main'>
            <div className='header'><Header></Header></div>
            <Outlet></Outlet>
            <div className='footer'> <Footer></Footer></div>
        </div>
    );
};

export default Admin;