import { createBrowserRouter } from 'react-router-dom'
import Home from './components/Home'
import Application from './components/star_wars/Application'
import Details from './components/Details'

const routes = createBrowserRouter([
  {
    path: '/',
    element: <Application />,
  },
  {
    path: '/details/:id',
    element: <Details />,
  },
])

export default routes
