import React, { Component } from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import PortfolioImage from "../components/Images/PortfolioPic2.jpg";
import "../components/style.css";
import Image from 'react-bootstrap/Image';
import { Link } from "react-router-dom";


function About() {

  return (
<div id="bodyBackground">
    <div class="shadow p-3 mb-5 bg-black rounded">
      <Row>

      <Col lg={6}>
    <Image className="img-fluid" id="portfolioImage" style={{height:"auto", width: "auto", textAlign:"center", paddingTop: "75px"}} src={PortfolioImage} alt="PortfolioImage" rounded/>
    </Col>

        <Col>
    <h1 id="interests">Hello. My name is Jesse</h1>
    <br></br>
    <h3>I am an aspiring Web Developer</h3>
    <br></br>
    <p id="aboutParagraph">
      I am an aspiring Web Developer with a diverse work background. I have experience in the restaurant industry,
      customer service industry, warehouse and logistics industry and the healthcare industry.
      I am developing a strong working background and vast knowledge base in several programming languages in order to
      become a full stack developer.
      
      I am currently attending the University of Washington coding bootcamp.
      I am mostly interested in front end, UI and UX development.
      When I'm not enhancing my skill set, I love to spend time with my wife, son, and two dogs. We love to travel, shop
      and try new food and restaurants. I am also a hobbyist photographer and videographer. 

    </p>

    </Col>

    <Col>
   <h1 id="interests">Interests</h1>
   <br></br>
    <p>Web Development</p>
    <p>Design</p>
    <p>Photography</p>
    <p>Videography</p>
    <p>Snowboarding</p>
    <p>Traveling</p>
    <p>Motorcycles</p>
    <br></br>

    <Link
    to="/portfolio"
    className={window.location.pathname === "/portfolio" ? "nav-link active" : "nav-link"}
            >
    <h1>See my <span style={{color: "gold"}}> projects</span> here</h1>
    </Link>

    <Link
    to="/photos"
    className={window.location.pathname === "/photos" ? "nav-link active" : "nav-link"}
            >
    <h1>See my <span style={{color: "gold"}}> photos</span> here</h1>
    </Link>

    <Row>
      <Col>
      <h1>Languages</h1>

      <p>HTML</p>
      <p>CSS</p>
      <p>Javascript</p>
      <p>node.js</p>
      <p>jquery</p>
      <p>JSON</p>
      <p>SQL</p>
      <p>Sequelize</p>
      <p>Mongo</p>
      <p>Mongoose</p>
      <p>React</p>
      </Col>
      
    </Row>
    </Col>

   
     
    </Row>

   
  </div>

   
</div>
    );
}

export default About;
