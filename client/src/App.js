import './App.css';
import { useState, useEffect } from 'react'
import { Switch, Route } from 'react-router-dom'
import Login from './components/Login'
import NavBar from './components/NavBar';
import Signup from './components/Signup';

function App() {

  const [currentUser, setCurrentUser] = useState("")

  useEffect(() => {
    fetch('/me')
      .then(res => {
        if(res.ok) {
          res.json()
          .then((user) => setCurrentUser(user))
        }
      })
  }, [])

  function onLogIn(loggedInUser) {
    setCurrentUser(loggedInUser)
  }

  function onLogOut(){
    setCurrentUser(null)
  }

  // const [count, setCount] = useState(0)

  // useEffect(() => {
  //   fetch("/hello")
  //     .then((r) => r.json())
  //     .then((data) => setCount(data.count));
  // }, []);

  return (
    <div className="App">
      <NavBar 
        currentUser={currentUser} 
        onLogOut={onLogOut}
      />
      <Switch>
        <Route exact path="/noodles">
          <h1>Noodles</h1>
        </Route>
        <Route exact path="/reviews">
          <h1>Reviews</h1>
        </Route>
        <Route exact path="/users">
          <h1>Reviewers</h1>
        </Route>
        <Route exact path='/login'>
          <Login onLogIn={onLogIn}/>
        </Route>
        <Route exact path='/signup'>
          <Signup onLogIn={onLogIn}/>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
