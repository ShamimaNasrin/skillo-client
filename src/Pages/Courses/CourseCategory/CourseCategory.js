import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CoursesSection from '../CoursesSection/CoursesSection';
import SideCourseBar from '../SideCourseBar/SideCourseBar';
import './CourseCategory.css';

const CourseCategory = () => {
    const allCourses = useLoaderData();
    return (
        <div className='w-100 pb-5'>
            <div className='container-fluid'>
                <div className="row g-2 d-flex justify-content-center">
                    <div className="col-12 col-sm-12 col-lg-3 side-course-bar pt-5">
                        <SideCourseBar></SideCourseBar>
                    </div>
                    <div className="col-6 col-sm-12 col-lg-9 course-m-container pt-5">

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