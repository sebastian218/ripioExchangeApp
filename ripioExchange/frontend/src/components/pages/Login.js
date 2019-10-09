import React, { Component } from 'react'
import {Link,Redirect} from 'react-router-dom';
import {connect} from "react-redux" ;
import  PropTypes from "prop-types";
import {login} from '../../actions/auth';

export class Login extends Component {

    state = {
        username: "",
        password: ""
    }
    static propTypes = {
      login: PropTypes.func.isRequired,
      isAuthenticated: PropTypes.bool
    }
    onSubmit = e => {
        e.preventDefault();
        this.props.login(this.state.username,this.state.password)
        console.log('submit'); 
    }
    onChange = e =>{
        this.setState({[e.target.name]: e.target.value});
    }

    render() {
       
        const {username,password} = this.state;

        if(this.props.isAuthenticated){
          console.log("ESTA AUTENTICADO")
          return <Redirect to="/xchg"/>
        }
        return (
            
         <div className="container">
           
             <nav className="navbar navbar-expand-sm navbar-light ">
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
              <a className="navbar-brand" ><img src="../../../static/assets/imgs/ripioLogin2.png" /></a>
              <ul className="navbar-nav ml-auto mt-2 mt-lg-0" >
                         <li className="nav-item active">
                            <a className="nav-link" >Login</a>
                         </li>
                         <li className="nav-item">
                           <Link className="nav-link" to="/register">Register</Link>
                         </li>
                     </ul>
            </div>
          </nav>
             <div className="col-md-6 m-auto">
            <div className="card card-body mt-5">
              <h2 className="text-center">Login</h2>
              <form onSubmit={this.onSubmit}>
                <div className="form-group">
                  <label>Username</label>
                  <input
                    type="text"
                    className="form-control"
                    name="username"
                    onChange={this.onChange}
                    value={username}
                  />
                </div>
                
                <div className="form-group">
                  <label>Password</label>
                  <input
                    type="password"
                    className="form-control"
                    name="password"
                    onChange={this.onChange}
                    value={password}
                  />
                </div>
                
                <div className="form-group">
                  <button type="submit" className="btn btn-primary">
                    Register
                  </button>
                </div>
                <p>
                  Don`t have an account? <Link to="/register">Register</Link>
                </p>
              </form>
            </div>
          </div>
         </div>

        )
    }
}

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps,{login}) (Login) 
