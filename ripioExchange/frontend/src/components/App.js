import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Header from './layout/Header';
import XCHG from './pages/xchg/XCHG';

class App extends Component {
    render(){
        return (
            <div className="">
                <Header />
                <XCHG />
            </div>
            
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'));