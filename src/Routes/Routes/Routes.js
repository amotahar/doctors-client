import { createBrowserRouter } from "react-router-dom"
import Main from "../../Layout/Main"
import Home from "../../Pages/Home/Home/Home/Home";
import Login from "../../Pages/Login/Login";
import Appointment from "../../Pages/Home/Appointment/Appointment/Appointment";
import Contact from "../../Pages/Home/Contact/Contact";
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
      path: '/appointment',
      element: <Appointment></Appointment>
    },
    {
      path: '/contact',
      element: <Contact></Contact>
    },
  ]
}
])

export default router;