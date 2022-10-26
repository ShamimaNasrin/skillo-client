import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

const SideCourseBar = () => {
    const [courseName, setCourseName] = useState([]);

    useEffect( () => {
        fetch('http://localhost:5000/courses')
        .then(res => res.json())
        .then(data => setCourseName(data));
    }, [])

    return (
        <div className='container'>
            <div>
                <h3>Programming languages:</h3>
                {
                    courseName.map(course => <p>{course.name}</p>)
                }
            </div>
        </div>
    );
};

export default SideCourseBar;