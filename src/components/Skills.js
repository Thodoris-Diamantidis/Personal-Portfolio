import { Container, Col, Row } from "react-bootstrap"
import Carousel from 'react-multi-carousel'
import "react-multi-carousel/lib/styles.css"
import meter2 from "../assets/images/meter2.svg"
import meter3 from "../assets/images/meter3.svg"
import meter1 from "../assets/images/meter1.svg"
import colorSharp from "../assets/images/color-sharp.png"

export const Skills = () => {

    const responsive = {
        superLargeDesktop: {
            breakpoint: {max:4000, min: 3000},
            items:5
        },
        desktop: {
            breakpoint: {max:3000, min: 1024},
            items:3
        },
        tablet: {
            breakpoint: {max: 1024, min :464},
            items:2
        },
        mobile: {
            breakpoint: {max: 464, min: 0},
            items:1
        }
    }

    return (
        <section className='skill' id='skills'>
            <Container>
                <Row>
                    <Col>
                        <div className="skill-bx">
                            <h2>
                                Skills
                            </h2>
                            <p>I have experience in web design and web development, using technologies such as React and Node.
                                js to create dynamic and responsive web applications. I am familiar with front-end
                                development frameworks and have a good understanding of web design principles. In addition,
                                I have knowledge of Python and Java programming languages and have used them to develop
                                various software applications. Overall, I am a versatile software developer with experience
                                in multiple technologies and a passion for creating innovative solutions
                            </p>
                            <Carousel responsive={responsive} infinite={true} className="skill-slider">
                                <div className="item">
                                    <img src={meter2} alt="Image"/>
                                    <h5>Web Development</h5>
                                </div>

                                <div className="item">
                                    <img src={meter2} alt="Image"/>
                                    <h5>Java</h5>
                                </div>

                                <div className="item">
                                    <img src={meter2} alt="Image"/>
                                    <h5>Python</h5>
                                </div>

                                <div className="item">
                                    <img src={meter2} alt="Image"/>
                                    <h5>Web Designer</h5>
                                </div>
                            </Carousel>
                        </div>
                    </Col>
                </Row>
            </Container>
            <img className="background-image-left" src={colorSharp}/>
        </section>
    )
}