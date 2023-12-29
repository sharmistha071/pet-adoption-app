import { createBrowserRouter } from 'react-router-dom'
import Home from './components/Home'
import Application from './components/star_wars_context/Application'
import Details from './components/Details'
import CharacterView from './components/star_wars_context/Character'

const routes = createBrowserRouter([
  {
    path: '/',
    element: <Application />,
    children: [
      {
        path: '/characters/:id',
        element: <CharacterView />,
      },
    ],
  },
  // {
  //   path: '/characters/:id',
  //   element: <CharacterView />,
  // },
  {
    path: '/details/:id',
    element: <Details />,
  },
])

export default routes
