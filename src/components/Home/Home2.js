import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              Welcome to my <span className="purple"> Portfolio! </span>
              <br /> Please take a look around.
            </h1>
            {/* <p className="home-about-body">
              I fell in love with technology at a young age and now pursuing my passion.
              <br />
              <br />
              <br />
              My field of Interest's are &nbsp;
              <i>
                <b className="purple">creating application to improve everyday life </b> and
                {" "}
                <b className="purple">
                  making games.
                </b>
                <br />
                <br />
                <p className="bio"><span className="skillHeader"><b className="purple">Some skills</b> I bring to the table:</span>
                  <ul className=" skillList">
                    <li className="skill">JavaScript</li>
                    <li className="skill">ReactJS</li>
                    <li className="skill">HTML & CSS</li>
                    <li className="skill">Node</li>
                    <li className="skill">Express</li>
                    <li className="skill">SQL</li>
                    <li className="skill">MongoDB</li>
                    <li className="skill">Sequelize</li>
                    <li className="skill">Git/GitHub</li>
                    <li className="skill">Project Management</li>
                  </ul>
                </p>
              </i>
            </p> */}
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/mple06"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              {/* <li className="social-icons">
                <a
                  href="https://twitter.com/Soumyajit4419"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li> */}
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/minhvanle06/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              {/* <li className="social-icons">
                <a
                  href="https://www.instagram.com/s.o.u.m.y.a_j.i.t/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li> */}
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
