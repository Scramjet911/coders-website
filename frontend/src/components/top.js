import React from 'react';  
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Clock from 'react-live-clock';
class Top extends React.Component { 
    render() 
    { 
        return  <div className="top-body">
        <nav className="navbar navbar-expand-lg navbar-light fixed-top">   
             <div className="container">
                <h2 className="name-color">CodeStats </h2>
            </div>
            <div className="container nav-item">
                <h2 className="name-color"><Clock format={'HH:mm:ss'} ticking={true} timezone={'India Standard Time'} /></h2>
             </div>
             <div className="container">
             <div className="container nav-item" >
                <i className="fas fa-home"  ></i>
             </div>
             <div className="container nav-item" >
                <i className="fas fa-book"  ></i>
             </div>
             <div className="container nav-item" >
                <i className="fa fa-users"  ></i>
             </div>
             <div className="container nav-item" >
                <i className="fa fa-id-card"  ></i>
             </div>
             <div className="container nav-item" >
                <i className="fas fa-pen"  ></i>
             </div>
             <div className=" container nav-item">
                 <i className="fas fa-phone-volume"  ></i>   
             </div>
             </div>
        </nav>
        </div>;
    } 
}  
export default Top; 