import React, {Component} from 'react';
import { HashRouter as Router, Route, Switch, Redir } from 'react-router-dom';
import ReactDOM from 'react-dom';
import Header from './layout/Header';
import XCHG from './pages/xchg/XCHG';
import Login from './pages/Login';


class App extends Component {
    render(){
        return (
            <Router>
                <div className="container">
                <Route  path='/' exact  component={Login} />
                </div>
                
            <div className="">
                <Route path='/xchg' render={(props)=>(
                        <React.Fragment>
                            <Header />
                            <XCHG />
                        </React.Fragment>
                )} />
            </div>
            </Router>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'));