import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ThemeContextProvider from './context/ThemeContextProvider'
import Card from './components/Card'
import ThemeBtn from './components/ThemeBtn'


function App() {

  return (
    <>
      <ThemeContextProvider>
        <ThemeBtn/>
        <Card/>
      </ThemeContextProvider>
    </>
  )
}

export default App
