import React from "react";
import ReactDOM from 'react-dom/client'

import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Admin from './components/Layout/Admin';
import Statistics from './components/Statistics/Statistics';
import ApliedJob from './components/Apliedjob/ApliedJob';
import Cetagory from "./components/Cetagory/Cetagory";
import Featured from "./components/Featured/Featureds";






  const router = createBrowserRouter([
    {
      path: "/",
      element: <Admin></Admin>,
      children: [
        {
          path: 'statistics',
          element: <Statistics></Statistics>
        },
      
        {
          path: 'apliedJob',
          element: <ApliedJob></ApliedJob>
        },
        {
          path: '/',
          element: <Cetagory></Cetagory>,
          loader: () => fetch('jobcategorys.json')
        },                    
  
        {
          path: "/",
          element: <Featured></Featured>,
          
        },



      ]
    },
  



]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);