import Home from './pages/Home'
import HiokiSushi from './pages/Restaurantes/HiokiSushi'
import { GlobalCss } from './styles'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

const rotas = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/hiokiSushi',
    element: <HiokiSushi />,
  },
])

function App() {
  return (
    <>
      <GlobalCss />
      <RouterProvider router={rotas} />
    </>
  )
}

export default App
