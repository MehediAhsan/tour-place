import { createBrowserRouter } from "react-router-dom";
import About from "../components/About/About";
import Blog from "../components/Blog/Blog";
import Booking from "../components/Booking/Booking";
import Checkout from "../components/Checkout/Checkout";
import ContactUs from "../components/ContactUs/ContactUs";
import Home from "../components/Home/Home";
import Hotels from "../components/Hotels/Hotels";
import Login from "../components/Login/Login/Login";
import Register from "../components/Login/Register/Register";
import Main from "../layout/Main";
import PrivateRoute from "./PrivateRoute/PrivateRoute";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                loader: () => fetch('https://tour-place-server.vercel.app/places'),
                element: <Home></Home>
            },
            {
                path: '/booking/:id',
                loader: ({params}) => fetch(`https://tour-place-server.vercel.app/booking/${params.id}`),
                element: <Booking></Booking>
            },
            {
                path: '/hotels/:name',
                loader: ({params}) => fetch(`https://tour-place-server.vercel.app/hotels/${params.name}`),
                element: <Hotels></Hotels>
            },
            {
                path: '/hotel/:id',
                loader: ({params}) => fetch(`https://tour-place-server.vercel.app/hotel/${params.id}`),
                element: <Checkout></Checkout>
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            },
            {
                path: '/about',
                element: <About></About>
            },
            {
                path: '/contact',
                element: <ContactUs></ContactUs>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            }
        ]
    }
])