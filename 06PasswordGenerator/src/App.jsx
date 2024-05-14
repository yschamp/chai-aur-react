import { useCallback, useEffect, useRef, useState } from "react"

function App() {
  const [ length, setLength ] = useState(8)
  const [ numbersAllowed, setNumbersAllowed ] = useState(false)
  const [ specialCharsAllowed, setSpecialCharsAllowed ] = useState(false)
  const [ password, setPassword ] = useState('')
  const passRef = useRef(null)


  
  const passwordGenerator =  useCallback(() => {
    let str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'
    if(numbersAllowed)
      str += '0123456789'

    if(specialCharsAllowed)
      str += '{}[]:;,.<>?|/~`'

    const strLen = str.length
    let tempPass = ''

    for (let index = 0; index < length; index++) {
      const charIdx = Math.floor(Math.random() * strLen)
      tempPass += str.charAt(charIdx)
    }

    setPassword(tempPass)
  }, [length, numbersAllowed, specialCharsAllowed, setPassword])

  function copyPassToClipboard(){
    passRef.current?.select()
    passRef.current?.setSelectionRange(1,3)
    window.navigator.clipboard.writeText(password)
  }

  useEffect(() => {
    passwordGenerator()
  }, [length, numbersAllowed, specialCharsAllowed])


  return (
    <>
      <div className="w-full max-w-md bg-gray-300 rounded-md px-4 py-2 mx-auto">
        <h1 className = "text-pink-800 text-center">Password Generator</h1>
        <div className="flex my-2">
          <input
           type="text"
           className="rounded-s-md py-1 px-2 outline-none w-full" 
           value={ password }
           ref={passRef}
           readOnly
          />
          <button
          onClick={ copyPassToClipboard }
          className = "text-white outline-none rounded-e-md px-4 bg-pink-600 hover:bg-pink-800"
          >
          Copy
          </button>
        </div>
        <div className="flex justify-between">
          <div>
            <input
             type="range" 
             min={8}
             max={20}
             onChange={(e) => setLength(e.target.value)}
             className="mx-1 cursor-pointer bg-pink"/>
            <label htmlFor="" className="text-pink-800">Length ({length})</label>
          </div>
          <div>
            <input
             type="checkbox"
             id="numberCheckbox"
             onChange={() => {
                setNumbersAllowed((prev) => !prev)
              }
            }
             className="mx-1"/>
            <label htmlFor="numberCheckbox" className="text-pink-800">Numbers</label>
          </div>
          <div>
            <input
             type="checkbox" 
             onChange={() => {
              setSpecialCharsAllowed(prev => !prev)
            }}
             className="mx-1"/>
            <label htmlFor="" className="text-pink-800">Characters</label>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
