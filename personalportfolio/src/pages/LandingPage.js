import React, { Component } from "react";
// import Hero from "../components/Hero";
import Container from 'react-bootstrap/Container'
// import Row from "../components/Row";
// import Col from "../components/Col";
import Jumbotron from 'react-bootstrap/Jumbotron'
import PortfolioImage from "../components/Images/PortfolioPic2.jpg";
import PortfolioVideoBackground from "../components/Videos/PortfolioVideoBackground3.mp4";
import FallsSlomo from "../components/Videos/FallsSlomo.mp4";
import "../components/style.css";
import { Link } from "react-router-dom";
// import Image from 'react-bootstrap/Image'

function LandingPage() {
    return (
        <div>

        <Jumbotron>

        <video id="coverVideo" autoPlay loop muted
                // style={{
                //     position: "absolute",
                //     width: "100%",
                //     objectFit: "cover",
                //     zIndex: "1",
                //     opacity: "70%",
                // }}
            >
                <source src={FallsSlomo} type="video/mp4" />
            </video>

            <Container className="landingPageContainer">
            <div style= {{padding: "350px"}}>
            <h1>Hello. My name is Jesse Audije.</h1>
            <h3>I am an aspiring Web Developer</h3>
            <br></br>
            <Link
              to="/about"
              className={
                window.location.pathname === "/about" || window.location.pathname === "/about"
                  ? "nav-link active"
                  : "nav-link"
              }
            >
    <h1>Get to know <span style={{color: "gold"}}> me</span> here</h1>
            </Link>
            </div>
            </Container>
        </Jumbotron>
                
           
             
            
            {/* <Image className="rounded-circle img-fluid" id="portfolioImage" src={PortfolioImage} alt="PortfolioImage" rounded/> */}

          

       

        </div>
    );
}

export default LandingPage;
