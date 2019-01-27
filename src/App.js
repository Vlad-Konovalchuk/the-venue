import React, {Component} from 'react';
import './assets/styles.css';
import {Featured} from "./components/Featured";
import {Footer} from "./components/Footer";
import {Header} from "./components/Header/Header";
import {HightLights} from "./components/Hightlights/Hightlights";
import {Location} from "./components/Location";
import {Pricing} from "./components/pricing";
import {VenueNFO} from "./components/venueNFO";
import {Element} from 'react-scroll'


class App extends Component {
    render() {
        return (
            <div className="App"
                 style={{height: "1500px"}}
            >
                <Element name="header">
                    <Header/>
                </Element>
                <Element name="featured">
                    <Featured/>
                </Element>
                <Element name="venueinfo">
                    <VenueNFO/>
                </Element>
                <Element name="highlights">
                    <HightLights/>
                </Element>
                <Element name="pricing">
                    <Pricing/>
                </Element>
                <Element name="location">
                    <Location/>
                </Element>
                    <Footer/>
            </div>
        );
    }
}

export default App;
