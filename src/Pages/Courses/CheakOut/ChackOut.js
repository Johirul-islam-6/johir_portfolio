import React, { useEffect, useState } from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import CourseCard from '../allCourse/CourseCard';

const Cheakout = () => {
    // const singelCourse = useLoaderData()
    const [courseInfo, setCourseInfo] = useState();

    // useEffect(() => {
    //     fetch(`https://web-technology-server-site.vercel.app/course/${params.id}`
    //         .then(res => res.json())
    //         .then(data => setCourseInfo(data))
    // }, [])

    console.log(courseInfo)


    const navigat = useNavigate()

    const successfull1 = () => {
        alert('"You are success full add Best offer .Thenk you"');
        // alert("You are success full add Best offer .Thenk you")
        navigat('/')
    }
    const successfull2 = () => {
        alert("You are success full add Best offer .Thenk you")
        navigat('/')
    }
    const successfull3 = () => {
        alert("You are success full add Best offer .Thenk you")
        navigat('/')
    }
    return (
        <div className=''>
            <section className="py-20 dark:bg-gray-800 dark:text-gray-100 ">
                <div className="container px-5 lg:px-20 mx-auto ">
                    <div className="max-w-2xl mx-auto mb-16 text-center">
                        <span className="font-bold tracking-wider uppercase dark:text-violet-400 text-3xl">Course Pricing</span>
                        <h2 className="text-4xl font-bold lg:text-5xl">Choose your best Offer</h2>
                    </div>
                    <div className="flex flex-wrap items-stretch -mx-4">
                        <div className="flex w-full mb-8 sm:px-4 md:w-1/2 lg:w-1/3 lg:mb-0">
                            <div className="flex flex-col p-6 space-y-6 rounded shadow sm:p-8 dark:bg-gray-900">
                                <div className="space-y-2">
                                    <h4 className="text-2xl font-bold">Beginner</h4>
                                    <span className="text-6xl font-bold">Free</span>
                                </div>
                                <p className="mt-3 leading-relaxed dark:text-gray-400">Wow this Fantastic This course Free but you Access for 5 videos</p>
                                <ul className="flex-1 mb-6 dark:text-gray-400">
                                    <li className="flex mb-2 space-x-2">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="flex-shrink-0 w-6 h-6 dark:text-violet-400">
                                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                                        </svg>
                                        <span>5 video</span>
                                    </li>
                                    <li className="flex mb-2 space-x-2">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="flex-shrink-0 w-6 h-6 dark:text-violet-400">
                                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                                        </svg>
                                        <span>1 assignment</span>
                                    </li>
                                    <li className="flex mb-2 space-x-2">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="flex-shrink-0 w-6 h-6 dark:text-violet-400">
                                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                                        </svg>
                                        <span>2 quize</span>
                                    </li>
                                </ul>
                                <button onClick={successfull1} type="button" className="inline-block px-5 py-3 font-semibold tracking-wider text-center rounded dark:bg-violet-400 dark:text-gray-900">Get Started</button>
                            </div>
                        </div>
                        <div className="flex w-full mb-8 sm:px-4 md:w-1/2 lg:w-1/3 lg:mb-0">
                            <div className="flex flex-col p-6 space-y-6 rounded shadow sm:p-8 dark:bg-slate-700 dark:text-gray-900">
                                <div className="space-y-2">
                                    <h4 className="text-2xl font-bold text-white">Pro</h4>
                                    <span className="text-6xl font-bold text-white">৳5000
                                        <span className="text-sm tracking-wide text-white">/month</span>
                                    </span>
                                </div>
                                <p className="leading-relaxed text-white">
                                    I know that doing the middle things in Course .Easy to learn</p>
                                <ul className="flex-1 space-y-2 text-white">
                                    <li className="flex items-center space-x-2">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="flex-shrink-0 w-6 h-6">
                                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                                        </svg>
                                        <span>110 videos</span>
                                    </li>
                                    <li className="flex items-center space-x-2">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="flex-shrink-0 w-6 h-6">
                                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                                        </svg>
                                        <span>50 quiz</span>
                                    </li>
                                    <li className="flex items-center space-x-2">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="flex-shrink-0 w-6 h-6">
                                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                                        </svg>
                                        <span>11 assignment</span>
                                    </li>
                                    <li className="flex items-center space-x-2 ">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="flex-shrink-0 w-6 h-6">
                                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                                        </svg>
                                        <span>Job placement</span>
                                    </li>
                                </ul>
                                <a onClick={successfull2} rel="noopener noreferrer" href="#" className="inline-block w-full px-5 py-3 font-bold tracking-wider text-center rounded dark:bg-gray-800 dark:text-violet-400">Get Started</a>
                            </div>
                        </div>
                        <div className="w-full mb-8 sm:px-4 md:w-1/2 lg:w-1/3 lg:mb-0">
                            <div className="p-6 space-y-6 rounded shadow sm:p-8 dark:bg-gray-900">
                                <div className="space-y-2">
                                    <h4 className="text-2xl font-bold">Professional</h4>
                                    <span className="text-6xl font-bold">৳10000
                                        <span className="text-sm tracking-wide">/month</span>
                                    </span>
                                </div>
                                <p className="leading-relaxed dark:text-gray-400">Full Courses You can learn absolutely everything by doing this </p>
                                <ul className="space-y-2 dark:text-gray-400">
                                    <li className="flex items-start space-x-2">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="flex-shrink-0 w-6 h-6 dark:text-violet-400">
                                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                                        </svg>
                                        <span>250 Videos</span>
                                    </li>
                                    <li className="flex items-start space-x-2">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="flex-shrink-0 w-6 h-6 dark:text-violet-400">
                                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                                        </svg>
                                        <span>200 Quiz</span>
                                    </li>
                                    <li className="flex items-start space-x-2">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="flex-shrink-0 w-6 h-6 dark:text-violet-400">
                                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                                        </svg>
                                        <span>25 Assignment</span>
                                    </li>
                                    <li className="flex items-start space-x-2">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="flex-shrink-0 w-6 h-6 dark:text-violet-400">
                                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                                        </svg>
                                        <span>Easy To Learn</span>
                                    </li>
                                    <li className="flex items-start space-x-2">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="flex-shrink-0 w-6 h-6 dark:text-violet-400">
                                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                                        </svg>
                                        <span>Job placement</span>
                                    </li>
                                </ul>
                                <a onClick={successfull3} rel="noopener noreferrer" href="#" className="inline-block w-full px-5 py-3 font-semibold tracking-wider text-center rounded dark:bg-violet-400 dark:text-gray-900">Get Started</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Cheakout;