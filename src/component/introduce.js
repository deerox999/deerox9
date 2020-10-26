import React, { Component } from 'react';

import sample1 from '../images/sample1.jpg';
import sample2 from '../images/sample2.jpg';
import sample3 from '../images/sample3.jpg';
import Carousel from 'react-bootstrap/Carousel';
import Card from "react-bootstrap/Card";

class App extends Component {
    render() {
        return (
            <div>

                <Card className="bg-dark text-white">
                    <Card.Img src={sample3} alt="sample3" />
                    <Card.ImgOverlay>
                        <Card.Title>우주적인 자기소개입니다.</Card.Title>
                        <Card.Text>
                            범 우주적인~~~~~~~~~~~~~!
                        </Card.Text>
                        <Card.Text>이게무슨 쉬는 프로젝트.. 연습용</Card.Text>
                    </Card.ImgOverlay>
                </Card>

                <br/><hr/>

                <Carousel>
                    <Carousel.Item interval={1000}>
                        <img className="d-block w-100" src={sample1} alt="sample1" />
                        <Carousel.Caption>
                            <h3>First slide label</h3>
                            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item interval={500}>
                        <img className="d-block w-100" src={sample2} alt="sample2" />
                        <Carousel.Caption>
                            <h3>Second slide label</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img className="d-block w-100" src={sample3} alt="sample3" />
                        <Carousel.Caption>
                            <h3>Third slide label</h3>
                            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>

            </div>
        );
    }
}

export default App;