import React, { Component } from 'react';
import {Grid, Col, Image} from 'react-bootstrap';
import './About.css';


export default class About extends Component {
  render() {
    return (
      <div>
          <Image src="assets/Pinterest-pict7.jpg" className="header-image"/>
          <Grid>
              <Col xs={12} sm={8} smOffset={2}>
                <Image src="assets/Pinterest-pict11.jpg" className="about-profile-pic" rounded />
                <h3>Udine Dinasa</h3>
                <p>anyone can paint. you cant do anything here, So dont worry about it. Life is to Short to be unhappy</p>
                <p>Let doing something good to feel this world</p>
                <p>I want to be A good </p>
                <p>Sometime we dont know what we do, but if we did we will know what is</p>
                <p>anyone can paint. you cant do anything here, So dont worry about it. Life is to Short to be unhappy</p>
              </Col>
          </Grid>
      </div>
    )
  }
}
