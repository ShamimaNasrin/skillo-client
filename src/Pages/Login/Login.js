import React, { useContext, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useLocation, useNavigate, Link } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider';
import { GoogleAuthProvider, GithubAuthProvider } from 'firebase/auth';
import './Login.css';


const Login = () => {
    const [error, setError] = useState('');
    const { signIn, setLoading, providerLogin, providerLoginGithub } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();

    const from = location?.state?.from.pathname || '/';

    const handleSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);

        signIn(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                form.reset();
                setError('');

                navigate(from, { replace: true });
            })
            .catch(error => {
                console.error(error);
                setError(error.message);
            })
            .finally(() => {
                setLoading(false);
            })

    }

    //creating googleProvider & handle login with google
    const googleProvider = new GoogleAuthProvider();
    const handleGoogleSignIn = () => {
        providerLogin(googleProvider)
            .then(result => {
                const user = result.user;
                console.log(user);
            })
            .catch(error => console.error(error))
    }

    //creating GithubAuthProvider
    const githubProvider = new GithubAuthProvider();
    const handleGitHubSignIn = () => {
        providerLoginGithub(githubProvider)
            .then(result => {
                const user = result.user;
                console.log(user);
            })
            .catch(error => console.error(error))
    }


    return (
        <div className=''>
            <div className='mx-auto my-5 p-5 container-login rounded-4'>
                <h1>Welcome back</h1>
                <Form onSubmit={handleSubmit}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control name="email" type="email" placeholder="Enter email" required />

                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control name="password" type="password" placeholder="Password" required />
                    </Form.Group>

                    <Button className='btn-pro w-50 d-block mx-auto' variant="primary" type="submit">
                        Login
                    </Button>
                    <Button onClick={handleGoogleSignIn} className='w-50 d-block mx-auto my-2' variant="outline-primary">Google Login</Button>
                    <Button onClick={handleGitHubSignIn} className='w-50 d-block mx-auto my-2' variant="outline-secondary">Github Login</Button>
                    <Form.Text className="text-danger d-block">
                        {error}
                    </Form.Text>
                    <Form.Text className='d-block my-4'>
                        No account? <Link to='/register'>Register</Link>
                    </Form.Text>

                </Form>
            </div>
        </div>
    );
};

export default Login;