import { useState } from 'react'
import './stories/timer.css'
import { Timer } from './stories/Timer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Timer />
    </>
  )
}

export default App
