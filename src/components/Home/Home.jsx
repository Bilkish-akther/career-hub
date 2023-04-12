import React from 'react';
import Cetagory from '../Cetagory/Cetagory';
import Featured from '../Featured/Featureds';

const Home = () => {
    return (
        <div>
            <div className="cover">
        <div className="body">
          <h1 className="	text-7xl font-bold">
            One Step <br /> Closer To Your <br />{" "}
            <span className="text-violet-500">Dream Job</span>
          </h1>
          <p>
            Explore thousands of job opportunities with all the <br />{" "}
            information you need. Its your future. Come find it. Manage all{" "}
            <br /> your job application from start to finish.
          </p>
          <button className="bg-violet-500 mt-5 py-3 px-5 rounded text-white">
            Get Started
          </button>
        </div>

        <div className="bg_image"></div>
      </div>
            <Cetagory></Cetagory>
            <Featured></Featured>
        </div>
    );
};

export default Home;