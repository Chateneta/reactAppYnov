import React from 'react';
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import './App.css';
import { Home } from '../home/Home';
import { About } from '../about/About';
import { Navbar } from '../navbar/Navbar';

export function App() {
  return (
        <Router>
          <Navbar />
          <Switch>
            <Route path="/" exact component={Home}/>
            <Route path="/about" component={About}/>
          </Switch>
        </Router>
  );
}


