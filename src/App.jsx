import { useState } from 'react'
import './App.css'
import { RoutesApp } from './Routes'


function App() {

  const [count, setCount] = useState(0)

  return (
    <>
      <RoutesApp />
    </>
  )
}

export default App
