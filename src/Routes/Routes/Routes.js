import { createBrowserRouter } from "react-router-dom"
import Main from "../../Layout/Main"
import Home from "../../Pages/Home/Home/Home/Home";
import Login from "../../Pages/Login/Login";
import SignUp from "../../Pages/SignUp/SignUp";
import Appointment from "../../Pages/Home/Appointment/Appointment/Appointment";
import Contact from "../../Pages/Home/Contact/Contact";
import Dashboard from "../../Pages/Dashboard/Dashboard/Dashboard";
 const router = createBrowserRouter([
{
  path: '/',
  element: <Main></Main>,
  children: [
    {
      path: '/',
      element: <Home></Home>
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
      path: '/appointment',
      element: <Appointment></Appointment>
    },
    {
      path: '/contact',
      element: <Contact></Contact>
    },
  ]
},
{
  path: '/dashboard',
  element: <Dashboard></Dashboard>
},

])

export default router;