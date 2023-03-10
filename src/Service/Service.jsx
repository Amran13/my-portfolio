import React from 'react';
import { MdOutlineDesignServices } from "react-icons/md";
import {  SiSpeedtest } from "react-icons/si";
import { FaCode } from "react-icons/fa";

const Service = () => {
    return (
        <div id='service' className='lg:h-screen text-white'>
            <h1 className='lg:text-4xl text-2xl text-center lg:pt-10 lg:mt-10 lg:mb-16 mt-10 mb-4 font-extrabold text-rose-500'>Services</h1>

            <div className='flex lg:flex-row flex-col lg:justify-around place-items-center'>
                <div className="card lg:w-96  bg-zinc-800 shadow-xl place-items-center mb-6">
                    <MdOutlineDesignServices className='lg:w-20 w-16 h-14 text-rose-600 lg:h-16 lg:mt-10 mt-6'></MdOutlineDesignServices>
                    <div className="card-body lg:p-8 px-6 py-4 items-center text-center">
                        <h2 className="card-title font-medium text-lg lg:text-2xl mb-1">UI Design</h2>
                        <p className='text-gray-300 lg:text-center text-justify text-sm lg:text-base'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Similique iure quo atque dolor cupiditate provident minima tenetur assumenda ratione dolorem, beatae facere perspiciatis optio earum mollitia dicta distinctio iusto adipisci.</p>
                        <div className="card-actions">
                            {/* The button to open modal */}
                            <label htmlFor="my-modal-6" className="btn btn-sm bg-rose-600 rounded-full hover:outline hover:bg-zinc-900 hover:text-rose-500 normal-case mt-1">Read More</label>

                            {/* Put this part before </body> tag */}
                            <input type="checkbox" id="my-modal-6" className="modal-toggle" />
                            <div className="modal modal-bottom sm:modal-middle">
                                <div className="modal-box bg-zinc-800">
                                    <h3 className="font-bold text-lg">Congratulations random Internet user!</h3>
                                    <p className="py-4">You've been selected for a chance to get one year of subscription to use Wikipedia for free!</p>
                                    <div className="modal-action">
                                        <label htmlFor="my-modal-6" className="btn bg-rose-600">Close</label>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="card lg:w-96 bg-zinc-800 shadow-xl place-items-center mb-6">
                    
                    <FaCode className='lg:w-16 w-14 h-14 text-rose-600 lg:h-16 lg:mt-10 mt-6'></FaCode>
                    <div className="card-body lg:p-8 px-6 py-4 items-center text-center">
                        <h2 className="card-title font-medium lg:text-2xl text-lg mb-1">Web Development</h2>
                        <p className='text-gray-300 lg:text-center text-justify text-sm lg:text-base'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Similique iure quo atque dolor cupiditate provident minima tenetur assumenda ratione dolorem, beatae facere perspiciatis optio earum mollitia dicta distinctio iusto adipisci.</p>
                        <div className="card-actions">
                            {/* The button to open modal */}
                            <label htmlFor="my-modal-6" className="btn btn-sm bg-rose-600 rounded-full hover:outline hover:bg-zinc-900 hover:text-rose-500 normal-case mt-1">Read More</label>

                            {/* Put this part before </body> tag */}
                            <input type="checkbox" id="my-modal-6" className="modal-toggle" />
                            <div className="modal modal-bottom sm:modal-middle">
                                <div className="modal-box bg-zinc-800">
                                    <h3 className="font-bold text-lg">Congratulations random Internet user!</h3>
                                    <p className="py-4">You've been selected for a chance to get one year of subscription to use Wikipedia for free!</p>
                                    <div className="modal-action">
                                        <label htmlFor="my-modal-6" className="btn bg-rose-600">Close</label>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="card lg:w-96 bg-zinc-800 shadow-xl place-items-center mb-4">
                    <SiSpeedtest className='lg:w-16 w-14 h-14 text-rose-600 lg:h-16 lg:mt-10 mt-6'></SiSpeedtest>
                    <div className="card-body lg:p-8 px-6 py-4 items-center text-center">
                        <h2 className="card-title font-medium lg:text-2xl text-lg p-0 mb-1">Performance Test</h2>
                        <p className='text-gray-300 lg:text-center text-justify text-sm lg:text-base'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Similique iure quo atque dolor cupiditate provident minima tenetur assumenda ratione dolorem, beatae facere perspiciatis optio earum mollitia dicta distinctio iusto adipisci.</p>
                        <div className="card-actions">
                            {/* The button to open modal */}
                            <label htmlFor="my-modal-6" className="btn btn-sm bg-rose-600 rounded-full hover:outline hover:bg-zinc-900 hover:text-rose-500 normal-case mt-1">Read More</label>

                            {/* Put this part before </body> tag */}
                            <input type="checkbox" id="my-modal-6" className="modal-toggle" />
                            <div className="modal modal-bottom sm:modal-middle">
                                <div className="modal-box bg-zinc-800">
                                    <h3 className="font-bold text-lg">Congratulations random Internet user!</h3>
                                    <p className="py-4">You've been selected for a chance to get one year of subscription to use Wikipedia for free!</p>
                                    <div className="modal-action">
                                        <label htmlFor="my-modal-6" className="btn bg-rose-600">Close</label>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                
            </div>

        </div>
    );
};

export default Service;