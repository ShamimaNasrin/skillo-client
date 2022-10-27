import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main";
import Blog from "../../Pages/Blog/Blog";
import Checkout from "../../Pages/Checkout/Checkout";
import CourseCategory from "../../Pages/Courses/CourseCategory/CourseCategory";
import CourseDetails from "../../Pages/Courses/CourseDetails/CourseDetails";
import Faq from "../../Pages/Faq/Faq";
import Home from "../../Pages/Home/Home";
import Login from "../../Pages/Login/Login";
import Register from "../../Pages/Register/Register";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/courses',
                element: <CourseCategory></CourseCategory>,
                loader: () => fetch(`https://skillo-server-api.vercel.app/courses-info`)
        
            },
            {
                path: '/faqq',
                element: <Faq></Faq>
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            },
            {
                path: '/coursedetails/:courseid',
                element: <CourseDetails></CourseDetails>,
                loader: ({ params }) => fetch(`https://skillo-server-api.vercel.app/courses-info/${params.courseid}`)
            },
            {
                
                path: '/checkout/:courseid',
                element: <PrivateRoute><Checkout></Checkout></PrivateRoute>,
                loader: ({ params }) => fetch(`https://skillo-server-api.vercel.app/courses-info/${params.courseid}`)
            },
            
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
        ]
    },

    {
        path: '*', element: <h5>page not found: 404</h5>
    }
])