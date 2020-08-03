import React from 'react'; 
  
const Forgot_password = (props) => { 
  return ( 
    <form>
    <div className="form-group">
        <label className="title">Email address</label>
        <input type="email" className="form-control" placeholder="Enter email" />
        <button type="submit" className="btn btn-primary btn-block">Send reset link</button>
    </div>

</form>
  ) 
} 
  
export default Forgot_password;