import { useState } from 'react'

import './App.css'
import { FavFood } from './Favfood'
import Greeting from './Greetings'
import GreenCircle from './GreenCircle'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Greeting />
      <FavFood />
      <GreenCircle />
    </>
  )
}

export default App
