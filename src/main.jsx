import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Home from './pages/Home.jsx'
import Profile from './pages/Profile.jsx'
import Questions from './pages/Questions.jsx'
import Quizes from './components/Quizes.jsx'
import Login from './pages/Login.jsx'
import Register from './pages/Register.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App/>,
    children: [    
      {
        path: '/',
        element: <Home/>
      },   
      {
        path: '/profile',
        element: <Profile/>
      },
      {
        path: '/login',
        element: <Login/>
      },
      {
        path: '/register',
        element: <Register/>
      },
      {
        path: '/quiz/:quizId',
        element: <Questions/>,
        children: [
          {
            path: '/quiz/:quizId/:type',
            element: <Quizes/>
          }
        ] 
      },
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
