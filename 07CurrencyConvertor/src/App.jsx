import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import InputBox from './components/InputBox'
import useCurrency from './hooks/useCurrency'

function App() {
  const [ amount, setAmount ] = useState(0)
  const [ convertedAmount, setConvertedAmount ]  = useState(0)
  const [ from, setFrom ] = useState('usd')
  const [ to, setTo ] = useState('inr')
  const currencyInfo = useCurrency(from)

  const options = Object.keys(currencyInfo)

  function swap(){
    setFrom(to)
    setTo(from)
    setAmount(convertedAmount)
    setConvertedAmount(amount)
  }

  return (
    <div className='w-full h-screen absolute' style={{ backgroundImage: `url('https://images.pexels.com/photos/3532540/pexels-photo-3532540.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')`}}>
     <div className='w-full max-w-md mx-auto px-3 pt-2 pb-4 rounded-lg bg-transparent bg-blue-200 mt-[15%]'>
      <h1 className='text-center'>Currency Convertor</h1>
      <InputBox
       label = 'From' 
       amount = {amount} 
       changeAmount = {(amount) => setAmount(amount)}
       currencyOptions = {options}
       selectCurrency = {from}
       changeSelectCurrency = {(from) => setFrom(from)}
       />
      <div className='flex justify-center'>
        <button 
        onClick={swap}
        className='bg-blue-500 rounded-md px-3 py-1 m-2 text-white'>swap</button>
      </div>
      <InputBox 
      label = 'To' 
      amount = { convertedAmount } 
      changeAmount = {(convertedAmount) => setConvertedAmount(convertedAmount)}
      currencyOptions = {options}
      selectCurrency = {to}
      changeSelectCurrency = {(to) => setFrom(to)}
      />
      <button 
      onClick={() => {
        console.log( amount * currencyInfo[to])
        setConvertedAmount(amount * currencyInfo[to])
      }}
      className='bg-blue-500 py-2 text-center w-full mt-3 rounded-md text-white'>
      Convert {from.toUpperCase()} to {to.toUpperCase()}
     </button>
     </div>
     
    </div>
  )
}

export default App
