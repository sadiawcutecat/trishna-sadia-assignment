import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../Pages/Home/Home";
import Blog from "../Pages/Blog/Blog";
import Recipe from "../Pages/Recipe/Recipe";

import Login from "../Pages/Login/Login";
import Error from "../Pages/Error/Error";
import SignUp from "../Pages/Login/SignUp";
// import { useContext } from "react";
// import AuthProvider from "../Provider/AuthProvider";

// const {user} = useContext(AuthProvider);

const router = createBrowserRouter([


    {
        path:'/',
        element :<Main></Main>,
        errorElement:<Error></Error>,
        children :[
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'/login',
                element:<Login></Login>
            },
            {
                path:'/signUp',
                element:<SignUp></SignUp>
            },
            {
                path:'/blog',
                element:<Blog></Blog>
            },
            {
                path:'/chefData/:id',
                element:<Recipe></Recipe>,
                loader:({params}) => fetch(`https://chef-recipe-hunter-serve.vercel.app/chefData/${params.id}`)
            }
            // {
            //     path:'*',
            //     element:<Error></Error>
            // }
        ]
    }

])

export default router;