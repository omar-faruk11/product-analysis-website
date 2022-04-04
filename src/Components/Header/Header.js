import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
    const textDecortion = { textDecoration: 'none',padding:'5px' }
    return (
        <nav className=' d-flex justify-content-center align-items-center p-3 bg-light'>
                <div className=' mx-4 fw-bold'>
                    <NavLink className={({ isActive }) => isActive ? 'text-danger' : 'text-dark'} style={textDecortion} to='/'> Home</NavLink>
                </div>
                <div className=" mx-4 fw-bold">
                    <NavLink className={({ isActive }) => isActive ? 'text-danger' : 'text-dark'} style={textDecortion} to='/reviews'>Reviews</NavLink>
                </div>
                <div className=" mx-4 fw-bold">
                    <NavLink className={({ isActive }) => isActive ? 'text-danger' : 'text-dark'} style={textDecortion} to='/dashboard'> Dashboad</NavLink>
                </div>
                <div className=" mx-4 fw-bold">
                    <NavLink className={({ isActive }) => isActive ? 'text-danger' : 'text-dark'} style={textDecortion} to='/blogs'> Blogs</NavLink>
                </div>
                <div className=" mx-4 fw-bold">
                    <NavLink className={({ isActive }) => isActive ? 'text-danger' : 'text-dark'} style={textDecortion} to='/about'>About</NavLink>
                </div>
        </nav>
    );
};

export default Header;