import React from 'react'

export default function Why() {
    return (
        <div>
            <div className='p-32 px-10 flex flex-col gap-16'>
                <h1 className='font-extrabold text-3xl '>
                    Why DecentraSchool ?
                </h1>
                <p className=''>
                    Welcome to DecentraSchool Learning Platform, the premier destination for Web 3 education. Our platform is designed to help you learn about the latest technologies and treLearn from industry experts and talented persons, smart contracts, and decentralized applications.
                    Our courses are taught by industry experts and cover a wide range of topics, from the basics of Web 3 to advanced development techniques. Whether you're a beginner or an experienced developer, we have something for you.
                </p>
                <div className='flex gap-20 justify-around '>
                    <div className="w-min flex flex-col gap-5 items-center text-center p-5  bg-blue-300" >
                        <div className='flex gap-3 items-center w-max '>
                            <img src="/images/mLearn.png" alt="" />
                            <h3 className='font-bold'>Learn</h3>
                        </div>
                        <p>Learn from industry experts and talented persons</p>
                    </div>
                    <div className='w-min flex flex-col gap-5 items-center text-center p-5  bg-blue-300'>
                        <div className='flex gap-3 items-center w-max '>
                            <img src="/images/mEarn.png" alt="" />
                            <h3>Learn</h3>
                        </div>
                        <p>Learn from industry experts and talented persons</p>
                    </div>
                    <div className='w-min flex flex-col gap-5 items-center text-center p-5  bg-blue-300'>
                        <div className='flex gap-3 items-center w-max '>
                            <img src="/images/mExcel.png" alt="" />
                            <h3>Learn</h3>
                        </div>
                        <p>Learn from industry experts and talented persons</p>
                    </div>

                </div>



            </div>
        </div>
    )
}
