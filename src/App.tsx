import { useState } from 'react'
import './App.css'
import Heder from './assets/Components/Heder'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Heder></Heder>
    </>
  )
}

export default App
