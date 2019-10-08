import React, {Component, Fragment} from 'react';
import { HashRouter as Router, Route, Switch, Redir } from 'react-router-dom';
import {Provider} from 'react-redux';
import {Provider as AlertProvider} from 'react-alert';
import AlertTemplate from 'react-alert-template-basic';
import store from '../store'
import ReactDOM from 'react-dom';
import Header from './layout/Header';
import XCHG from './pages/xchg/XCHG';
import Login from './pages/Login';
import Alerts from './layout/Alerts';

const alertOptions ={
    timeout: 3000,
    position: 'top right'
}

class App extends Component {
    render(){
        return (
            <Provider store={store}>
            <AlertProvider template={AlertTemplate} {...alertOptions}>
            <Alerts />
            
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
            
            </AlertProvider>
            </Provider>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'));