import React from 'react';
import {Zoom} from "react-reveal";
import {DefaultButton} from "../Button";


export class Pricing extends React.PureComponent {
    state = {
        prices: [100, 150, 250],
        positions: ['Balcony', 'Medium', 'Star'],
        desc: [
            ' Ut convallis consectetur lectus, vel viverra nisi mollis nec. Etiam elementum pretium tortor quis dignissim.',
            ' Ut convallis consectetur lectus, vel viverra nisi mollis nec. Etiam elementum pretium tortor quis dignissim.',
            ' Ut convallis consectetur lectus, vel viverra nisi mollis nec. Etiam elementum pretium tortor quis dignissim.'
        ],
        linTo: ['http://sales/b', 'http://sales/m', 'http://sales/s'],
        delay: [500, 0, 500]
    };
    showPriceBoxes = () => (
        this.state.prices.map((box, i) => (
            <Zoom delay={this.state.delay[i]} key={i}>
                <div className="pricing_item">
                    <div className="pricing_inner_wrapper">
                        <div className="pricing_title">
                            <span>${this.state.prices[i]}</span>
                            <span>${this.state.positions[i]}</span>
                        </div>
                        <div className="pricing_description">${this.state.desc[i]}</div>
                        <div className="pricing_buttons">
                            <DefaultButton
                                text="Purchase"
                                bck="#ffa800"
                                color="#fff"
                                link={this.state.linTo[i]}
                            />
                        </div>
                    </div>
                </div>
            </Zoom>
        ))
    );

    render() {
        return (
            <div className="bck_black">
                <div className="center_wrapper pricing_section">
                    <h2>Pricing</h2>
                    <div className="pricing_wrapper">
                        {this.showPriceBoxes()}
                    </div>
                </div>
            </div>
        )
    }
}