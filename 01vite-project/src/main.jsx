import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

const docElement = React.createElement(
  'a',
  { href: 'https://google.com', target: '_blank'},
  'Visit To Google'
)
ReactDOM.createRoot(document.getElementById('root')).render(
  docElement
)
