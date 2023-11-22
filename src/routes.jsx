import { createBrowserRouter } from 'react-router-dom'
import Home from './components/Home'
import Details from './components/Details'

const routes = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/details/:id',
    element: <Details />,
  },
])

export default routes
