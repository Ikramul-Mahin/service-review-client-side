import { createBrowserRouter } from "react-router-dom";
import Blog from "../component/Blog/Blog";
import Home from "../component/Home/Home";
import Login from "../component/Login/Login";
import Main from "../component/Main/Main";
import Register from "../component/Register/Register";


export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/blog',
                element: <Blog></Blog>
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