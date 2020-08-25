import Head from 'next/head'
import Link from 'next/link'
import Layout from '../../components/layout'
import Top from '../../components/top'
const SignUp = (props) => { 
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
    <form>
              <h3 className="title">Sign Up</h3>
              <div className="form-group">
               
              </div>
              <div className="form-group">
                  <label className="form-label"> Name</label>
                  <input type="name" required="required" className="form-control" placeholder="Name" />
                  <label className="form-label">E-mail Id</label>
                  <input type="email" required="required" className="form-control" placeholder="E-mail Id" />
                  <label className="form-label">User Name</label>
                  <input type="usre_name" required="required" className="form-control" placeholder="User Name" />
                  <label className="form-label">Password</label>
                  <input type="password" required="required"className="form-control" placeholder="Enter password" />
                  <label className="form-label">Confirm Password</label>
                  <input type="password"required="required" className="form-control" placeholder="Enter password" />
             </div>
             <footer>
             <div className="form-group forgot-password">
                  <button type="submit" className="btn btn-primary btn-block">Sign Up</button>
                  <Link href="/login/signin">
                       <a>Sign In</a>
                  </Link>
             </div>
             </footer>
          </form>
          </div>
          </div>
          </div>
  ) ;
} 
export default SignUp;