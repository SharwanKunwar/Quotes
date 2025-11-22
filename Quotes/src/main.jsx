import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import Inspiration from './pages/Inspiration.jsx'
import Humor from './pages/Humor.jsx'
import Philosopy from './pages/Philosopy.jsx'
import Wisdom from './pages/Wisdom.jsx'
import Love from './pages/Love.jsx'
import Sucess from './pages/Sucess.jsx'
import DefaultPage from './pages/DefaultPage.jsx'

const router = createBrowserRouter([
  {
    path:"/",
    element: <App/>,
    children:[
      {
        index: true,
        element: <DefaultPage/>
      },
      {
        path: "inspiration",
        element: <Inspiration/>
      },
      {
        path: "humor",
        element: <Humor/>
      },
      {
        path:"philosopy",
        element: <Philosopy/>
      },
      {
        path: "wisdom",
        element: <Wisdom/>
      },
      {
        path: "sucess",
        element: <Sucess/>
      },
      {
        path: "love",
        element: <Love/>
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
