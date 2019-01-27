import React, {Component} from 'react';
import './assets/styles.css';
import {Featured} from "./components/Featured";
import {Header} from "./components/Header/Header";


class App extends Component {
    render() {
        return (
            <div className="App"
                 style={{height: "1500px", background: "cornflowerblue"}}
            >
                <Header/>
                <Featured/>
            </div>
        );
    }
}

export default App;
