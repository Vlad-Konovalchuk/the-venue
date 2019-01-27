import {Fade, Slide} from "react-reveal";
import React from 'react';
import {DefaultButton} from "../Button";

export class Discount extends React.PureComponent {
    state = {
        saleStart: 0,
        saleEnds: 40
    };
    percentage = () => {
        if (this.state.saleStart < this.state.saleEnds) {
            this.setState({
                saleStart: this.state.saleStart + 1
            })
        }
    };

    componentDidUpdate(prevProps, prevState, snapshot) {
        setTimeout(() => {
            this.percentage();
        }, 30)
    }

    render() {
        return (
            <div className="center_wrapper">
                <div className="discount_wrapper">
                    <Fade
                        onReveal={this.percentage}
                    >
                        <div className="discount_porcentage">
                            <span>{this.state.saleStart}%</span>
                            <span>OFF</span>
                        </div>
                    </Fade>
                    <Slide right>
                        <div className="discount_description">
                            <h3>Purchase tickets before 20th JUNE</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut suscipit neque in diam
                                feugiat
                                fringilla. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac
                                turpis
                                egestas. Nullam sagittis hendrerit vestibulum. Suspendisse vel nisi ut tortor sagittis
                                auctor.
                                Mauris vulputate, nulla id mollis varius, ante quam commodo turpis, vitae blandit nisi
                                elit
                                at
                                neque. Nullam ultricies id velit sit amet malesuada. Ut convallis consectetur lectus,
                                vel
                                viverra nisi mollis nec. Etiam elementum pretium tortor quis dignissim.
                            </p>
                            <DefaultButton
                                text="Purchase tickets"
                                bck="#ffa800"
                                color="#fff"
                                link="#"
                            />
                        </div>
                    </Slide>
                </div>
            </div>
        )
    }
};