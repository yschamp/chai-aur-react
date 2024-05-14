import React, { useId } from 'react'

function InputBox(props) {
    const {
         label,
         amount,
         changeAmount,
         currencyOptions = [],
         selectCurrency,
         changeSelectCurrency
        } = props

        const inputAmountId = useId()
  return (
    <>
        <label htmlFor={inputAmountId}>{label}</label>
        <div className='flex justify-center'>
            <input
             id={inputAmountId}
             type="number" 
             className='w-full outline-none rounded-md px-2 py-1 mr-2' 
             value={amount} 
             onChange={(e) => changeAmount && changeAmount(Number(e.target.value))}
             />
            <select 
            className='rounded-md w-15'
            value={selectCurrency}
            onChange={(e) => changeSelectCurrency && changeSelectCurrency(e.target.value) }
            > 
            {
                currencyOptions.map((currency) => {
                    return <option
                     key={currency} 
                     value={currency}>
                        {currency}
                     </option>
                })
            }
            </select>
        </div>
    </>
  )
}

export default InputBox