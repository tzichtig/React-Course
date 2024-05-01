import { useState } from 'react'
import './App.css'
import ItemMenu from './assets/Components/ItemMenu'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <ItemMenu content='Home' link='#'></ItemMenu>
     <ItemMenu content='Features' link='#'></ItemMenu>
     <ItemMenu content='Contact' link='#'></ItemMenu>
    </>
  )
}

export default App
