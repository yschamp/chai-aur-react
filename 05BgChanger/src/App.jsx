import { useState } from 'react'
import './App.css'
import Button from './components/Button'

function App() {
  const [color, setColor] = useState('white')

  return (
    <>
      <div className='w-full h-screen' style={{backgroundColor: color}}>
        <div className='fixed bottom-20 w-full flex flex-wrap justify-center'>
          <div className='flex flex-wrap justify-center bg-white rounded-3xl py-2 px-3'>
            <Button btnBgColor = 'olive' colorHandler = { setColor }/>
            <Button btnBgColor = 'red' colorHandler = { setColor }/>
            <Button btnBgColor = 'blue' colorHandler = { setColor }/>
            <Button btnBgColor = 'pink' colorHandler = { setColor }/>
            <Button btnBgColor = 'orange' colorHandler = { setColor }/>
            <Button btnBgColor = 'black' colorHandler = { setColor }/>
            <Button btnBgColor = 'purple  ' colorHandler = { setColor }/>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
