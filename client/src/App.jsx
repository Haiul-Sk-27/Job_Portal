import React from 'react'
import { createBrowserRouter, RouterProvider} from 'react-router-dom'
import Home from './Pages/Home'
import Application from './Pages/Application'
import ApplyJob from './Pages/ApplyJob'

const router = createBrowserRouter([
  {
    path:'/',
    element:<><Home/></>
  },
  {
    path:"/apply-job/:id",
    element:<><ApplyJob/></>
  },
  {
    path:"/application",
    element:<><Application/></>
  }
])
const App = () => {
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App