import React from "react";
import ReactDOM from "react-dom";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import "./index.css";
import './App.css';
import Login from './components/login.js';
import SignUp from './components/signup.js';
import Top from './components/top.js';
import Middle from './components/middle.js';
import New from './components/new.js';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
function Welcome() 
{ 
        return <div>
                  <div className="top-body">
                    <Top/>
                  </div>
                  <div className="middle-inner">
                    <div className="middle-wrapper">
                    <Middle/>
                  </div>
                  </div>
                  <div className="auth-inner" >
                      <div className="auth-wrapper">
                      <Login />
                      </div>
                  </div>
                  <div className="card-inner" >
                      <div className="card-wrapper">
                      <New />
                      </div>
                  </div>
          </div> 
} 
   
ReactDOM.render( 
    <Welcome />,  
    document.getElementById("root") 
); 