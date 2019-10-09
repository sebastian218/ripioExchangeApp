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
import Register from './pages/Register';
import PrivateRoute from './common/PrivateRoute';
import { loadUser } from '../actions/auth';

const alertOptions ={
    timeout: 3000,
    position: 'top right'
}

class App extends Component {

    componentDidMount() {
        store.dispatch(loadUser());
    }

    render(){
        return (
            <Provider store={store}>
            <AlertProvider template={AlertTemplate} {...alertOptions}>
            <Alerts />
            <Router>
                 <Switch>
                 <Route  path='/' exact  component={Login} />
                 <Route path='/register' exact component={Register} />
                 <PrivateRoute path='/xchg' exact component={XCHG} />
                 </Switch>
            </Router>
            </AlertProvider>
            </Provider>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'));