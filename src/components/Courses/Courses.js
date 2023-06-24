import React from 'react'
import Header from '../Header'
import { Link } from 'react-router-dom'

export default function Courses() {
    return (
        <div className='flex  justify-center'>
            <div className='max-w-[1440px]'>
                <Header />
                <main>
                    <section className='px-10 flex flex-col gap-24 pb-20'>
                        <div className=''>
                            <div className='flex flex-col text-center p-8'>
                                <h1 className='text-[2.5rem] font-bold'>A broad selection of courses</h1>
                                <p className='text-xl '>Long videos with all the information you need to get started in the world of web3 and blockchain</p>
                            </div>
                            <div className='p-8 grid grid-cols-3 grid-flow-row gap-16 py-16 '>
                                <div className=' flex flex-col justify-start w-96'>
                                    <div className='px-8'>
                                        <img src="/images/clip.png" alt="" className='w-full' />
                                    </div>
                                    <div className='flex flex-col text-white gap-4 p-8 bg-black'>
                                        <p className='text-xl'>Full stack development courses</p>
                                        <p className='leading-tight'>Become a full stack developer and launch your apps quickly</p>
                                        <button className='bg-yellow-400 text-black py-2 px-3 font-medium shadow-md'><Link to="/course" >Start Course</Link></button>
                                    </div>
                                </div>
                                <div className=' flex flex-col justify-start w-96'>
                                    <div className='px-8'>
                                        <img src="/images/clip.png" alt="" className='w-full' />
                                    </div>
                                    <div className='flex flex-col text-white gap-4 p-8 bg-black'>
                                        <p className='text-xl'>Full stack development courses</p>
                                        <p className='leading-tight'>Become a full stack developer and launch your apps quickly</p>
                                        <button className='bg-yellow-400 text-black py-2 px-3 font-medium shadow-md'>Start Course</button>
                                    </div>
                                </div>
                                <div className=' flex flex-col justify-start w-96'>
                                    <div className='px-8'>
                                        <img src="/images/clip.png" alt="" className='w-full' />
                                    </div>
                                    <div className='flex flex-col text-white gap-4 p-8 bg-black'>
                                        <p className='text-xl'>Full stack development courses</p>
                                        <p className='leading-tight'>Become a full stack developer and launch your apps quickly</p>
                                        <button className='bg-yellow-400 text-black py-2 px-3 font-medium shadow-md'>Start Course</button>
                                    </div>
                                </div>
                                <div className=' flex flex-col justify-start w-96'>
                                    <div className='px-8'>
                                        <img src="/images/clip.png" alt="" className='w-full' />
                                    </div>
                                    <div className='flex flex-col text-white gap-4 p-8 bg-black'>
                                        <p className='text-xl'>Full stack development courses</p>
                                        <p className='leading-tight'>Become a full stack developer and launch your apps quickly</p>
                                        <button className='bg-yellow-400 text-black py-2 px-3 font-medium shadow-md'>Start Course</button>
                                    </div>
                                </div>
                                <div className=' flex flex-col justify-start w-96'>
                                    <div className='px-8'>
                                        <img src="/images/clip.png" alt="" className='w-full' />
                                    </div>
                                    <div className='flex flex-col text-white gap-4 p-8 bg-black'>
                                        <p className='text-xl'>Full stack development courses</p>
                                        <p className='leading-tight'>Become a full stack developer and launch your apps quickly</p>
                                        <button className='bg-yellow-400 text-black py-2 px-3 font-medium shadow-md'>Start Course</button>
                                    </div>
                                </div>
                                <div className=' flex flex-col justify-start w-96'>
                                    <div className='px-8'>
                                        <img src="/images/clip.png" alt="" className='w-full' />
                                    </div>
                                    <div className='flex flex-col text-white gap-4 p-8 bg-black'>
                                        <p className='text-xl'>Full stack development courses</p>
                                        <p className='leading-tight'>Become a full stack developer and launch your apps quickly</p>
                                        <button className='bg-yellow-400 text-black py-2 px-3 font-medium shadow-md'>Start Course</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </main>
            </div>
        </div>
    )
}
