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
import JobDetails from "./components/JobDetails/JobDetails";
import Home from "./components/Home/Home";
import JobCart from "./components/JobCart/JobCart";
import ErrorPage from "./components/ErrorPage/ErrorPage";
import Blog from "./components/Blog/Blog";


  const router = createBrowserRouter([
    {
      path: "/",
      element: <Admin></Admin>,
      children: [
        {
          path: '/statistics',
          element: <Statistics></Statistics>
        },
      
        {
          path: '/applied',
          element: <JobCart></JobCart>
        },
        {
          path: '/',
          element: <Home></Home>,
          loader: () => fetch('jobcategorys.json')
        },                    

        {
          path: "details/:id",
          element: <JobDetails></JobDetails>,
          
        },
        {
          path: "/blog",
          element: <Blog></Blog>,
          
        },
        {
          path: "*",
          element: <ErrorPage></ErrorPage>,
          
        },

      ]
    },
  



]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);