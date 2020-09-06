import Head from 'next/head' 
import Link from 'next/link'
import Layout from '../../components/layout'
import Top from '../../components/top'
import {Searchbar} from 'react-bootstrap'
import Clock from 'react-live-clock'
import { Navbar, Nav, NavItem, MenuItem, NavDropdown } from 'react-bootstrap'
import { useState ,useEffect} from 'react'
const API = process.env.backend;

export default function     Articles() {
  const [articles,setarticles]=useState([])

  useEffect(() => {
    const result=fetch(`${API}/article`,{
    method:"GET"}).then(
       
        res => res.json()).then(data=>{setarticles(data)
          console.log(data)
        }
        

    )
    .catch(err=>console.log(err));
},[])
console.log(articles)
  return (
           <div>
             
             <Head>
               <title>Display</title>
               <link rel="apple-touch-icon" href="%PUBLIC_URL%/logo192.png" />
               <link rel="manifest" href="%PUBLIC_URL%/manifest.json" />
               <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.7.0/css/all.css" integrity="sha384-lZN37f5QGtY3VHgisS14W3ExzMWZxybE1SJSEsQp9S+oqd12jhcu+A56Ebc1zFSJ" crossOrigin="anonymous"/>
             </Head>
             <div>
          <Top/>
        </div>
        <div id="center">
          <h2 className="nav-pages-discussion">Articles</h2>
        </div> 
        <div id="center">
          <div  className="search">
            <input type="text" placeholder="Search by category"/>
          </div>
          <div className="search-category">
            <button type="submit" className="search-btn">
              <i class="fa fa-search"></i>
            </button>
          </div> 
        </div>
        <div id="left"  style={{left:"30px"}}>
          <div className="article-category">Category</div>
        </div> 
        <div>
        {articles.map((item=>{
      return(
      
        <div className="row">
      <div id="center" className="article-list">
        <div id="left" className="icon">
          <div style={{left:"-80px",top:"-10px"}} className="avatar">
             <img src="/images/avatar.png" className="image-size1"/>
          </div>
        </div> 
        <div className="article-title">
      <div className="title">{item.title}</div>    
        </div>
        <div>
      <p className="username" style={{top:"-30px",left:"-10px"}}>@{item.author.name}</p>
      <p className="date-text" style={{top:"-62px",left:"120px"}}>{item.category.map(item=>{
            return item.name
          })} </p> 
      <p className="date-text" style={{top:"-62px",left:"120px"}}>{new Date(item.createdAt).toDateString()}</p> 
        </div> 
        <div  className="question" style={{top:"-50px",left:"-10px"}}>
          {item.body.slice(0,3)}
          {/* todo adding onsubmit function  */}
          <h1><a>Read more......</a></h1>
        </div>
      </div>
    </div>
      )
    }))}
          
        </div>    
      </div>
  )
}