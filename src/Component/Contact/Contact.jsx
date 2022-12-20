import React from 'react';
import { HiPaperAirplane } from "react-icons/hi2";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
const Contact = () => {
    return (
        <div className='lg:h-screen text-white'>

            <div className='flex justify-between place-items-center'>
                <div className='mb-24'>
                    <h1 className='text-4xl font-bold text-center'>Contact <span className='text-rose-500'>Me</span></h1>
                    <h2 className='text-3xl font-bold text-center my-4'>Mohammad Amran Hossain</h2>
                    <p className='text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat similique qui ab cum accusamus ea necessitatibus rem nihil ipsam. Temporibus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit ea, labore assumenda id, iste ducimus dignissimos vitae earum dolor cum voluptatibus ullam possimus mollitia aliquam perspiciatis praesentium, at molestias debitis.</p>
                    <div className='flex justify-center mt-2'>
                        <a className='inline mr-2' href='https://www.github.com/amran13' target="_blank"><AiFillGithub className='text-rose-500 text-4xl cursor-pointer'></AiFillGithub></a>
                        <a className='inline' href="https://www.linkedin.com/in/amran-hossain-98bb9a218/" target="_blank">
                            <AiFillLinkedin className='text-rose-500 text-4xl cursor-pointer'></AiFillLinkedin>
                        </a>
                    </div>

                </div>

                <div>

                    <div className="hero ">
                        <div className="hero-content flex-col">

                            <div className="card  w-[540px]  shadow-2xl bg-zinc-800">
                                <form action="">
                                    <div className="card-body">
                                        <div className="form-control">
                                            <label className="label">
                                                <span className="label-text text-white font-medium">Name</span>
                                            </label>
                                            <input type="text" required placeholder="Name" className="input rounded-3xl input-bordered bg-zinc-900 " />
                                        </div>
                                        <div className="form-control">
                                            <label className="label">
                                                <span className="label-text text-white font-medium">Email</span>
                                            </label>
                                            <input type="text" required placeholder="Email" className="input rounded-3xl input-bordered bg-zinc-900" />
                                        </div>
                                        <div className="form-control">
                                            <label className="label">
                                                <span className="label-text text-white font-medium">Description</span>
                                            </label>
                                            <textarea type="text" required placeholder="Description..." className="rounded-3xl input h-32 py-4 input-bordered bg-zinc-900" />
                                        </div>

                                        <div className="form-control mt-6">
                                            <button type='submit' className="btn bg-rose-500 rounded-full hover:outline hover:bg-zinc-800 hover:text-rose-500">Send  <HiPaperAirplane className='text-xl ml-1'></HiPaperAirplane> </button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

        </div>
    );
};

export default Contact;