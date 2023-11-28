import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function Log() {
  const [count, setCount] = useState(0)

  return (
    <>
      <a href="/Login" class="btn small">Log</a>
    </>
  )
}

export default Log
