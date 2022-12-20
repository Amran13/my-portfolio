import React from 'react';
import navbarAvatar from './../Image/IMG_20220416_205320 (2).jpg';

const About = () => {
    return (
        <div id='about' className='flex justify-center lg:mt-20 place-items-center lg:h-[30rem] bg-zinc-800 rounded-2xl'>
            <div className='lg:ml-20 hidden lg:block'>
            <img className='w-2/3 rounded-2xl'  src={navbarAvatar} alt="" />
            </div>
            <div className='text-white lg:mr-32'>
                <h1 className='lg:text-4xl text-xl font-bold'>About Me</h1>
                <h3 className='lg:my-4 lg:text-lg text-md font-medium'>Designer & <span className='text-rose-500'>Developer</span></h3>
                <p className='text-sm lg:text-md'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere possimus distinctio sunt doloribus sit explicabo veniam ipsum odit aliquam fuga quod architecto, temporibus, atque animi pariatur minus corporis magnam sint. Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil velit alias minus cumque cum cupiditate, error deserunt eius natus sint!</p>
                <button className='btn bg-rose-600 btn-md mt-4 rounded-full text-white hover:outline hover:bg-zinc-900 hover:text-rose-500 '>Live Projects</button>
            </div>
        </div>
    );
};

export default About;