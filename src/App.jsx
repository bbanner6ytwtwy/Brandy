import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import L2 from "./pages/L2";
import Poems from "./pages/Poems";
import Soon from "./pages/Soon";

const router = createBrowserRouter([
  { path: '/', element: <Home /> },
  { path:'/home'},
  { path: '/l2', element: <L2 /> },
  { path: '/soon', element: <Soon /> },
  { path: '/poems', element: <Poems /> },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
