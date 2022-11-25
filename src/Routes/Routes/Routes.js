import Main from "../../Layout/Main";
import Blog from "../../Pages/Blog/Blog";
import Dashboard from "../../Pages/Dashboard/Dashboard/Dashboard";
import Categories from "../../Pages/Home/Categories/Categories";
import Products from "../../Pages/Home/Categories/Products/Products";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Login/Login";
import DisplayError from "../../Pages/Shared/DisplayError/DisplayError";
import SignUp from "../../Pages/SignUp/SignUp";

const { createBrowserRouter } = require("react-router-dom");


const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        errorElement: <DisplayError></DisplayError>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/categories/',
                element: <Categories></Categories>
            },
            {
                path: '/categories/:_id',
                element: <Products></Products>,
                loader: ({ params }) => fetch(`http://localhost:5000/products/${params._id}`)

            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signup',
                element: <SignUp></SignUp>
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            }
        ]
    },
    {
        path: '/dashboard',
        element: <Dashboard></Dashboard>
    }
])

export default router;