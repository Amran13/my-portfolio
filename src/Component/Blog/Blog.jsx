import React from 'react';

const Blog = () => {
    return (
        <div className='lg:h-screen text-white'>
            <h2 className='text-4xl font-bold text-center mt-20 mb-10'>Blogs</h2>
            <div className='grid grid-cols-3 gap-4'>
                <div className="card w-96 bg-zinc-800 shadow-xl">
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
                <div className="card w-96 bg-zinc-800 shadow-xl">
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
                <div className="card w-96 bg-zinc-800 shadow-xl">
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