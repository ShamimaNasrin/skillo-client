import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const SideCourseBar = () => {
    const [courseName, setCourseName] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/courses')
            .then(res => res.json())
            .then(data => setCourseName(data));
    }, [])

    return (
        <div className='container'>
            <div>
                <h3>Programming languages:</h3>
                {

                    courseName.map(course => <Link
                        to={`/coursedetails/${course._id}`}>
                        <p>{course.name}</p></Link>)

                }
            </div>
        </div>
    );
};

export default SideCourseBar;