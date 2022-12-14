import './App.css';
import { useState, useEffect } from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from './components/Home';
import Login from './components/Login'
import NavBar from './components/NavBar';
import Signup from './components/Signup';
import NoodlesList from './components/NoodlesList'
import NoodleDetails from './components/NoodleDetails'
import ReviewsList from './components/ReviewsList';
import UsersList from './components/UsersList';
import UserDetails from './components/UserDetails';

function App() {

  const [currentUser, setCurrentUser] = useState(null)
  const [displayItem, setDisplayItem] = useState(null)

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

  function onSeeDetails(individual) {
    setDisplayItem(individual)
  }

  // function onEditUser(updatedUser) {
  //   setDisplayItem(updatedUser)
  // }

  function onDeleteUser() {
      setCurrentUser(null)
      setDisplayItem(null)
  }

  // const [count, setCount] = useState(0)

  // useEffect(() => {
  //   fetch("/hello")
  //     .then((r) => r.json())
  //     .then((data) => setCount(data.count));
  // }, []);

  return (
    <div className='App'>
      <NavBar 
        currentUser={currentUser} 
        onLogOut={onLogOut}
      />
      <Switch>
        <Route exact path='/'>
          <Home currentUser={currentUser}/>
        </Route>
        <Route exact path='/noodles'>
          <NoodlesList/>
        </Route>
        <Route exact path='/noodles/:id'>
          <NoodleDetails onSeeDetails={onSeeDetails} displayItem={displayItem} currentUser={currentUser}/>
        </Route>
        <Route exact path='/reviews'>
          <ReviewsList/>
        </Route>
        <Route exact path='/users'>
          <UsersList/>
        </Route>
        <Route exact path='/users/:id'>
          <UserDetails onSeeDetails={onSeeDetails} displayItem={displayItem} currentUser={currentUser} onDeleteUser={onDeleteUser} 
          // onEditUser={onEditUser}
          />
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