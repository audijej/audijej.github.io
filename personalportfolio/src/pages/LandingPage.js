import React, { Component } from "react";
// import Hero from "../components/Hero";
// import Container from "../components/Container";
// import Row from "../components/Row";
// import Col from "../components/Col";
import PortfolioImage from "../components/Images/PortfolioPic2.jpg";
import PortfolioVideoBackground from "../components/Videos/PortfolioVideoBackground3.mp4";
import "../components/style.css";
// import Image from 'react-bootstrap/Image'

function LandingPage() {
    return (
        <div>
            
            {/* <Image className="rounded-circle img-fluid" id="portfolioImage" src={PortfolioImage} alt="PortfolioImage" rounded/> */}

            <video autoPlay loop muted
                style={{
                    position: "absolute",
                    width: "100%",
                    objectFit: "cover",
                    zIndex: "-1",
                    opacity: "70%"
                }}
            >
                <source src={PortfolioVideoBackground} type="video/mp4" />
            </video>

                <div style= {{paddingTop: "250px"}}>
            <h1>Hello. My name is Jesse</h1>
            <h3>I am an aspiring Web Developer</h3>
            </div>

        </div>
    );
}

export default LandingPage;
