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
                loader: () => fetch(`http://localhost:5000/courses-info`)
        
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
                loader: ({ params }) => fetch(`http://localhost:5000/courses-info/${params.courseid}`)
            },
            {
                path: '/checkout',
                element: <Checkout></Checkout>
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