import React from "react";
// import Hero from "../components/Hero";
// import Container from "../components/Container";
// import Row from "../components/Row";
// import Col from "../components/Col";
import Card from 'react-bootstrap/Card';
import CardDeck from 'react-bootstrap/CardDeck'
import Button from 'react-bootstrap/Button';
import Cinementality from "../components/Images/Cinementality.png";
import CodeQuiz from "../components/Images/codeQuiz.png";
import SoundVesselScreenshot from "../components/Images/Sound-Vessel-Screenshot.png";
import FoodTruckTinder from "../components/Images/foodTruckTinder.png";
import TeamGenerator from "../components/Images/TeamGenerator.png";
import WeatherDashboard from "../components/Images/weatherDashboard.png";
import WorkdayPlanner from "../components/Images/workdayPlanner.png";
import GoogleBookSearchScreenshot from "../components/Images/Google-Book-Search-Screenshot.png";
import EmployeeDirectoryReactScreenshot from "../components/Images/Employee-Directory-React-Screenshot.png";
import DevourTheBurgers from "../components/Images/Devour-The-Burgers-Screenshot.png"
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Carousel from 'react-bootstrap/Carousel';
import Nav from 'react-bootstrap/Nav';
import { Link } from "react-router-dom";



function Portfolio() {
  return (
    <div id="bodyBackground">
    <div className="container">
      <h1>Portfolio page</h1>
      <h2>Projects</h2>

      <Container>

        <Carousel interval={4000} nav-class="red" indicatorClass="red" >
          <Carousel.Item>
            <Row style={{ marginBottom: "20px" }}>

              <CardDeck>

            <Col>
                <Card style={{ width: '18rem', backgroundColor: "gray" }}>
                  <Card.Img variant="top" src={SoundVesselScreenshot} />
                  <Card.Body>
                    <Card.Title><a href="https://murmuring-wave-55769.herokuapp.com/" target="_blank" class="button">Sound Vessel Traffic</a></Card.Title>
                    <Card.Text>
                      
                      </Card.Text>
                    <a href="https://github.com/kaitekelly/Sound-Vessel-Traffic" class="btn btn-primary" target="_blank">GitHub</a>
                  </Card.Body>
                </Card>
              </Col>

              <Col>
                <Card style={{ width: '18rem', backgroundColor: "gray" }}>
                  <Card.Img variant="top" src={Cinementality} />
                  <Card.Body>
                    <Card.Title><a href="https://nameless-island-76490.herokuapp.com/index.html" class="button" target="_blank">CineMentality</a></Card.Title>
                    <Card.Text>
                      
                      </Card.Text>
                    <a href="https://github.com/carooflee/Project-Two" class="btn btn-primary" target="_blank">GitHub</a>
                  </Card.Body>
                </Card>
              </Col>


              <Col>
                <Card style={{ width: '18rem', backgroundColor: "gray" }}>
                  <Card.Img variant="top" src={FoodTruckTinder} />
                  <Card.Body>
                    <Card.Title><a href="https://audijej.github.io/Tinder-for-Food-Trucks/" class="button" target="_blank">FoodTruckTinder</a></Card.Title>
                    <Card.Text>
                    
                      </Card.Text>
                    <a href="https://github.com/audijej/Tinder-for-Food-Trucks" class="btn btn-primary" target="_blank">GitHub</a>
                  </Card.Body>
                </Card>
              </Col>

              </CardDeck>

            </Row>
          </Carousel.Item>

          <Carousel.Item>
            <Row>

              <Col>
                <Card style={{ width: '18rem', backgroundColor: "gray" }}>
                  <Card.Img variant="top" src={GoogleBookSearchScreenshot} />
                  <Card.Body>
                    <Card.Title><a href="https://google-book-search-reactify.herokuapp.com/" target="_blank" class="button">Google Book Search</a></Card.Title>
                    <Card.Text>
                      
                      </Card.Text>
                    <a href="https://github.com/audijej/Google-Book-Search" class="btn btn-primary" target="_blank">GitHub</a>
                  </Card.Body>
                </Card>

              </Col>

              <Col>

                <Card style={{ width: '18rem', backgroundColor: "gray" }}>
                  <Card.Img variant="top" src={EmployeeDirectoryReactScreenshot} />
                  <Card.Body>
                    <Card.Title><a href="https://audijej.github.io/Employee-Directory-React/" target="_blank" class="button">Employee Directory Search React</a></Card.Title>
                    <Card.Text>
                      
                      </Card.Text>
                    <a href="https://github.com/audijej/Employee-Directory-React" class="btn btn-primary" target="_blank">GitHub</a>
                  </Card.Body>
                </Card>

              </Col>

              <Col>
                <Card style={{ width: '18rem', backgroundColor: "gray" }}>
                  <Card.Img variant="top" src={DevourTheBurgers} />
                  <Card.Body>
                    <Card.Title><a href="https://morning-mountain-95441.herokuapp.com/" target="_blank" class="button">Devour The Burgers</a></Card.Title>
                    <Card.Text>
                      
                      </Card.Text>
                    <a href="https://github.com/audijej/devour-the-burgers" class="btn btn-primary" target="_blank">GitHub</a>
                  </Card.Body>
                </Card>
              </Col>

            </Row>

          </Carousel.Item>
        </Carousel>

        <Link
              to="/contact"
              className={window.location.pathname === "/contact" ? "nav-link active" : "nav-link"}
            >
    <h1>Contact <span style={{color: "gold"}}> me</span> here</h1>
            </Link>

      </Container>

      {/* <div>

        <Container fluid>

          <Row style={{marginBottom: "20px"}}>
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
 */}
    </div>
    </div>


  );
}

export default Portfolio;
