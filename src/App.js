import React, {Component} from 'react';
import './assets/styles.css';
import {Featured} from "./components/Featured";
import {Header} from "./components/Header/Header";
import {HightLights} from "./components/Hightlights/Hightlights";
import {VenueNFO} from "./components/venueNFO";


class App extends Component {
    render() {
        return (
            <div className="App"
                 style={{height: "1500px"}}
            >
                <Header/>
                <Featured/>
                <VenueNFO/>
                <HightLights/>
            </div>
        );
    }
}

export default App;
