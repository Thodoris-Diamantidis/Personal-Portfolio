import { Row, Nav, Col, Container, Tab, TabContainer } from "react-bootstrap"
import {ProjectCard} from './ProjectCard';
import chatBotImage from '../assets/images/chat-bot-image.jpg';
import colorSharp2 from '../assets/images/color-sharp2.png';

export const Projects = () => {

    const projects = [
        {
            title: "ChatBot using Python",
            description: "A very simple ChatBot that can also tell the weather",
            imgUrl: chatBotImage
        },

        {
            title: "ChatBot using Python",
            description: "A very simple ChatBot that can also tell the weather",
            imgUrl: chatBotImage
        },

        {
            title: "ChatBot using Python",
            description: "A very simple ChatBot that can also tell the weather",
            imgUrl: chatBotImage
        }
    ]

            
    return(
           <section className="project" id="project">
                <Container>
                    <Row>
                        <Col>
                        <h2>Projects</h2>
                        <p>In publishing and graphic design, Lorem ipsum is a placeholder text
                         commonly used to demonstrate the visual form of a document or a 
                         typeface without relying on meaningful content. Lorem ipsum may be 
                         used as a placeholder before final copy is available</p>
                         <TabContainer id="projects-tabs" defaultActiveKey="first">
                         <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                            <Nav.Item>
                                <Nav.Link eventKey="first">Tab One</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="second">Tab Two</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                            <Nav.Link eventKey="third">Tab Three</Nav.Link>
                            </Nav.Item>
                            </Nav>
                            <Tab.Content>
                                <Tab.Pane eventKey="first">
                                    <Row>
                                        {
                                            projects.map( (project, index) => {
                                                return (
                                                    <ProjectCard
                                                        key={index}
                                                        {...project}
                                                    />
                                                )
                                            })
                                        }
                                    </Row>
                                </Tab.Pane>
                                <Tab.Pane event="second">Leren Ipsum</Tab.Pane>
                                <Tab.Pane event="third">Loren Ipsum</Tab.Pane>
                            </Tab.Content>
                            </TabContainer>
                        </Col>
                    </Row>
                </Container>
                <img className="background-image-right" src={colorSharp2}></img>
           </section> 
        )
}