import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import './App.css';

import Home from './components/pages/Home';
import Login from './components/pages/Login';

import Header from './components/commons/Header';
import Footer from './components/commons/Footer';

function App() {
  return (
    <Router>
      <Header />
      <div className="body-content">
        <Switch>
          <Route exact path="/"><Home /></Route>
          <Route exact path="/home"><Home /></Route>
          <Route path="/login"><Login /></Route>

        </Switch>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
