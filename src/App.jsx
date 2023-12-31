import React, { useState } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider, Link } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

import routes from './routes'
import AdoptedPetContext from './AdoptedPetContext'

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: Infinity,
      cacheTime: Infinity,
    },
  },
})

const App = () => {
  const adoptedPet = useState(null)
  return (
    <AdoptedPetContext.Provider value={adoptedPet}>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={routes}>
          <Link>
            <h1>Adopt me</h1>
          </Link>
        </RouterProvider>
      </QueryClientProvider>
    </AdoptedPetContext.Provider>
  )
}

const container = document.getElementById('root')
const root = createRoot(container)
root.render(<App />)
