import { useState } from 'react'
import { Link } from 'react-router-dom'
// import { useHistory } from 'react-router-dom'

function Login({ onLogIn }) {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    // let history = useHistory()

    // function showPassword(password) {
    //     if (password.type === "password") {
    //         password.type = "text"
    //     } else {
    //         password.type = "password"
    //     }
    // }

    function handleSubmit(e) {
        e.preventDefault()
        let loginInput = {
            email: email,
            password: password
        }
        // console.log(loginInput)
        fetch("/login", {
            method: "POST",
            headers: {
                "Content-Type" : "application/json"
            },
            body: JSON.stringify(loginInput)
        })
            .then(res => res.json())
            .then(loggedInUser => onLogIn(loggedInUser))
        // history.push('/')
        setEmail("")
        setPassword("")
    }

    return (
        <div>
            <p>Log In</p>
            <form onSubmit={handleSubmit}>
                <label htmlFor="email">Email</label>
                <input 
                    required 
                    type="text" 
                    name="email" 
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                />
                <label htmlFor="password">Password</label>
                <input 
                    required 
                    type="password" 
                    name="password" 
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                />
                {/* <input type="checkbox" onClick={showPassword}>Show Password</input> */}
                <button type="submit">Log In</button>
            </form>
            <div>
                Don't have an account yet? <Link exact to='/signup'>Sign up now!</Link>
            </div>
        </div>
    )
}

export default Login 