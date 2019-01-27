import React from 'react';
import Slider from 'react-slick'
/* Import Images fro slider */
import firstSlide from '../../assets/images/slide_one.jpg';
import secondSlide from '../../assets/images/slide_two.jpg';
import thirdSlide from '../../assets/images/slide_three.jpg';

export const Carousel = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        autoplay: true,
        slidesToShow: 1,
        slidesToScroll: 1
    };
    return (
        <div
            className="carousel_wrapper"
            style={{
                backgroundColor: "red",
                height: `${window.innerHeight}px`,
                overflow: "hidden"
            }}
        >
            <Slider {...settings}>
                <div>
                    <div
                        className="carousel_image"
                        style={{
                            background: `url(${firstSlide})`,
                            height: `${window.innerHeight}px`,
                        }}
                    />
                </div>
                <div>
                    <div
                        className="carousel_image"
                        style={{
                            background: `url(${secondSlide})`,
                            height: `${window.innerHeight}px`,
                        }}
                    />
                </div>
                <div>
                    <div
                        className="carousel_image"
                        style={{
                            background: `url(${thirdSlide})`,
                            height: `${window.innerHeight}px`,
                        }}
                    />
                </div>
            </Slider>
        </div>
    )
};