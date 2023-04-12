import React from 'react';
import Header from '../Header/Header';
import { Outlet } from 'react-router-dom';

import Featured from '../Featured/Featureds';
import Footer from '../Footer/Footer';



const Admin = () => {
    return (
        <div>
            <Header></Header>
            <Outlet></Outlet>
             <Footer></Footer>
        </div>
    );
};

export default Admin;