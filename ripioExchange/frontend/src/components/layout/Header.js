import React, { Component } from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {logout} from '../../actions/auth';

export class Header extends Component {
  static propTypes  = {
    auth : PropTypes.object.isRequired,
    logout : PropTypes.func
  }
    render() {
      const {isAuthenticated, user} = this.props.auth;
        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <a className="navbar-brand" href="#"><img src="../../../static/assets/imgs/ripioxchg.svg"/></a>
  <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
    <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
      <li className="nav-item ">
        <a className="nav-link" >Trade <span className="sr-only">(current)</span></a>
      </li>
    </ul>
     <div className="form-inline my-2 my-lg-0">
         <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
         <li className="nav-item dropdown">
        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        {user ? `${user.email}` : ''}
        </a>
        <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink" style={{ cursor: "pointer"}}>
          <a className="dropdown-item" onClick={this.props.logout} >Logout</a>
        </div>
      </li>
    </ul>
    </div>
  </div>
</nav>
        )
    }
}

const mapStateToProps = state => ({
  auth: state.auth
})
export default connect(mapStateToProps,{logout}) (Header)
