import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import employee from "../../Assets/Projects/employeetracker.png";
import dinnermovie from "../../Assets/Projects/dinnermovie.png";
import budgettracker from "../../Assets/Projects/budgettracker.png";
import ecommerce from "../../Assets/Projects/commerce.png";
import notetaker from "../../Assets/Projects/notetaker.png";
import fitnesstracker from "../../Assets/Projects/fitnesstracker.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={dinnermovie}
              isBlog={false}
              title="Dinner and A Movie"
              description="Recipe and movie search application using external APIs for food and movie based on search criteria"
              ghLink="https://github.com/mple06/dinner-and-a-movie"
              demoLink="https://deannaboiani.github.io/dinner-and-a-movie/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ecommerce}
              isBlog={false}
              title="E-Commerce Back End"
              description="An E-Commerce back end application that tracks a database holding product, category and tag information, and provides get, post, put and delete route functionality."
              ghLink="https://github.com/mple06/e-commerce-back-end"
            // demoLink="https://chatify-49.web.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={fitnesstracker}
              isBlog={false}
              title="Fitness Tracker"
              description="A simple workout tracker application utilizing Mongoose and MongoDB. Users can do many things such as create a new workout and choose between cardio or resistance, create multiple workouts in one day, view last workout, and view a dashboard of the last 7 days and more."
              ghLink="https://github.com/mple06/workout-tracker"
              demoLink="https://workworkout.herokuapp.com"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={budgettracker}
              isBlog={false}
              title="Budget Tracker"
              description="A budget tracker application allowing users to track their money online and offline. Great for when you're travelling or have no service."
              ghLink="https://github.com/mple06/budget-tracker"
              demoLink="https://trackmymonies.herokuapp.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={employee}
              isBlog={false}
              title="Employee Tracker"
              description="Employee Tracker is a content management system application using command lines. The application has many uses such has view or add departments, view, add or update an employee, view or all roles and much more!"
              ghLink="https://github.com/mple06/employee-tracker"
            // demoLink="https://plant49-ai.herokuapp.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={notetaker}
              isBlog={false}
              title="Note Taker"
              description="Life can get crazy! With this scheduler, you can plan out your day so it's not so hectic. Full responsive. Entries are saved once lock icon is clicked. The entry will highlight a certain color depending on the time."
              ghLink="https://github.com/mple06/note-taker"
              demoLink="https://notetakerml.herokuapp.com/notes"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
