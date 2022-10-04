import { useState } from 'react'
// import { useHistory } from 'react-router-dom'

function Signup({ onLogIn }) {

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [location, setLocation] = useState("")
    const [image, setImage] = useState("")
    // let history = useHistory()

    function handleSubmit(e) {
        e.preventDefault()
        let signupInput = {
            name: name,
            email: email,
            password: password,
            location: location,
            image: image
        }
        // console.log(signupInput)
        fetch('/signup', {
            method: 'POST',
            headers: {
                'Content-Type' : 'application/json'
            },
            body: JSON.stringify(signupInput)
        })
            .then(res => {
                if(res.ok) {
                    res.json()
                    .then(newUser => onLogIn(newUser))
                }
            })
            // .then(newUser => console.log(newUser))
        // history.push('/')
        setName("")
        setEmail("")
        setPassword("")
        setLocation("")
        setImage("")
    }

    return (
        <div>
            <p>Create an Account</p>
            <form onSubmit={handleSubmit}>
                <label htmlFor="name">Username</label>
                <input 
                    required 
                    type="text" 
                    name="name" 
                    value={name}
                    onChange={e => setName(e.target.value)}
                />
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
                <label htmlFor="location">Location</label>
                <input 
                    required 
                    type="text" 
                    name="location" 
                    value={location}
                    onChange={e => setLocation(e.target.value)}
                />
                <label htmlFor="image">Profile Picture</label>
                <input 
                    required 
                    type="text" 
                    name="image" 
                    value={image}
                    onChange={e => setImage(e.target.value)}
                />
                <button type="submit">Create Account</button>
            </form>
        </div>
    )
}

export default Signup 