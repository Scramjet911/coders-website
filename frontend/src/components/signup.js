import React from 'react'; 
const SignUp = (props) => { 
  return ( 
    <form>
              <h3 className="title">Sign Up</h3>

              <div className="container">
                  <label className="title"> Name</label>
                  <input type="name" className="form-control" placeholder="Name" />
                  <label className="title">E-mail Id</label>
                  <input type="email" className="form-control" placeholder="E-mail Id" />
                  <label className="title">User Name</label>
                  <input type="usre_name" className="form-control" placeholder="User Name" />
                  <label className="title">Password</label>
                  <input type="password" className="form-control" placeholder="Enter password" />
                  <label className="title">Confirm Password</label>
                  <input type="password" className="form-control" placeholder="Enter password" />
                  <label className="title"></label>
                  <button type="submit" className="btn btn-primary btn-block">Sign Up</button>
             </div>
          </form>
  ) 
} 
export default SignUp;