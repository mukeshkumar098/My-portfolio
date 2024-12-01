import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import Header from './Component/Header/Header'
import Page1 from './Pages/Page1'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>

    <Page1/>
    </>
  )
}

export default App
