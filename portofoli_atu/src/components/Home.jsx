import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import {Jumbotron, Grid, Row, Col, Image, Button} from 'react-bootstrap';
import './Home.css';

class Home extends Component {
  render() {
    return (
      <Grid>
          <Jumbotron>
              <h2>Welcome In react Bootstrap</h2>
              <p>Ini adalah Website menggunakan React Bootstrap dan React Router</p>
            <Link to="/about">
                <Button bsStyle="primary">Link Ke News</Button>
            </Link>
          </Jumbotron>
          <Row className="show-grid text-center">
            <Col xs={12} sm={4} className="person-wrapper">
            <Image src="assets/Pinterest-pict1.jpg" circle className="profile-pic"/> 
            <h3>Filda tuzahra</h3>
            <p>That's a crooked Tree, Well Send him to Washington. These little sort hair</p>
            </Col>
            <Col xs={12} sm={4} className="person-wrapper">
            <Image src="assets/Pinterest-pict2.jpg" circle className="profile-pic"/> 
            <h3>Filda tuzahra</h3>
            <p>That's a crooked Tree, Well Send him to Washington. These little sort hair</p>
            </Col> 
            <Col xs={12} sm={4} className="person-wrapper">
            <Image src="assets/Pinterest-pict3.jpg" circle className="profile-pic"/> 
            <h3>Filda tuzahra</h3>
            <p>That's a crooked Tree, Well Send him to Washington. These little sort hair</p>
            </Col>              
          </Row>
          
      </Grid>
    )
  }
}

export default Home;
