import React from 'react';
import Header from '../Header/Header';
import { Outlet } from 'react-router-dom';

import Featured from '../Featured/Featureds';



const Admin = () => {
    return (
        <div>
           
            <Header></Header>
          
            <Outlet></Outlet>
            <Featured></Featured>
        </div>
    );
};

export default Admin;