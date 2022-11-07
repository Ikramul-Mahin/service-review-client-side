import { createBrowserRouter } from "react-router-dom";
import Home from "../component/Home/Home";
import Main from "../component/Main/Main";


export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            }
        ]
    }
])