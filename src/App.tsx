import { useEffect, useState } from 'react'
import { QueryClient, QueryClientProvider } from 'react-query'

import './App.css'
import Games from './components/Games.tsx'

const queryClient = new QueryClient();

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Games />
    </QueryClientProvider>
  )
}
