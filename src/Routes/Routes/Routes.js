import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main";
import Blog from "../../Pages/Blog/Blog";
import Checkout from "../../Pages/Checkout/Checkout";
import CourseCategory from "../../Pages/Courses/CourseCategory/CourseCategory";
import CourseDetails from "../../Pages/Courses/CourseDetails/CourseDetails";
import Faq from "../../Pages/Faq/Faq";
import Home from "../../Pages/Home/Home";

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
                element: <CourseCategory></CourseCategory>
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
                path: '/coursedetails',
                element: <CourseDetails></CourseDetails>
            },
            {
                path: '/checkout',
                element: <Checkout></Checkout>
            },
        ]
    },

    {
        path: '*', element: <h5>page not found: 404</h5>
    }
])