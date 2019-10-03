import React, { Component } from 'react'

export class Login extends Component {

    render() {

        return (

         <div>
             <nav className="navbar ">
                 <a>
                     <img src="../../../static/assets/imgs/ripioLogin2.png" />
                 </a>
                 <div className="">
                    <ul class="navbar-nav" >
                         <li class="nav-item active">
                            <a class="nav-link" href="#">Login</a>
                         </li>
                         <li class="nav-item">
                            <a class="nav-link" href="#">Register</a>
                         </li>
                     </ul>
                 </div>
             </nav>
         </div>

        )
    }
}

export default Login
