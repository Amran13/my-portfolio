import React from 'react';
import { Link } from 'react-scroll';
import headerImage from './../Image/Picture2.png';
import navbarAvatar from './../Image/IMG_20220416_205320 (2).jpg';
import Typewriter from 'typewriter-effect';



const Header = () => {
    return (
        <div id='home' className='h-screen'>
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
                        <Link to='home' spy={true} smooth={true} className='text-white font-medium hover:text-rose-500 lg:mx-6 cursor-pointer'>Home</Link>
                        <Link to='about' spy={true} smooth={true} className='text-white font-medium hover:text-rose-500 lg:mx-6 cursor-pointer'>About Me</Link>
                        <Link to="service" spy={true} smooth={true} className='text-white font-medium hover:text-rose-500 lg:mx-6 cursor-pointer'>Services</Link>
                        <Link to='project' spy={true} smooth={true} className='text-white font-medium hover:text-rose-500 lg:mx-6 cursor-pointer'>Projects</Link>
                        <Link to='blog' spy={true} smooth={true} className='text-white font-medium hover:text-rose-500 lg:mx-6 cursor-pointer'>Blogs</Link>
                        <Link to='contact' spy={true} smooth={true} className='text-white font-medium hover:text-rose-500 lg:mx-6 cursor-pointer'>Contact</Link>


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
                <div className='lg:ml-20 w-3/5'>
                    <h3 className='text-xl text-white font-medium  mb-2'>UI & UX Designer</h3>

                    <div>
                        <h1 className='text-6xl font-bold text-white'>Hi! I'm <span className='text-rose-500'>
                            <Typewriter
                                options={{
                                    strings: ["Amran", "a React Developer"],
                                    autoStart: true,
                                    loop: true,
                                }}
                            />
                        </span></h1>
                    </div>
                    {/* <h3 className='text-2xl text-white font-medium mt-2'>Full-Stack React Developer</h3> */}
                </div>
                <div className='w-2/5'>
                    <img className='' src={headerImage} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Header;