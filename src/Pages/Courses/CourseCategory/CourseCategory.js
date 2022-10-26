import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CoursesSection from '../CoursesSection/CoursesSection';
import SideCourseBar from '../SideCourseBar/SideCourseBar';
import './CourseCategory.css';

const CourseCategory = () => {
    const allCourses = useLoaderData();
    return (
        <div>
            <div className='container-fluid py-5 mx-2'>
                <div className="row g-2 d-flex justify-content-center">
                    <div className="col-12 col-sm-12 col-lg-3 side-course-bar">
                        <SideCourseBar></SideCourseBar>
                    </div>
                    <div className="col-6 col-sm-12 col-lg-9 course-m-container">

                        <div className='course-card container'>
                            {
                                allCourses.map(courses => <CoursesSection
                                    key={courses._id}
                                    courses={courses}></CoursesSection>)
                            }
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default CourseCategory;