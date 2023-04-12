import React from 'react';
import Header from '../Header/Header';
import { Outlet } from 'react-router-dom';

import Featured from '../Featured/Featureds';
import Footer from '../Footer/footer';



const Admin = () => {
    return (
        <div>
           
            <Header></Header>
          
            <Outlet></Outlet>
            <Featured></Featured>
            <Footer></Footer>
        </div>
    );
};

export default Admin;