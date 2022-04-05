import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
    let itactive = {color:'rgb(236 72 153)', textDecoration:'none'}
    let notactive = {color:'#212529', textDecoration:'none'}
    
    return (
        <div className=' d-flex justify-content-center align-items-center px-0 px-md-3 py-3 bg-light text-uppercase '>
                <div className=' mx-2 mx-md-4 fw-bold '>
                    <NavLink style={({ isActive }) => isActive? itactive : notactive}  to='/'> Home</NavLink>
                </div>
                <div className=" mx-1 mx-md-4 fw-bold ">
                    <NavLink style={({ isActive }) => isActive? itactive : notactive}  to='/reviews'>Reviews</NavLink>
                </div>
                <div className=" mx-1 mx-md-4 fw-bold ">
                    <NavLink style={({ isActive }) => isActive? itactive : notactive}  to='/dashboard'> Dashboad</NavLink>
                </div>
                <div className=" mx-1 mx-md-4 fw-bold ">
                    <NavLink style={({ isActive }) => isActive? itactive : notactive}  to='/blogs'> Blogs</NavLink>
                </div>
                <div className=" mx-1 mx-md-4 fw-bold ">
                    <NavLink style={({ isActive }) => isActive? itactive : notactive}  to='/about'>About</NavLink>
                </div>
        </div>
    );
};

export default Header;