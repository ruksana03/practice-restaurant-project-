import {
    createBrowserRouter,
  } from "react-router-dom";
  import Main from "../Layout/Main";
  import Home from "../pages/Home/Home/Home";
  import Menu from "../pages/Menu/Menu/Menu";
  import Order from "../pages/Order/Order/Order";
  import SignUp from "../pages/SignUp/SignUp";
  import PrivateRoute from "./PrivateRoute";
  import Secret from "../pages/Shared/Secret/Secret";
  import Dashboard from "../Layout/Dashboard";
  import Cart from "../pages/Dashboard/Cart/Cart";
  import Login from "../Pages/Login/Login";
  import AllUsers from "../Pages/Dashboard/AllUsers/AllUsers";
  import AddItems from "../Pages/Dashboard/AddItems/AddItems";
  import AdminRoute from "./AdminRoute";
  import ManageItems from "../Pages/Dashboard/ManageItems/ManageItems";
  import UpdateItem from "../Pages/Dashboard/UpdateItem/UpdateItem";
  // import AdminRoute from "./AdminRoute";
  // import AdminRoute from "./AdminRoute";
  
  
  
  export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
          path: '/',
          element: <Home></Home>
        },
        {
          path: 'menu',
          element: <Menu></Menu>
        },
        {
          path: 'order/:category',
          element: <Order></Order>
        },
        {
          path: 'login',
          element: <Login></Login>
        },
        {
          path: 'signup',
          element: <SignUp></SignUp>
        },
        {
          path: 'secret',
          element: <PrivateRoute><Secret></Secret></PrivateRoute>
        }
      ]
    },
    {
      path: 'dashboard',
      element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
      children: [
        {
          path: 'cart',
          element: <Cart></Cart>
        },
  
        // admin routes
        {
          path: 'users', 
          element:<AdminRoute><AllUsers></AllUsers></AdminRoute> 
        },
        {
          path: 'manageItems', 
          element:<AdminRoute><ManageItems></ManageItems></AdminRoute> 
        },
        {
          path: 'addItems',
          element:<AdminRoute><AddItems></AddItems></AdminRoute> 
        },
        {
          path: 'updateItem/:id',
          element: <AdminRoute><UpdateItem></UpdateItem></AdminRoute>,
          loader: ({params}) => fetch(`http://localhost:5000/menu/${params.id}`)
        },
  
      ]
    }
  ]);