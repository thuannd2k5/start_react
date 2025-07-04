import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/login",
    element: <div>Login page</div>,
  },
  {
    path: "/register",
    element: <div>register page</div>,
  },
  {
    path: "/users",
    element: <div>users page</div>,
  },
  {
    path: "/products",
    element: <div>products page</div>,
  },
]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
