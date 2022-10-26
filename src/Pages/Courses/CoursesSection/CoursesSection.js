import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { FaStar } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import './CoursesSection.css';

const CoursesSection = ({ courses }) => {
    const { _id, title, rating, instructor, image_url } = courses;
    console.log(courses);
    return (
        <div className='card-m'>
            <Card className='border border-0 shadow' style={{ width: '20rem', height: '400px' }}>
                <Card.Img className='card-img' variant="top" src={image_url} />
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <p className='text-secondary mb-0'>{instructor?.name}</p>
                    <div className='mt-1 mb-2 d-flex justify-content-start align-items-center '>
                        <span>{rating?.number}</span>
                        <FaStar className='text-warning me-2'></FaStar>
                        <span>({rating?.votes})</span>
                    </div>
                    <Link to="/coursedetails">
                        <Button className='view-btn'>View Details</Button>
                    </Link>
                </Card.Body>
            </Card>
        </div>
    );
};

export default CoursesSection;