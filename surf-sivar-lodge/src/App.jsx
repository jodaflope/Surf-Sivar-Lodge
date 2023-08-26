import { useState } from 'react'
import './App.css'
import HeaderMainPage from './Components/HeaderMainPage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <HeaderMainPage />
      <h1 className="text-3xl font-bold underline">
      Hello world!
      </h1>
    </>
  )
}

export default App
