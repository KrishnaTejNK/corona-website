import React from 'react';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './App.css';
import Home from './components/pages/Home'
import Dropdown from './Dropdown';

function App() {
  return (
    <div>
    <Router>
        <Navbar />
        {/* <Dropdown /> */}
        <Switch>
          <Route path='/' exact component={Home} / >
        </Switch>
    </Router>
    </div>
  );
}

export default App;
