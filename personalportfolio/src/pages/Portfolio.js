import React from "react";
// import Hero from "../components/Hero";
// import Container from "../components/Container";
// import Row from "../components/Row";
// import Col from "../components/Col";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Cinementality from "../components/Images/Cinementality.png";
import CodeQuiz from "../components/Images/codeQuiz.png";
import FoodTruckTinder from "../components/Images/foodTruckTinder.png";
import TeamGenerator from "../components/Images/TeamGenerator.png";
import WeatherDashboard from "../components/Images/weatherDashboard.png";
import WorkdayPlanner from "../components/Images/workdayPlanner.png";
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col'


function Portfolio() {
  return (
    <div className="container">
      <h1>Portfolio page</h1>
      <h2>Projects</h2>

      <div>

        <Container fluid>

          <Row>
            <Col>
              <Card style={{ width: '18rem', backgroundColor: "gray" }}>
                <Card.Img variant="top" src={Cinementality} />
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
                  </Card.Text>
                  <Button variant="primary">Go somewhere</Button>
                </Card.Body>
              </Card>
            </Col>

            <Col>

              <Card style={{ width: '18rem', backgroundColor: "gray" }}>
                <Card.Img variant="top" src={FoodTruckTinder} />
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
                  </Card.Text>
                  <Button variant="primary">Go somewhere</Button>
                </Card.Body>
              </Card>

            </Col>

            <Col>

              <Card style={{ width: '18rem', backgroundColor: "gray" }}>
                <Card.Img variant="top" src={CodeQuiz} />
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
                  </Card.Text>
                  <Button variant="primary">Go somewhere</Button>
                </Card.Body>
              </Card>

            </Col>

          </Row>

          <Row>

            <Col>
              <Card style={{ width: '18rem', backgroundColor: "gray" }}>
                <Card.Img variant="top" src={TeamGenerator} />
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
                  </Card.Text>
                  <Button variant="primary">Go somewhere</Button>
                </Card.Body>
              </Card>

            </Col>

            <Col>

              <Card style={{ width: '18rem', backgroundColor: "gray" }}>
                <Card.Img variant="top" src={WeatherDashboard} />
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
                  </Card.Text>
                  <Button variant="primary">Go somewhere</Button>
                </Card.Body>
              </Card>

            </Col>

            <Col>
              <Card style={{ width: '18rem', backgroundColor: "gray" }}>
                <Card.Img variant="top" src={WorkdayPlanner} />
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
                  </Card.Text>
                  <Button variant="primary">Go somewhere</Button>
                </Card.Body>
              </Card>
            </Col>

          </Row>

        </Container>

      </div>

    </div>


  );
}

export default Portfolio;
