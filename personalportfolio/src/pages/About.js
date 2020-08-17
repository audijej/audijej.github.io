import React, { Component } from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import PortfolioImage from "../components/Images/PortfolioPic2.jpg";
import "../components/style.css";
import Image from 'react-bootstrap/Image'

function About() {
  return (
<div>
    <div class="shadow p-3 mb-5 bg-black rounded">
      <Row>

      <Col lg={6}>
    <Image className="rounded-circle img-fluid" id="portfolioImage" style={{height:"100%", width: "100%", textAlign:"center"}} src={PortfolioImage} alt="PortfolioImage" rounded/>
    </Col>

        <Col>
    <h1>Hello. My name is Jesse</h1>
    <p>I am an aspiring Web Developer</p>
    <p>
      I am an aspiring Web Developer with a diverse work background. I have experience in the restaurant industry,
      customer service industry, warehouse and logistics industry and the healthcare industry.
      I am developing a strong working background and vast knowledge base in several programming languages in order to
      become a full stack developer.
      
      I am currently attending the University of Washington coding bootcamp.
      I am mostly interested in front end, UI and UX development.
      When I'm not enhancing my skill set, I love to spend time with my wife, son, and two dogs. We love to travel, shop
      and try new food and restaurants

    </p>
    </Col>

    <Col>
   <h1>Interests</h1>
   <p>Snowboarding</p>
    <p>Traveling</p>
    <p>Motorcycles</p>
    <p>Firearms</p>
    <p>Photography</p>
    <p>Videography</p>
    </Col>
     
    </Row>
  </div>

   
</div>
    );
}

export default About;
