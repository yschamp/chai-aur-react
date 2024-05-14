import React from 'react'

function Button(props) {
    const {btnBgColor, colorHandler } = props
  return (
    <button className='text-white shadow-lg py-1 px-4 mr-2 rounded-full outline-none' style={{backgroundColor: btnBgColor}}
            onClick={() => colorHandler(btnBgColor)}>{btnBgColor}</button>
  )
}

export default Button