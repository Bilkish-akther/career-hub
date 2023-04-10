import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (

        <div className='bg-gray-200 '>

            <div className='hub '>
                <h2 className='text-2xl font-semibold '>EmployNet</h2>
                <nav className='gap-8  flex'>

                    <Link to="/">Statistics</Link>
                    <Link to="/aplied">Applied Jobs</Link>
                    <Link to="/blog">Blog</Link>

                </nav>
                <div> <button className="bg-violet-500  py-3 px-5 rounded text-white">Star Applying</button></div>
            </div>



            <div className='cover'>

                <div className='body'>
                    <h1 className='	text-7xl font-bold'>One Step <br /> Closer To Your <br /> <span className='text-violet-500'>Dream Job</span></h1>
                    <p>Explore thousands of job opportunities with all the <br /> information you need. Its your future. Come find it. Manage all <br /> your job application from start to finish.</p>
                    <button className="bg-violet-500 mt-5 py-3 px-5 rounded text-white">Get Started</button>
                </div>

                <div
                    className="bg_image"
                >
                   
                </div>

            </div>
        </div>
    );
};

export default Header;