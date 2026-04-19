import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Cards from './component/card.jsx'

function App() {


  return (
    <>
    <h1 className='heading'>All Cards are here!  </h1>
    <Cards/>
    </>
  )
}

export default App
