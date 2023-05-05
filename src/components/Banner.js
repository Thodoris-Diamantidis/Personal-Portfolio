import { useState, useEffect} from 'react'
import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { ArrowRightSquare} from 'react-bootstrap-icons'
import headerImg from '../assets/images/astronaut.svg'
import { HashLink } from 'react-router-hash-link';
import {
  BrowserRouter as Router
} from "react-router-dom";

export function Banner() {
  const [loopNum, setLoopNum] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)
  const toRotate = ["Web Developer", "Web Designer", "Python/Java enthusiast"]
  const [text, setText] = useState('')
  const [delta, setDelta] = useState(300- Math.random() * 100)
  const period = 1500

  useEffect( () => {
    let ticker = setInterval(() => {
        tick()
    }, delta)

    return () => { clearInterval(ticker)}
  }, [text])

  const tick = () => {
    let i = loopNum % toRotate.length
    let fullText = toRotate[i]
    let updatedText = isDeleting? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1)

    setText(updatedText)

    if(isDeleting){
        setDelta(prevDelta => prevDelta / 2)
    }

    if(!isDeleting && updatedText === fullText){
        setIsDeleting(true)
        setDelta(period)
    }else if(isDeleting && updatedText === ''){
        setIsDeleting(false)
        setLoopNum(loopNum + 1)
        setDelta(500)
    }
  }
  return (
    <Router>
    <section className='banner' id='home'>
        <Container>
            <Row className='align-items-center'>
                <Col xs={12} md={6} xl={7}>
                    <span className='tagline'>Welcome to my Portfolio</span>
                    <h1>Hi I'm Theodore <span className='wrap'>{text}</span></h1>
                    <p>Hey there! I'm a college student studying computer engineering.
                        I love creating cool stuff with technology and am almost done with college.
                        During my time in college, I've learned a ton about programming languages,
                        computer systems, and all sorts of tech stuff. I enjoy trying out new ideas
                        and seeing what I can build with my skills. I can't wait to graduate and start
                        my career as a computer engineer, where I hope to help make the world a better place with technology.
                    </p>
                    <HashLink to="#connect">
                        <button className='vvd'><span>Let's connect </span><ArrowRightSquare size={25}/></button>
                    </HashLink>
                </Col>
                <Col xs={12} md={6} xl={5}>
                    <img src={headerImg} alt="Header Image"/>
                </Col>
            </Row>
        </Container>
    </section>
    </Router>
  )
}