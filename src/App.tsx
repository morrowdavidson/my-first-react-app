import { useState } from 'react'

import './App.css'
import { FavFood } from './Favfood'
import Greeting from './Greetings'
import GreenCircle from './GreenCircle'
import Animals from './Animals'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Greeting />
      <FavFood />
      <GreenCircle />
      <Animals />
    </>
  )
}

export default App
