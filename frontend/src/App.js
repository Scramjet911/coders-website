import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Login from "./components/login";
import SignUp from "./components/signup";
function App() {
  return (
  <Router>
    <div className="App" id="App">
      <nav className="navbar navbar-expand-lg navbar-light fixed-top">   
      <div>    
         <div class="bar1"></div>
         <div class="bar1"></div>
         <div class="bar2"></div>
      </div>
      <div className="container">
      <Link className="navbar-brand" to={"/home"}><h2>CodeStats </h2></Link><h2>{new Date().toLocaleTimeString()}.</h2>
      </div>
      <div className="container">
      <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
             <Link className="nav-link" to={"/home"}>HOME</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to={"/resources"}>RESOURCES</Link>
          </li>
          <li className="nav-item">
             <Link className="nav-link" to={"/discussions"}>DISCUSSIONS</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to={"/blogs"}>BLOGS</Link>
          </li>
          <li className="nav-item">
             <Link className="nav-link" to={"/sign-in"}>SING IN</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to={"/sign-up"}>SIGN UP</Link>
          </li>
        </ul>
      </div>
      </div>
      </nav>
      <div className="auth-wrapper">
        <div className="auth-inner">
          <Switch>
            <Route path="/sign-in" component={Login} />
            <Route path="/sign-up" component={SignUp} />
          </Switch>
        </div>
      </div>
   </div>
  </Router>
  );
}

export default App;