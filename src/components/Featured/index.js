import React from 'react';
import {Carousel} from "./Carousel";
import {CountDown} from "./CountDown";


export const Featured = () => {
    return (
        <div style={{position: 'relative'}}>
            <Carousel/>
            <div className="artist_name">
                <div className="wrapper">
                    Ariana Granda
                </div>
            </div>
            <CountDown/>
        </div>
    )
};