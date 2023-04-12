import React from 'react';
import ReactDOM from 'react-dom/client';
import "./index.css";
import App from "./App";
import reportWebVitals from './reportWebVitals';
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Profile from "./components/profile/Profile";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children: [
      {
        path: "/profile",
        element: <Profile />,
      }
    ]
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
      <RouterProvider router={router}/>
    </React.StrictMode>
);

reportWebVitals();
