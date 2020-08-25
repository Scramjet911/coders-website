import Head from 'next/head' 
import Link from 'next/link'
import Layout from '../../components/layout'
import Top from '../../components/top'
import Login from '../../components/login'

export default function Signin() {
  return (
           <div>
             <div><Top/></div>
             <Head>
               <title>Signin</title>
               <link rel="apple-touch-icon" href="%PUBLIC_URL%/logo192.png" />
               <link rel="manifest" href="%PUBLIC_URL%/manifest.json" />
               <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.7.0/css/all.css" integrity="sha384-lZN37f5QGtY3VHgisS14W3ExzMWZxybE1SJSEsQp9S+oqd12jhcu+A56Ebc1zFSJ" crossorigin="anonymous"/>
            </Head>
            <div className="auth-wrapper">
               <div className="auth-inner">
               <Login/>
                           
               </div>
             </div>
           </div>
  )
}