import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router'
import HomePage from './components/HomePage.jsx'
import Login from './components/Login.jsx'
import RegisterUser from './components/RegisterUser.jsx'

const appProvider = createBrowserRouter([{
  path: '/',
  element: <App />,
  children: [{
    path: '/',
    element: <HomePage />
  },
  {
    path: '/login',
    element: <Login />
  },
  {
    path: '/register',
    element: <RegisterUser />
  }
  ]
}])

createRoot(document.getElementById('root')).render(
  <RouterProvider router={appProvider} />
)
