import React from 'react';
import {Zoom} from "react-reveal";

import calendar_img from '../../assets/icons/calendar.png';
import location_img from '../../assets/icons/location.png';

export const VenueNFO = () => {
    return (
        <div className="bck_black">
            <div className="center_wrapper">
                <div className="vn_wrapper">
                    <Zoom duration={400}>
                        <div className="vn_item">
                            <div className="vn_outer">
                                <div className="vn_inner">
                                    <div className="vn_icon_square bck_red"/>
                                    <div className="vn_icon"
                                         style={{
                                             background: `url(${calendar_img})`
                                         }}
                                    />
                                    <div className="vn_title">
                                        Event Date & Time
                                    </div>
                                    <div className="vn_desc">
                                        16 December 2019 @11:00pm
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Zoom>
                    <Zoom duration={400} delay={400}>
                        <div className="vn_item">
                            <div className="vn_outer">
                                <div className="vn_inner">
                                    <div className="vn_icon_square bck_yellow"/>
                                    <div className="vn_icon"
                                         style={{
                                             background: `url(${location_img})`
                                         }}
                                    />
                                    <div className="vn_title">
                                        Event Location
                                    </div>
                                    <div className="vn_desc">
                                        345 Speer Street Dakland, CA 9835
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Zoom>
                </div>
            </div>
        </div>
    )
}