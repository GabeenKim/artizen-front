import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';
import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom";
import Home from './pages/Home';
import Intro from './pages/Intro';
import Contents from './pages/Contents';
import EventPage from './pages/EventPage';
import MyPage from './pages/MyPage';
import Login from './pages/Login';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />
  },
  {
    path: "/intro",
    element: <Intro/>
  },
  {
    path: "/contents/:type",
    element: <Contents/>
  },
  {
    path: "/event",
    element: <EventPage/>
  },
  {
    path: "/mypage",
    element: <MyPage/>
  },
  {
    path: "/login",
    element: <Login/>
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
