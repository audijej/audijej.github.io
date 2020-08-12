import React, { Component } from "react";
// import Hero from "../components/Hero";
// import Container from "../components/Container";
// import Row from "../components/Row";
// import Col from "../components/Col";
import PortfolioImage from "../components/Images/PortfolioPic2.jpg";
import "../components/style.css";
import Image from 'react-bootstrap/Image'

function About() {
  return (
<div>
    <h1>Hello. My name is Jesse</h1>
    <p>I am an aspiring Web Developer</p>
    <Image className="rounded-circle img-fluid" id="portfolioImage" src={PortfolioImage} alt="PortfolioImage" rounded/>

</div>
    );
}

export default About;
