import React from 'react'; 
  
const Login = (props) => { 
  return ( 
    <form>
    <h3 className="title">Sign In</h3>

    <div className="form-group">
        <label className="title">Email address</label>
        <input type="email" className="form-control" placeholder="Enter email" />
    </div>

    <div className="form-group">
        <label className="title">Password</label>
        <input type="password" className="form-control" placeholder="Enter password" />
    </div>

    <div className="form-group">
        <div className="custom-control custom-checkbox">
        <input type="checkbox" className="custom-control-input" id="customCheck1" />
        <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
        </div>
    </div>

    <button type="submit" className="btn btn-primary btn-block">Submit</button>
    <p className="forgot-password text-right">
     
        <a href="/forgot_password">Forgot password?</a>
        
    </p>
</form>
  ) 
} 
   
export default Login; 