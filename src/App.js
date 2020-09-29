import React from 'react';
import './App.css';
import Login from'./components/loginComponents/login'
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import signup from './components/loginComponents/signup';
function App() {
  return (
    <div className="App">
      <Router>
       <Switch>
        <Route path="/signup" component={signup} />
        <Route path="/" exact component={Login} />
        </Switch>
      </Router>
      
    </div>
  );
}

export default App;
