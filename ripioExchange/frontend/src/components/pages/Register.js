import React, { Component } from 'react'
import {Link,Redirect} from 'react-router-dom';
import {connect} from  'react-redux';
import PropTypes from 'prop-types';
import {register} from '../../actions/auth';
import {createMessage} from '../../actions/messages';


export class Register extends Component {
    
    state = {
        username : "",
        email: "",
        password : "",
        password2 : ""
    }

    static propTypes  = {
        register: PropTypes.func.isRequired,
        isAuthenticated: PropTypes.bool
      }

      onSubmit = e => {
          e.preventDefault();
          const {username,email,password, password2} = this.state;
          if(password !== password2){
            this.props.createMessage({passwordsNotMatch:'Passwords do not match'})
          }else{
            const newUser = {
              username,
              password,
              email
              
            }
            this.props.register(newUser)
          }
          
      }
      onChange = e =>{
          this.setState({[e.target.name]: e.target.value});
      }

    render() {
        const {username,email,password,password2} = this.state;

        if(this.props.isAuthenticated){
            return <Redirect to="/xchg" />
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
                        <li className="nav-item ">
                            <Link className="nav-link" to="/">Login</Link>
                        </li>
                        <li className="nav-item active">
                           <a className="nav-link">Register</a>
                        </li>
                    </ul>
           </div>
         </nav>
         <div className="col-md-6 m-auto">
            <div className="card card-body mt-5">
              <h2 className="text-center">Register</h2>
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
                  <label>Email</label>
                  <input
                    type="email"
                    className="form-control"
                    name="email"
                    onChange={this.onChange}
                    value={email}
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
                  <label>Confirm Password</label>
                  <input
                    type="password"
                    className="form-control"
                    name="password2"
                    onChange={this.onChange}
                    value={password2}
                  />
                </div>
                <div className="form-group">
                  <button type="submit" className="btn btn-primary">
                    Register
                  </button>
                </div>
                <p>
                  Already have an account? <Link to="/">Login</Link>
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
export default connect(mapStateToProps,{register,createMessage}) (Register)

