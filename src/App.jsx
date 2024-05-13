import Navbar from "./components/Navbar/Navbar"
import "./layout.scss"
import HomePage from "./routes/homePage/homePage"   
import ListPage from "./routes/listPage/listPage"  
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
function App() 

{
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
       <HomePage />
      ),
    },
    {
      path: "/list",
      element: <ListPage/>,
    },
  ]);
  return (
    <RouterProvider router={router}/>  
  )
}

export default App