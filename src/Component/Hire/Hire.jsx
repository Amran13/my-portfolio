import React from 'react';
import { Link } from 'react-scroll';


const Hire = () => {
    return (
        <div className='lg:h-60 text-white bg-zinc-800 rounded-2xl lg:my-14 my-6 grid place-items-center py-14'>
            <h2 className='lg:text-3xl text-lg font-bold uppercase'>Let me get you a beutiful Website</h2>
            <Link to='contact' spy={true} smooth={true} className='text-white font-medium hover:text-rose-500 lg:mx-6 cursor-pointer'>
                <button className='btn lg:w-32 btn-sm lg:btn-md mt-4 lg:mt-0 rounded-full bg-rose-500 hover:bg-zinc-900 hover:outline hover:text-rose-500'>Hire me</button>
            </Link>
        </div>
    );
};

export default Hire; 