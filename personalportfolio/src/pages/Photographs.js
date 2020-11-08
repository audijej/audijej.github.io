import React, { Component } from "react";
import Container from 'react-bootstrap/Container'
import { Link } from "react-router-dom";
import Jumbotron from 'react-bootstrap/Jumbotron';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import "../components/style.css";
import ArboretumPhoto from "../components/Images/arboretum-1.jpg";
import FranklinFallsPhoto1 from "../components/Images/Franklin-Falls-1.jpg";
import FranklinFallsPhoto3 from "../components/Images/Franklin-Falls-3.jpg";
import SpaceNeedlePhoto3 from "../components/Images/Space-Needle-3.jpg";
import SpaceNeedlePhoto4 from "../components/Images/Space-Needle-4.jpg";
import PumpkinPatchPhoto2 from "../components/Images/pumpkin-patch-2.jpg";
import PikePlaceEveningPhoto from "../components/Images/Pike-Place-Evening-1.jpg";
import SeattleTrailingLights1 from "../components/Images/Seattle-Trailing-Lights-1.jpg"


function PhotographsPage() {
    return (
        <div>
            <Jumbotron>
                <h1>Art</h1>
            </Jumbotron>

            <div>
                <Row>
                    <Col>
                        <Image className="img-fluid" id="portfolioImage" style={{ height: "auto", width: "auto", textAlign: "center", paddingTop: "75px" }} src={ArboretumPhoto} alt="PortfolioImage" rounded />
                    </Col>
                    <Col>
                        <Image className="img-fluid" id="portfolioImage" style={{ height: "auto", width: "auto", textAlign: "center", paddingTop: "75px" }} src={FranklinFallsPhoto1} alt="PortfolioImage" rounded />
                    </Col>
                </Row>

                <Row>
                    <Col>
                        <Image className="img-fluid" id="portfolioImage" style={{ height: "auto", width: "auto", textAlign: "center", paddingTop: "75px" }} src={PumpkinPatchPhoto2} alt="PortfolioImage" rounded />
                    </Col>
                    <Col>
                        <Image className="img-fluid" id="portfolioImage" style={{ height: "auto", width: "auto", textAlign: "center", paddingTop: "75px" }} src={FranklinFallsPhoto3} alt="PortfolioImage" rounded />
                    </Col>
                </Row>

                <Row>
                    <Col>
                        <Image className="img-fluid" id="portfolioImage" style={{ height: "auto", width: "auto", textAlign: "center", paddingTop: "75px" }} src={SeattleTrailingLights1} alt="PortfolioImage" rounded />
                    </Col>
                    <Col>
                        <Image className="img-fluid" id="portfolioImage" style={{ height: "auto", width: "auto", textAlign: "center", paddingTop: "75px" }} src={PikePlaceEveningPhoto} alt="PortfolioImage" rounded />
                    </Col>
                </Row>
            </div>
        </div>
    )
}

export default PhotographsPage;