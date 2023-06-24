import AddUser from "./components/AddUser/AddUser";
import Root from "./components/Root";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import Users from "./components/Users/Users";
import { createBrowserRouter,RouterProvider} from "react-router-dom";
import Error from "./components/Error"
function App() {
 const browserRouter=createBrowserRouter([
  {
    path:"/",
    element:<Root/>,
    errorElement:<Error/>,
    children:[{
      path:"/",
      element:<Register/>
    },
    {
      path:"/add-users",
      element:<AddUser/>
    },
    {
      path:"/users",
      element:<Users/>
    },
    {
      path:"/login",
      element:<Login/>
    },
    
 ]}
 ])
  return (
    <div>
      <RouterProvider router={browserRouter} />
    </div>
  )
}
export default App;