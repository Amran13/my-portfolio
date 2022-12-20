import React from 'react';
import headerImage from './../Image/8d30a0ab-0469-4e9f-abf0-b29b3f06c22a-removebg.png';
import navbarAvatar from './../Image/IMG_20220416_205320 (2).jpg';

const Header = () => {
    return (
        <div className='h-screen'>
            <div className="navbar">
                <div className="navbar-start">
                    <div className="dropdown dropdown-end">
                        <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                            <div className="w-10 rounded-full">
                                <img src={navbarAvatar} />
                            </div>
                        </label>
                    </div>
                    <a className="btn btn-ghost normal-case text-xl text-white uppercase">Portfo<span className='text-rose-500'>lio</span></a>
                </div>

                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <a className='text-white font-medium hover:text-rose-500 lg:mx-6 cursor-pointer'>Home</a>
                        <a className='text-white font-medium hover:text-rose-500 lg:mx-6 cursor-pointer'>About Me</a>
                        <a className='text-white font-medium hover:text-rose-500 lg:mx-6 cursor-pointer'>Services</a>
                        <a className='text-white font-medium hover:text-rose-500 lg:mx-6 cursor-pointer'>Projects</a>
                        <a className='text-white font-medium hover:text-rose-500 lg:mx-6 cursor-pointer'>Blogs</a>
                        <a className='text-white font-medium hover:text-rose-500 lg:mx-6 cursor-pointer'>Contact</a>


                        {/* <li><a className='text-white font-medium hover:text-rose-500 mx-2'>About Me</a></li>
                        <li><a className='text-white font-medium hover:text-rose-500 mx-2'>Services</a></li>
                        <li><a className='text-white font-medium hover:text-rose-500 mx-2'>Projects</a></li>
                        <li><a className='text-white font-medium hover:text-rose-500 mx-2'>Contact</a></li> */}
                    </ul>
                </div>
                <div className="navbar-end">

                    <a className="btn btn-sm rounded-full text-white bg-rose-600 hover:bg-zinc-900 hover:text-rose-500 hover:outline">Download CV</a>
                </div>
            </div>
            <div className='flex justify-between place-items-center lg:mt-10'>
                <div className='lg:ml-14'>
                    <h3 className='text-xl text-white font-medium  mb-2'>UI & UX Designer</h3>
                    <h1 className='text-6xl font-bold text-white'>Hello, I'm <span className='text-rose-600'>Amran</span></h1>
                    <h3 className='text-2xl text-white font-medium mt-2'>Full-Stack React Developer</h3>
                </div>
                <div>
                    <img className='w-2/3' src={headerImage} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Header;