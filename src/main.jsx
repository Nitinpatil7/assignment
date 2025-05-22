import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter , RouterProvider , Navigate  } from 'react-router-dom'
import { StateProvider } from './context/Statecontext.jsx'
import Signup from './pages/Signup.jsx'
import Login from './pages/Login.jsx'
import Display from './pages/Display.jsx'
const router = createBrowserRouter([
  {
    path:"/",
    element:<App />
  },
  {
    path:"/login",
    element:<Login/>
  },
  {
    path:"/signup",
    element:<Signup/>
  },
  {
    path:"/home",
    element:<Display/>
  }
])
createRoot(document.getElementById('root')).render(
  <StateProvider>
    <RouterProvider router={router} />
  </StateProvider>,
)
