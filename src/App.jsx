import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import HeroPage from './components/HeroPage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='container'>
      <HeroPage/>
    </div>
  )
}

export default App
