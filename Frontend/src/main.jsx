import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router'
import HomePage from './components/HomePage.jsx'
import Login from './components/Login.jsx'
import RegisterUser from './components/RegisterUser.jsx'
import VideoPlayer from './components/VideoPlayer.jsx'
import Channel from './components/Channel.jsx'
import CreateChannel from './components/CreateChannel.jsx'
import EditVideo from './components/EditVideo.jsx'
import Error from './components/Error.jsx'

const appProvider = createBrowserRouter([{
  path: '/',
  element: <App />,
  errorElement: <Error />,
  children: [{
    path: '/',
    element: <HomePage />
  },
  {
    path: '/videoplayer/:id',
    element: <VideoPlayer />
  },
  {
    path: '/login',
    element: <Login />
  },
  {
    path: '/register',
    element: <RegisterUser />
  },
  {
    path: '/channel/:id',
    element: <Channel />
  },
  {
    path: "/createchannel",
    element: <CreateChannel />
  },
  {
    path: '/editvideo/:id',
    element: <EditVideo />
  }
  ]
}])

createRoot(document.getElementById('root')).render(
  <RouterProvider router={appProvider} />
)
