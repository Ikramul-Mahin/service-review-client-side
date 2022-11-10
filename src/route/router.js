import { createBrowserRouter } from "react-router-dom";
import Blog from "../component/Blog/Blog";
import Home from "../component/Home/Home";
import Login from "../component/Login/Login";
import Main from "../component/Main/Main";
import Register from "../component/Register/Register";
import AddReview from "../component/Review/AddReview";
import MyReview from "../component/Review/MyReview";
import AddService from "../component/Subjects/AddService";
import AllSubjectCardDetails from "../component/Subjects/AllSubjectCardDetails";
import Subjects from "../component/Subjects/AllSubjects";
import SubjectCardDetails from "../component/Subjects/SubjectCardDetails";
import PrivateRoute from "./PrivateRoute";


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
            },
            {
                path: '/allsubjects',
                element: <Subjects></Subjects>,
                loader: () => fetch('http://localhost:5000/allsubjects')
            },
            {
                path: '/subjects/:id',
                element: <SubjectCardDetails></SubjectCardDetails>,
                loader: ({ params }) => fetch(`http://localhost:5000/subjects/${params.id}`)
            },
            {
                path: '/allsubjects/:id',
                element: <AllSubjectCardDetails></AllSubjectCardDetails>,
                loader: ({ params }) => fetch(`http://localhost:5000/allsubjects/${params.id}`)
            },
            {
                path: '/addService',
                element: <AddService></AddService>
            },
            {
                path: '/addReview',
                element: <AddReview></AddReview>
            },
            {
                path: '/myReview',
                element: <PrivateRoute><MyReview></MyReview></PrivateRoute>
            }

        ]
    }
])