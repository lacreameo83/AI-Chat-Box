import { HomePage,GemiiAoiPage } from "./pages"
import { createBrowserRouter,RouterProvider } from "react-router-dom"

const router = createBrowserRouter([{
  path:"/",
  element:<HomePage />,
  children:[{
    index:true,
    element:<GemiiAoiPage />,
    
  }]
}])

function App() {
  

  return <RouterProvider router={router} />
}

export default App
