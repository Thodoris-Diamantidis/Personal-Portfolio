import { Row, Nav, Col, Container, Tab, TabContainer } from "react-bootstrap"
import {ProjectCard} from './ProjectCard';
import chatBotImage from '../assets/images/chat-bot-image.jpg';
import colorSharp2 from '../assets/images/color-sharp2.png';

export const Projects = () => {

    const projects = [
        {
            title: "A Personal Web Portfolio",
            description: "My personal portfolio is a web application built using React and Node.js that showcases my skills, experience, and software development projects. The portfolio includes a home page, about me section, skills section, and projects section, with project details, screenshots, and links to live demos or source code repositories. It also includes a contact form for users to get in touch with me.",
            imgUrl: chatBotImage,
            url: "https://github.com/Thodoris-Diamantidis/Personal-Portfolio"
        },

        {
            title: "ChatBot using Python",
            description: "My ChatBot project is an artificial intelligence program that uses natural language processing to simulate human-like conversations with users. The ChatBot was built with Python and can handle a variety of user requests, from simple greetings to more complex tasks such as telling the weather. The ChatBot has a user-friendly web interface and demonstrates my skills in creating functional and engaging software applications.",
            imgUrl: chatBotImage,
            url: "https://github.com/Thodoris-Diamantidis/ChatBot"
        },

        {
            title: "Currently working on",
            description: "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available",
            imgUrl: chatBotImage,
            url: "EMPTY"
        }
    ]

            
    return(
           <section className="project" id="project">
                <Container>
                    <Row>
                        <Col>
                        <h2>Projects</h2>
                        <p>Welcome to my project portfolio! Here, you can browse my collection of software projects showcasing my skills in web design, web development, and programming.
                             From building responsive websites with React and Node.js to creating artificial intelligence programs with Python, 
                             each project demonstrates my passion for learning and applying new technologies. Browse through my projects and feel
                              free to get in touch if you have any questions or would like to collaborate on a project together.</p>
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