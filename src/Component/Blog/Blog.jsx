import React from 'react';

const Blog = () => {
    return (
        <div id='blog' className='lg:h-screen text-white lg:block hidden'>
            <h2 className='text-4xl font-extrabold text-center lg:pt-10 lg:mb-10 mb-6 pt-8 text-rose-500'>Blogs</h2>
            <div className='grid lg:grid-cols-3 grid-col-1 gap-4'>
                <div className="card lg:w-96 bg-zinc-800 shadow-xl">
                    <figure className="px-4 pt-4">
                        <img src="https://placeimg.com/400/225/arch" alt="Shoes" className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title font-medium">Blog-1</h2>
                        <p className='text-gray-300'>If a dog chews shoes whose shoes does he choose? Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quod, id. . .</p>
                        <div className="card-actions">
                            <button className="btn btn-sm normal-case bg-rose-500 hover:outline hover:bg-zinc-900 hover:text-rose-500 rounded-full">Read more...</button>
                        </div>
                    </div>
                </div>
                <div className="card lg:w-96 bg-zinc-800 shadow-xl">
                    <figure className="px-4 pt-4">
                        <img src="https://placeimg.com/400/225/arch" alt="Shoes" className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title font-medium">Blog-2</h2>
                        <p className='text-gray-300'>If a dog chews shoes whose shoes does he choose? Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quod, id. . .</p>
                        <div className="card-actions">
                            <button className="btn btn-sm normal-case bg-rose-500 hover:outline hover:bg-zinc-900 hover:text-rose-500 rounded-full">Read more...</button>
                        </div>
                    </div>
                </div>
                <div className="card lg:w-96 bg-zinc-800 shadow-xl">
                    <figure className="px-4 pt-4">
                        <img src="https://placeimg.com/400/225/arch" alt="Shoes" className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title font-medium">Blog-3</h2>
                        <p className='text-gray-300'>If a dog chews shoes whose shoes does he choose? Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quod, id. . .</p>
                        <div className="card-actions">
                            <button className="btn btn-sm normal-case bg-rose-500 hover:outline hover:bg-zinc-900 hover:text-rose-500 rounded-full">Read more...</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blog;