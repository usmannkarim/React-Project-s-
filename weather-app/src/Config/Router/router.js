import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Dashboard from "../../Views/Dashboard";
import SearchHstry from "../../Views/SearchHistory";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Dashboard />,
    },
    {
      path: "/searchHistory",
      element: <SearchHstry />,
    },
   
  ]);
  
  function Router() {
    return <RouterProvider router={router} />;
  }
  
  export default Router;