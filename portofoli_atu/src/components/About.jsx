import React, { Component } from 'react';
import {Grid, Col, Image} from 'react-bootstrap';
import './About.css';


export default class About extends Component {
  render() {
    return (
      <div>          
          <div >
          <Image src="assets/img/floower1.jpg" className="header-image " />
            <div className="bottom-left"></div>
            <div className="top-left"></div>
            <div className="top-right"></div>
            <div className="bottom-right"></div>
            <div className="centered"><h1 className="about" ><b>ABOUT ME</b></h1></div>
            </div>
          <Grid>
            <h1> Filda Fatimah Tuzahra</h1>
            <Col xs={12} sm={2}>
            
            </Col>
            <Col xs={12} sm={8}>
            <h3>&emsp;&emsp;Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquid expedita, rerum ipsum dolore ea earum quis quo dolorum omnis deleniti. Eum quaerat officia alias et minus minima nemo a pariatur?
              <br/>&emsp;&emsp;Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias nisi adipisci similique tempore voluptatibus, consectetur sint culpa veniam nemo reprehenderit modi, autem itaque quas at sapiente nostrum hic rem sequi.
            </h3>
            <div className="about_photo">
                <Image src="http://mailovedesign.com/chloeandmarc/wp-content/uploads/2015/11/avatar.png" alt="About Me" />
                </div>
                <hr style={{height:"8px",width:"20px", backgroundColor:"#CAD7D8"}}/>
            <div className="widget-social">
                  <a href="#" target="_top"><i className="fab fa-facebook" /></a>&emsp;
                  <a href="#" target="_top"><i className="fab fa-twitter" /></a>&emsp;
                  <a href="#" target="_top"><i className="fab fa-instagram" /></a>&emsp;
                  <a href="#" target="_top"><i className="fab fa-pinterest" /></a>&emsp;
                  <a href="#" target="_top"><i className="fa fa-heart" /></a>
            </div><br/><br/>  
            </Col>
            <Col xs={12} sm={2}>
            
            </Col>
          </Grid>
                  
          
          
      </div>
    )
  }
}
