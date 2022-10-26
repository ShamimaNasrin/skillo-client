import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { FaUserFriends } from 'react-icons/fa';
import './CourseDetails.css';

const CourseDetails = () => {
    const course = useLoaderData();
    const { title, intro_text, image_url, total_student, quiz, course_duration, description, features, instructor } = course;
    //console.log(course);
    return (
        <div className='container my-5'>
            {/* header section */}
            <section className='d-flex flex-column-reverse flex-md-column-reverse flex-sm-column-reverse flex-lg-row justify-content-evenly align-items-center px-3'>
                <div className='py-2 w-50'>
                    <h1>{title}</h1>
                    <p>{intro_text}</p>
                </div>
                <div className='d-flex justify-content-center align-items-center w-50'>
                    <img className='details-img' src={image_url} alt="logo" />
                </div>
            </section>
            <div className='side-course-bar px-5 py-3 my-5 d-flex justify-content-evenly align-items-center'>
                <p className='align-middle fw-bolder '><FaUserFriends className='react-icon'></FaUserFriends> {total_student}</p>

                <p className='align-middle fw-bolder '> {course_duration}</p>
                <p className='align-middle fw-bolder '> {quiz}</p>

            </div>

            <div className=' px-5 py-2 my-5'>
                <h2>Description</h2>
                <p>{description}</p>
            </div>

            <div className='px-5 py-2 my-5'>
                <h2>This Course includes:</h2>
                <p>Language: {features.language}</p>
                <p>Level: {features.level}</p>
                <p>Support: {features.support}</p>
                <p>Access: {features.access}</p>
            </div>



        </div>
    );
};

export default CourseDetails;