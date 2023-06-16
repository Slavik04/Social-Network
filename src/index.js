import React from 'react';
import ReactDOM from 'react-dom/client';
import "./index.css";
import reportWebVitals from './reportWebVitals';
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import App from "./App";
import {Provider} from "react-redux";
import {store} from "./redux/store/index";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children: [
      {
        path: "profile",
        element: <Profile/>,
      },
      {
        path: "messages",
        element: <Dialogs/>,
      }
    ]
  }
])

  const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(
      <React.StrictMode>
        <Provider store={store}>
        <RouterProvider router={router}/>
        </Provider>
      </React.StrictMode>
  );

reportWebVitals();



