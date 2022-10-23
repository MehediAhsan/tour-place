import { createBrowserRouter } from "react-router-dom";
import Booking from "../components/Booking/Booking";
import Home from "../components/Home/Home";
import Hotels from "../components/Hotels/Hotels";
import Main from "../layout/Main";

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
            }
        ]
    }
])