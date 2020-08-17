import React from "react";
// import Hero from "../components/Hero";
// import Container from "../components/Container";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Contact() {
  return (

    <div id="bodyBackground">
    <div className="container" style= {{textAlign:"center"}}>
      <h1>Contact Page</h1>
      <Row style={{ paddingTop: "200px", paddingLeft: "275px", paddingBottom: "200px" }}>

        <ul>
          <h3>GitHub</h3>
          <li class="social-media-icon"><a href="https://github.com/audijej" target="blank">
            <i class="fab fa-github"></i></a></li>
        </ul>
        <ul>
          <h3>Social Media</h3>
          <li class="social-media-icon"><a href="https://www.instagram.com/audigoodness/" target="blank">
            <i class="fab fa-instagram-square"></i></a></li>
        </ul>

        <ul>
          <h3>Linked-In</h3>

          <li class="social-media-icon"><a href="https://www.linkedin.com/in/jesse-a-0617881a2?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BkIR0XT9mQlaD%2F6EEsl6UAQ%3D%3D"
            target="blank"><i class="fab fa-linkedin" aria-hidden="true"></i></a></li>

        </ul>

        <ul>
          <h3>Resume</h3>

          <li class="social-media-icon"><a
            href="https://drive.google.com/file/d/1mF1bSgnKcICo6nYrBNTGqWxJ5PQWJWNi/view?usp=sharing/"
            target="blank"><i class="fas fa-file"></i></a></li>

        </ul>
      </Row>
    </div>
    </div>
  );
}

export default Contact;
