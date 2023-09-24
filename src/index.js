import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './pages/Home';
import Intro from './pages/Intro';
import Contents from './pages/Contents';
import EventPage from './pages/EventPage';
import MyPage from './pages/MyPage';
import Login from './pages/Login';
import CommunityPage from './pages/CommunityPage';
import Register from './pages/Register';
import TestStart from './pages/TestStart';
import TestOption from './components/testPages/TestOption';
import TestResult from './components/testPages/TestResult';
import FundingWritePage from './contentpage/FundingWritePage';
import SupportWritePage from './contentpage/SupportWritePage';
import AdminPage from './pages/admin/AdminPage';
import FundingContentDetail from './pages/FundingContentDetail';
import WriterPage from './pages/WriterPage';
import TestCompo from './pages/mypage/TestCompo';
import FundingMorePage from './contentpage/FundingMorePage';
import SupportMorePage from './contentpage/SupportMorePage';
import SupportContentDetail from './pages/SupportContentDetail';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/intro',
    element: <Intro />,
  },
  {
    path: '/contents/:type',
    element: <Contents />,
  },
  {
    path: '/event',
    element: <EventPage />,
  },
  {
    path: '/mypage',
    element: <MyPage />,
  },
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/community',
    element: <CommunityPage />,
  },
  {
    path: '/register',
    element: <Register />,
  },
  {
    path: '/investTest',
    element: <TestStart />,
  },
  {
    path: '/investTest/option',
    element: <TestOption />,
  },
  {
    path: '/investTest/result/:id',
    element: <TestResult component={TestResult} />,
  },
  {
    path: '/funding-write',
    element: <FundingWritePage />,
  },
  {
    path: '/support-write',
    element: <SupportWritePage />,
  },
  {
    path: '/admin',
    element: <AdminPage/>,
  },
  {
    path: "/FundingContentDetail/:contentId",
    element: <FundingContentDetail/>
  },
  {
    path: "/SupportContentDetail/:contentId",
    element: <SupportContentDetail/>
  },
  {
    path: '/writer/:writerId',
    element: <WriterPage />,
  },
  {
    path: '/fundingmore',
    element: <FundingMorePage />,
  },
  {
    path: '/supportmore',
    element: <SupportMorePage />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
