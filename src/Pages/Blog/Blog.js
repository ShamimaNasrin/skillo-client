import React from 'react';
import Card from 'react-bootstrap/Card';
import './Blog.css';

const Blog = () => {
    return (
        <div className='mx-auto text-center'>
            <h1>Blog</h1>

            <div className='card-conatiner p-5'>
                
                    <div className="">
                        <Card className='card-blog p-2'>
                            <Card.Body>
                                <Card.Title className='text-start'>Q1: what is cors?</Card.Title>
                                
                                <Card.Text className='text-start'>
                                Ans: CORS stands for Cross-Origin Resource Sharing. It allows us to relax the security applied to an API. This is done by bypassing the Access-Control-Allow-Origin headers, which specify which origins can access the API. In other words, CORS is a browser security feature that restricts cross-origin HTTP requests with other servers and specifies which domains access your resources.
                                </Card.Text>
                                
                            </Card.Body>
                        </Card>
                    </div>
                    <div className="">
                    <Card className='card-blog p-2'>
                            <Card.Body>
                                <Card.Title className='text-start'>Q2: Why are you using firebase? What other options do you have to implement authentication?</Card.Title>
                                
                                <Card.Text className='text-start'> 
                                Ans: Firebase Authentication aims to make building secure authentication systems easy, while improving the sign-in and onboarding experience for end users. It provides an end-to-end identity solution, supporting email and password accounts, phone auth, and Google, Twitter, Facebook, and GitHub login, and more. <br />
                                Some alternatives authentication to firebase authentication are: AuthO, Keycloak, Okta, MongoDB.
                                </Card.Text>
                                
                            </Card.Body>
                        </Card>
                    </div>
                    <div className="">
                    <Card className='card-blog p-2'>
                            <Card.Body>
                                <Card.Title className='text-start'>Q3: How does the private route work?</Card.Title>
                                
                                <Card.Text className='text-start'> 
                                Ans: The private route component is similar to the public route, the only change is that redirect URL and authenticates the condition. If the user is not authenticated he will be redirected to the login page and the user can only access the authenticated routes If he is authenticated (Logged in).
                                </Card.Text>
                                
                            </Card.Body>
                        </Card>
                    </div>
                    <div className="">
                    <Card className='card-blog p-2'>
                            <Card.Body>
                                <Card.Title className='text-start'>Q4:  What is Node? How does Node work?</Card.Title>
                                
                                <Card.Text className='text-start'> 
                                Ans: Node: Node.js is an open-source backend javascript runtime environment. It is a used as backend service where javascript works on the server-side of the application. This way javascript is used on both frontend and backend. <br />
                                Working procedure: Node.js accepts the request from the clients and sends the response, while working with the request node.js handles them with a single thread. To operate I/O operations or requests node.js use the concept of threads.
                                </Card.Text>
                                
                            </Card.Body>
                        </Card>
                    </div>
                

            </div>
        </div>
    );
};

export default Blog;