import React from 'react';
import img from '../../images/header-img.png'
import Card from 'react-bootstrap/Card';
import './home.css';

const Home = () => {
    return (
        <div>
            <section>
                <header className='d-flex flex-md-row flex-lg-row flex-sm-column flex-column justify-content-center align-items-center header-sec'>
                    <div className='width-size d-flex justify-content-center align-items-center'>
                        <img className='w-50' src={img} alt="header img" />
                    </div>
                    <div className='width-size'>
                        <div className='px-5'>
                            <h1 className='w-75 mx-auto'><span className='span-s'>Skillo </span>empowers you to innovate smarter</h1>
                            <p className='w-75 mx-auto'>Eliminate your talent gaps in digital technologies like Programming, ML, cloud, cybersecurity, and more.</p>
                        </div>
                    </div>
                </header>
            </section>

            <section>
                <h2 className='text-center mb-3'>Our Available Services:</h2>
                <div className="row g-2 container mx-auto my-4 pb-5">
                    <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
                        <div className="pb-1">
                            <div className="card card-bg">
                                <img className='card-img-h' src={`https://media.istockphoto.com/photos/programming-code-abstract-technology-background-of-software-deve-picture-id537331500?k=20&m=537331500&s=612x612&w=0&h=vnE5e_eExMtetDyYBTBoORFkxiK02o9H6KfgFwvKt4c=`} alt="..." />
                                <div className="card-body ">
                                    <h5 className="fw-bold text-center">Programming language courses</h5>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
                        <div className="pb-1">
                            <div className="card card-bg">
                                <img className='card-img-h' src={`https://wallpaperaccess.com/full/5673721.jpg`} alt="..." />
                                <div className="card-body ">
                                    <h5 className="fw-bold text-center">Front end web development courses</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
                        <div className="pb-1">
                            <div className="card card-bg">
                                <img className='card-img-h' src={`https://bs-uploads.toptal.io/blackfish-uploads/components/blog_post_page/content/cover_image_file/cover_image/1081424/0405_Building_a_Node.js-TypeScript_REST_API_Zara_Newsletter___blog-1507ad3436895bfe7cc6cf35e4efb17f.png`} alt="..." />
                                <div className="card-body ">
                                    <h5 className="fw-bold text-center">Back end web development courses</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;