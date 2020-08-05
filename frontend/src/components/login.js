import React,{Component} from 'react'
import SignUp from './signup';
class Login extends Component{
    constuctor() {
        this.routeChange = this.routeChange.bind(this);
      }
    
      routeChange() {
        let path = "./SignUp";
        this.props.history.push(path);
      }
    state = {
        isActive:true
     }
   
     handleShow = ()=>{
         this.setState({
             isActive: true
         })
     }
   
     handleHide = () =>{
         this.setState({
             isActive: false
         })
     }
      render (){
                  return(
                  <div>
                    {this.state.isActive ? <form>
                    <h3 className="title">Sign In</h3>
                    <div className="form-group">
                    <img className="img" src={require('./loginImg.JPG')} alt="nothing"/>
                    </div>
                    <div className="form-group">
                        <label className="title"><i class='fas fa-envelope' ></i>{" "}Email address</label>
                        <input type="email" className="form-control" placeholder="Enter email" />
                    </div>
                
                    <div className="form-group">
                    <label className="title"> <i class='fas fa-key'  ></i>{" "}Password</label>
                        <input type="password" className="form-control" placeholder="Enter password" />
                    </div>
                
                    <div className="form-group">
                        <div className="custom-control custom-checkbox">
                        <input type="checkbox" className="custom-control-input" id="customCheck1" />
                        <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
                        </div>
                    </div>
                    
                    <div className="form-group forgot-password text-right">
                        <button type="submit" onClick={this.routeChange} className="btn btn-primary btn-block">Login</button>
                        <button className="btn btn-link" onClick={this.handleHide}>Forgot password?</button>
                        
                    </div>
                </form>  :  <form>
                    <div className="form-group">
                      <label className="title">Email address</label>
                      <input type="email" className="form-control" placeholder="Enter email" />
                    </div>
                    <div className="form-group">
                      <button type="submit" className="btn btn-primary btn-block">Send reset link</button>
                    </div>

                </form> }
                   
                  </div>
                  );
      }
} 
export default Login;