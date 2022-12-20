import React from 'react';
import { MdOutlineDesignServices } from "react-icons/md";
import {  SiSpeedtest } from "react-icons/si";
import { FaCode } from "react-icons/fa";

const Service = () => {
    return (
        <div className='lg:h-screen text-white'>
            <h1 className='text-4xl text-center lg:mt-20 mb-16 font-bold'>Services</h1>

            <div className='flex justify-around'>
                <div className="card w-96 bg-zinc-800 shadow-xl place-items-center">
                    <MdOutlineDesignServices className='w-20 text-rose-600 h-16 mt-10'></MdOutlineDesignServices>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title font-medium text-2xl p-0 mb-1">UI Design</h2>
                        <p className='text-gray-300'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Similique iure quo atque dolor cupiditate provident minima tenetur assumenda ratione dolorem, beatae facere perspiciatis optio earum mollitia dicta distinctio iusto adipisci.</p>
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

                <div className="card w-96 bg-zinc-800 shadow-xl place-items-center">
                    
                    <FaCode className='w-16 text-rose-600 h-16 mt-10'></FaCode>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title font-medium text-2xl p-0 mb-1">Web Development</h2>
                        <p className='text-gray-300'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Similique iure quo atque dolor cupiditate provident minima tenetur assumenda ratione dolorem, beatae facere perspiciatis optio earum mollitia dicta distinctio iusto adipisci.</p>
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

                <div className="card w-96 bg-zinc-800 shadow-xl place-items-center">
                    <SiSpeedtest className='w-16 text-rose-600 h-16 mt-10'></SiSpeedtest>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title font-medium text-2xl p-0 mb-1">Performance Test</h2>
                        <p className='text-gray-300'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Similique iure quo atque dolor cupiditate provident minima tenetur assumenda ratione dolorem, beatae facere perspiciatis optio earum mollitia dicta distinctio iusto adipisci.</p>
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