import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Login from './Modules/Login';
import ChatBox from './Modules/ChatBox';

export default class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Route path="/" exact component={Login} />
          <Route path="/pseudo/:pseudo" component={ChatBox} />
        </Router>
      </div>
    );
  }
}