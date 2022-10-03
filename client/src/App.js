import './App.css';
import { useState, useEffect } from 'react'
import { Switch, Route, Router } from 'react-router-dom'

function App() {

  const [count, setCount] = useState(0)

  useEffect(() => {
    fetch("/hello")
      .then((r) => r.json())
      .then((data) => setCount(data.count));
  }, []);

  return (
    <div className="App">
      <Switch>
        <Route exact path="/sessions">
          <h1>Page Count: {count}</h1>
        </Route>
        <Route exact path="/testing">
          <h1>Test Route</h1>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
