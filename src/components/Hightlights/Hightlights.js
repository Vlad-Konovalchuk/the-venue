import React from 'react';
import {Description} from "./Description";
import {Discount} from "./Discount";

export const HightLights = () => {
    return (
        <div className="highlight_wrapper">
            <Description/>
            <Discount/>
        </div>
    )
};