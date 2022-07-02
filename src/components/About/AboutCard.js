import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            <p className="bio">
              I fell in love with technology at a young age and now pursuing my passion.
              <br />
              <br />
            </p>
            <p className="bio">I am a former project manager turned full stack web developer. I recently earned a certificate from the<b className="purple">University of Washington Coding Program,</b> with newly developed skills in <b className="purple">Javascript, CSS, Node.js, Express, React.js and much more.</b>
              As a <b className="purple">project manager</b>, I am a leader with strengths in communication and cultivating relationships. I have a strong ability to work independently as well as a team. I am also a strategic thinker and self-motivated individual able to manage several projects and perform under pressure in fast-paced, deadline-focused environments.
              As a <b className="purple">web developer</b>, I am an innovative problem solver passionate about developing apps, with a focus on mobile-first design and development. Having skills in multiple facets of a business gives me a better understanding. I’m excited to leverage my skills as part of a rapid, quality-driven team to build better experiences for all.
              Please feel free to check out my projects.</p>
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Volleyball
            </li>
            <li className="about-activity">
              <ImPointRight /> Running
            </li>
            <li className="about-activity">
              <ImPointRight /> Meditation
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that improve our daily lives"{" "}
          </p>
          <footer className="blockquote-footer">Minhvan</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
