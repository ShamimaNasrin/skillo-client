import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const Checkout = () => {
    return (
        <div className='w-50 mx-auto my-5'>
            <div className="mx-auto text-center">
                <h3>Billing information</h3>
                <p>Complete your purchase by providing your payment details.</p>
            </div>
            <Form >

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Card details</Form.Label>
                    <Form.Control type="text" placeholder="card number" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Cardholder name</Form.Label>
                    <Form.Control type="text" placeholder="Your name" />
                </Form.Group>
                <Form.Label>Billing address</Form.Label>
                <Form.Select >
                    <option>BD</option>
                    <option>UK</option>
                    <option>USA</option>
                </Form.Select>

                <div className='d-flex justify-content-between align-items-center mt-4'>
                    <p>Total</p>
                    <p>$80.50</p>
                </div>

                <Button className='btn-pro w-25 d-block mx-auto' type="submit">
                    Pay
                </Button>
            </Form>
        </div>
    );
};

export default Checkout;