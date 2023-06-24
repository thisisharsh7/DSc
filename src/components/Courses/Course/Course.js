import React from 'react';
import Header from '../../Header';
import Footer from '../../Footer';
import Card from './Card';

const Course = () => {
    return (
        <>
            <Header />

            <main>
                <section className='pb-20 flex  mx-28 gap-16 justify-between'>
                    <div className='flex flex-col gap-8 w-full'>
                        <div className='pb-8 border-b-2 border-black border-dotted w-full flex flex-col gap-2'>
                            <div className='flex justify-between font-medium items-end'>
                                <h1 className='text-2xl'>Full Stack development Course</h1>
                                <p>Become a full stack developer and launch your apps quickly</p>
                            </div>
                            <div className='flex justify-between text-gray-400'><span>Created by DecenteraSchool</span><span>Last Updated January 15, 2023</span></div>
                        </div>
                        <div className='py-4 flex flex-col gap-3'>
                            <h1 className='text-xl font-medium'>What you will learn ?</h1>
                            <div className='grid grid-cols-2'>
                                <p>Learn about React, Angular, Python and more</p>
                                <p className='place-self-end'>Learn about React, Angular, Python and more</p>
                                <p className=''>Learn about React, Angular, Python and more</p>
                                <p className='place-self-end'>Learn about React, Angular, Python and more</p>
                            </div>
                        </div>
                    </div>
                    <Card
                        price={19.9}
                        dur={20}
                        anum={5}
                        newClass="side3" />
                </section>
            </main>
            <Footer />
        </>
    )
};

export default Course;
