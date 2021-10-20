import React from 'react';
import { Carousel } from 'react-bootstrap';


const Banner = () => {
    
    return (
        <>
            <Carousel >
                <Carousel.Item>
                    <img 
                        className="d-block w-100 d-cover "
                        src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNLcrUos2CLb5-6tusY-gMGOBJduYRsRcSMQ&usqp=CAU"}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0CcNvQkWC3salhVLTUURdiM6BP3Gb_IvreQ&usqp=CAU"}
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqSn26u0Q3V_mv1Ix19irktaQsyieEJZHTLA&usqp=CAU"}
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        
                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </>
    );
};

export default Banner;