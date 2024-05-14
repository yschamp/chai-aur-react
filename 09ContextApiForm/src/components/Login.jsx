import {useContext, useState} from "react"
import UserContext from "../context/UserContext"

function Login(){
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const {user, setUser} = useContext(UserContext)

    async function handleSubmit(e){
        e.preventDefault()
        await setUser({username, password})
        console.log(user)
    }

    return(
        <>
        <h1>Login Form</h1>
        <input type="text" placeholder="Username" value={username}
        onChange={(e) => setUsername(e.target.value)}
        />
         <br/>
        <input type="text" placeholder="Password" value={password}
        onChange={(e) => setPassword(e.target.value)}
        />
         <br/>
        <button onClick={handleSubmit}>Login</button>
        </>
    )

}

export default Login