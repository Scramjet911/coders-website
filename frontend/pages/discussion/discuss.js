import Head from 'next/head' 
import Link from 'next/link'
import Layout from '../../components/layout'
import Top from '../../components/top'
import {Searchbar} from 'react-bootstrap'
import Clock from 'react-live-clock'
import { Navbar, Nav, NavItem, MenuItem, NavDropdown } from '../../node_modules/react-bootstrap'
export default function Discuss() {
  return (
           <div> 
             <Head>
               <title>Discuss</title>
               <link rel="apple-touch-icon" href="%PUBLIC_URL%/logo192.png" />
               <link rel="manifest" href="%PUBLIC_URL%/manifest.json" />
               <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.7.0/css/all.css" integrity="sha384-lZN37f5QGtY3VHgisS14W3ExzMWZxybE1SJSEsQp9S+oqd12jhcu+A56Ebc1zFSJ" crossorigin="anonymous"/>
             </Head>
             <Nav className="justify-content-end nav" justify="true">
               <div className="logo name">CodeStats</div>
               <div className="path">
                  <div className="path-text">/path</div>
               </div>
               <div className="clock">
                 <NavItem>
                    <Clock format={'HH:mm:ss'} ticking={true} timezone={'India Standard Time'} />
                 </NavItem>
               </div>
               <div id="center">
                  <h2 className="nav-pages-discussion">Discussion</h2>
               </div>  
               <div className="search">
                  <input type="text" placeholder="Search by title"/>
               </div>
               <div className="search-category">
                 <button type="submit" className="search-btn">
                    <i class="fa fa-search"></i>
                 </button>
               </div> 
               <Link href="/">
                 <a className="login">
                    <i class="fas fa-home"></i>
                    <div className="home-text">Home</div>
                    <div className="vl1"></div>
                    <div className="vl"></div>
                 </a>
               </Link>
               </Nav>
               <hr className="line1"></hr>
               <div>
                 <div className="post-question">
                 <div className="question-image">?</div>
                 <div className="question-text">post a question?</div>
               </div>
             </div>
             <div className="row">
               <div className="column">
                 <div  className="discuss-body ">
                   <div className="content-title">Problem title 
                     <div className="row">
                       <div className="column">
                          <div className="username">@username</div>
                       </div>
                       <div className="column">
                          <div className="date-text">dd/mm/yyyy</div>
                       </div>
                     </div>
                     <hr className="line-break" style={{width:"100%",top:"-15px"}}></hr>
                     <div className="question">problem description
                     <div className="code">code</div>
                     <div className="row">
                        <div className="column">
                          <div className="date-text" style={{top:"10px",left:"800px",float:"right"}}>replay</div>
                       </div>
                     </div>
                     <hr className="line-break" style={{width:"100%",top:"10px"}}></hr>
                   </div>
                   <div className="answers">
                     <div className="row">
                       <div className="column">
                         <div className="username">@username</div>
                       </div>
                       <div className="column">
                         <div className="date-text">dd/mm/yyyy</div>
                       </div>
                     </div>
                     answer
                     <hr className="line-break" style={{width:"100%",top:"5px"}}></hr>
                     </div>
                   </div>
                 </div>
               </div>
             </div>
           </div>
  )
}