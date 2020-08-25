import React from 'react' 
import Head from 'next/head'
import Link from 'next/link'
import Layout from './layout'
import Clock from 'react-live-clock'
import render from 'react';
import { Navbar, Nav, NavItem, MenuItem, NavDropdown } from '../node_modules/react-bootstrap'
class Top extends React.Component { 
    render() 
    { 
        return (
             <Layout>
                 <div className="top-body">
                     <Nav className="justify-content-end nav" justify="true">
                         <div className="logo name">CodeStats</div>
                         <div className="path">
                             <div className="path-text">/path</div>
                         </div>
                         <Link href="/">
                             <a className="home">
                                 <i class="fas fa-home"></i>
                                 <div className="home-text">Home</div>
                                 <div className="vl1"></div>
                                 <div className="vl"></div>
                             </a>
                         </Link>
                         <Link href="/resources/display">
                             <a className="resources">
                                 <i className="fas fa-book"></i>
                                 <div className="resource-text">Resources</div>
                                 <div className="vl"></div>
                             </a>
                         </Link>
                         <Link href="/discussion/discuss">
                             <a className="discussion">
                                 <i className="fa fa-users"  ></i>
                                 <div className="discussion-text">Discussion</div>
                                 <div className="vl"></div>
                             </a>
                         </Link>
                         <Link href="#about">
                             <a className="about">
                                 <i className="fa fa-id-card"  ></i>
                                 <div className="about-text">About</div>
                                 <div className="vl"></div>
                             </a>
                         </Link>
                         <Link href="/">
                             <a className="blogs">
                                 <i className="fas fa-pen"  ></i>
                                 <div className="blogs-text">Blogs</div>
                                 <div className="vl"></div>
                             </a>
                         </Link>
                         <Link href="#connect">
                             <a className="contactus">
                                 <i className="fas fa-wifi"  ></i>
                                 <div className="contact-text"> Connect</div>
                                 <div className="vl"></div>
                             </a>
                         </Link>
                         <Link href="/login/signin" target="page-body">
                             <a className="login" >
                                 <i className="fas fa-lock"  ></i>
                                 <div className="login-text">Log In/Sign Up</div>
                                 <div className="vl"></div>
                             </a>
                         </Link>
                         <div className="clock">
                             <NavItem>
                                 <Clock format={'HH:mm:ss'} ticking={true} timezone={'India Standard Time'} />
                             </NavItem>
                         </div>
                     </Nav>
                 </div>
                 <hr className="line1"></hr>
            </Layout>)
    } 
}  
export default Top; 