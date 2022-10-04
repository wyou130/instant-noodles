import './App.css';
import { useState, useEffect } from 'react'
import { Switch, Route } from 'react-router-dom'
import Login from './components/Login'

function App() {

  const [currentUser, setCurrentUser] = useState("")

  function onLogIn(loggedInUser) {
    setCurrentUser(loggedInUser)
  }

  useEffect(() => {
    fetch('/me')
      .then((res) => {
        if(res.ok) {
          res.json()
          .then((user) => setCurrentUser(user))
        }
      })
  }, [])

  // const [count, setCount] = useState(0)

  // useEffect(() => {
  //   fetch("/hello")
  //     .then((r) => r.json())
  //     .then((data) => setCount(data.count));
  // }, []);

  return (
    <div className="App">
      <Switch>
        <Route exact path="/sessions">
          {/* <h1>Page Count: {count}</h1> */}
        </Route>
        <Route exact path="/testing">
          <h1>Test Route</h1>
        </Route>
        <Route exact path='/login'>
          <Login onLogIn={onLogIn}/>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
