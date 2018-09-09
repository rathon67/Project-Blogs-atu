import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import {Jumbotron, Grid, Row, Col, Image, Button, Carousel,Badge, Well} from 'react-bootstrap';
import './Home.css';

class Home extends Component {
  render() {
    
    return (
      <div>
      <Grid>
          {/* Jumbotron section */}
          <Jumbotron>
              <h1 style={{fontFamily:"sail,cursive"}}>A lucky little girl, flying high, and radiate positive energy.</h1>
              <p>And suddenly you know... It`s time to start something new and trust the maigc of beginnings</p>
            <Link to="/about">
                <Button bsStyle="primary">About</Button>
            </Link>
          </Jumbotron>
          
          {/* Newest Post section */}
          <div className="latestpost"> 
            <span className="category"><h1>LATEST POST</h1></span>
            <hr style={{height:"10px", backgroundColor:"#CAD7D8"}}/>
            <Link className="tittle-latestpost" to="/" style ={{textDecoration:"none"}}> <h2 style ={{backgroundColor:"#f1f1f1", color:"black"}}>FLORALS, TOO, CAN BE COOL AND EDGY</h2></Link>
            <span className="date">September 5, 2018</span>
            <img width={1100}  alt="900x500" src="assets/img/maxresdefault.jpg"/><br/><br/><br/>
            
            <a className="ghost" href="" style={{textDecoration:"none",padding:"10px"}}>CONTINUE READING</a><br/><br/>
            <hr style={{height:"8px", backgroundColor:"#CAD7D8"}}/>
            
            <Link to="" style={{textDecoration:"none", color:"#D5D5D5"}}>Leave a comment</Link>
            <br/><br/>	
            
              
              <i class="fab fa-pinterest"></i>&emsp;
              <i class="fab fa-instagram"></i>&emsp;
              <i class="fab fa-facebook"></i>&emsp;
              <i class="fab fa-twitter"></i>
             
            
          </div>
     
          
        </Grid>
          
        {/* Blog section */}
          <Row>
          <section className="publicaciones-blog-home">
            <div className="container">
              <div className>
                <h2 style={{color:"#9AC2CC"}}>Lorem  <b>Ipsum</b></h2>
                <div className="row-page row">
                  <div className="col-page col-sm-8 col-md-6">
                    <a href className="black fondo-publicacion-home">
                      <div className="img-publicacion-principal-home">
                        <img className src="https://placeholdit.imgix.net/~text?txtsize=34&txt=&w=500&h=300" />
                      </div>
                      <div className="contenido-publicacion-principal-home">
                        <h3>Neque porro quisquam est qui dolorem ipsum</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed placerat porta ex, sed ullamcorper ipsum lacinia nec.<span>...</span></p>
                      </div>
                      <div className="mascara-enlace-blog-home">
                        <span>Lorem </span>
                      </div>
                    </a>
                  </div>
                  <div className="col-page col-sm-8 col-md-6">
                    <a href className="black fondo-publicacion-home">
                      <div className="img-publicacion-principal-home">
                        <img className src="https://placeholdit.imgix.net/~text?txtsize=34&txt=&w=500&h=300" />
                      </div>
                      <div className="contenido-publicacion-principal-home">
                        <h3>Neque porro quisquam est qui dolorem ipsum</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed placerat porta ex, sed ullamcorper ipsum lacinia nec.<span>...</span></p>
                      </div>
                      <div className="mascara-enlace-blog-home">
                        <span>Lorem </span>
                      </div>
                    </a>
                  </div>
                  <div className="col-page col-sm-4 col-md-3">
                    <a href="#" className="todas-las-publicaciones-home">
                      <span>Neque porro quisquam est qui dolorem ipsum</span>
                    </a>
                  </div>
                  <div className="hidden-sm col-page col-sm-4 col-md-3">
                    <a href className="fondo-publicacion-home">
                      <div className="img-publicacion-home">
                        <img className="img-responsive" src="https://placeholdit.imgix.net/~text?txtsize=34&txt=&w=500&h=300" />
                      </div>
                      <div className="contenido-publicacion-home">
                        <h3>Neque porro quisquam est qui dolorem ipsum</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed placerat porta ex, sed ullamcorper ipsum lacinia nec.<span>...</span></p>
                      </div>
                      <div className="mascara-enlace-blog-home">
                        <span>Lorem </span>
                      </div>
                    </a>
                  </div>
                  <div className="hidden-sm col-page col-sm-4 col-md-3">
                    <a href className="fondo-publicacion-home">
                      <div className="img-publicacion-home">
                        <img className="img-responsive" src="https://placeholdit.imgix.net/~text?txtsize=34&txt=&w=500&h=300" />
                      </div>
                      <div className="contenido-publicacion-home">
                        <h3>Neque porro quisquam est qui dolorem ipsum</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed placerat porta ex, sed ullamcorper ipsum lacinia nec.<span>...</span></p>
                      </div>
                      <div className="mascara-enlace-blog-home">
                        <span>Lorem </span>
                      </div>
                    </a>
                  </div>
                  <div className="col-page col-sm-4 col-md-3">
                    <a href="#" className="todas-las-publicaciones-home">
                      <span>Neque porro quisquam est qui dolorem ipsum</span>
                    </a>
                  </div>
                </div>
              </div>
              <hr style={{height:"10px", backgroundColor:"#CAD7D8"}}/>
            </div>
            {/* pagination section */}
            <Col>
            
            <ul class="pager">
              <li><a href="#">Previous</a></li>
              <li><a href="#">Next</a></li>
            </ul>

            <nav aria-label="Page navigation" id="div1">
              <ul class="pager">
                <li>
                  <a href="#" aria-label="Previous">
                    <span aria-hidden="true">«</span>
                  </a>
                </li>
                <li><a href="#">1</a></li>
                <li><a href="#">2</a></li>
                <li><a href="#">3</a></li>
                <li><a href="#">4</a></li>
                <li><a href="#">5</a></li>
                <li>
                  <a href="#" aria-label="Next">
                    <span aria-hidden="true">»</span>
                  </a>
                </li>
              </ul>
            </nav>
            </Col>
            
          </section>         
          </Row>
          
          <Grid>
          <Row style={{paddingTop:"100px"}}>
            {/* Carousel section */}
          <Col xs={12} sm={8} className="person-wrapper">
            <Row className="show-grid text-center">
            <Carousel >
              <Carousel.Item>
                <img width={400} height={200} alt="900x500" src="assets/img/Pinterest-pict9.jpg" />
                <Carousel.Caption>
                    <h3 style={{color:"#404F52"}}>First slide label</h3>
                  <p style={{color:"#404F52"}}>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img width={400} height={200} alt="900x500" src="assets/img/Pinterest-pict6.jpg" />
                <Carousel.Caption>
                  <h3 style={{color:"#404F52"}}>Second slide label</h3>
                  <p style={{color:"#404F52"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img width={400} height={200} alt="900x500" src="assets/img/Pinterest-pict2.jpg"/>
                <Carousel.Caption>
                  <h3 style={{color:"#404F52"}}>Third slide label</h3>
                  <p style={{color:"#404F52"}}>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                </Carousel.Caption>
              </Carousel.Item>
            </Carousel> <br/><br/>               
            </Row>

            
            {/* section About Me */}
            <div>
            <Col xs={12} sm={5} >            
            <div id="design-widget" className="widget maidesign_about_widget">
            <h4 className="widget-heading"><span>About Me</span></h4>			
              <div className="about-widget">
                <div className="about_photo"><img src="http://mailovedesign.com/chloeandmarc/wp-content/uploads/2015/11/avatar.png" alt="About Me" /></div>
                <h2 className="name">Mailoveparis</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et.</p>
                <div className="widget-social">
                  <a href="#" target="_top"><i className="fab fa-facebook" /></a>&emsp;
                  <a href="#" target="_top"><i className="fab fa-twitter" /></a>&emsp;    				
                  <a href="#" target="_top"><i className="fab fa-instagram" /></a>&emsp;    				
                  <a href="#" target="_top"><i className="fab fa-pinterest" /></a>&emsp;    				
                  <a href="#" target="_top"><i className="fa fa-heart" /></a>    				    				    				    				    			</div>
              </div>              
            </div>
            </Col>
            <Col xs={12} sm={2} >
            <hr className="text-right" style={{width:"3px",height:"400px", backgroundColor:"#CAD7D8"}}/>
            </Col>
            
            <Col xs={12} sm={5} >
            <h3 style={{padding:"20px",color:"#9AC2CC "}}>My saving stand! catch me out there!</h3>
            <br/><iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.2863158172854!2d106.8491629144937!3d-6.2259297954931405!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f38e299bfe03%3A0xf95f3e6b8af673e6!2sMadina+Islamic+Primary+School!5e0!3m2!1sen!2sid!4v1536479335411"  frameBorder={5} style={{border: 0}} allowFullScreen />
            </Col>

            
            </div>
            

          </Col>
          
          <Col xs={1} sm={1} className="person-wrapper"></Col>
          <Col xs={6} sm={3} className>
          <hr style={{height:"5px", backgroundColor:"#CAD7D8"}}/>
          <aside id="sidebar">
          

            <div className="">
            <h4 className="widget-heading"><span>Categories</span></h4>
            <hr style={{height:"5px", backgroundColor:"#CAD7D8"}}/>				
              <ul >
                <li className="ghost2">
                  <a href="" target="_top" style={{textDecoration:"none", color:"#CAD7D8"}}>Fashion</a>
                </li>    
                <ul>                
                </ul><br/>
                <li className="ghost2">
                  <a href="" target="_top" style={{textDecoration:"none", color:"#CAD7D8"}}>Lifestyle</a>
                </li>    
                <ul><br/>                
                </ul>
                <li className="ghost2">
                  <a href="" target="_top" style={{textDecoration:"none", color:"#CAD7D8"}}>Travel</a>
                </li>    
                <ul><br/>                
                </ul>
                <li className="ghost2">
                  <a href="" target="_top" style={{textDecoration:"none", color:"#CAD7D8"}}>Shopping</a>
                </li>    
                <ul><br/>                
                </ul>
              </ul>            
            </div>
            <hr style={{height:"5px", backgroundColor:"#CAD7D8"}}/>
            <div id="maidesign_latest_news_widget-2 text-center" className="widget maidesign_latest_news_widget">
            <h4 className="widget-heading"><span>Recent Posts</span></h4>			
                       
            <hr style={{height:"5px", backgroundColor:"#CAD7D8"}}/>
                <div className="text-center">                  
                    <a href="" rel="bookmark" target="_top">
                    <img width={150} height={150} src="http://mailovedesign.com/chloeandmarc/wp-content/uploads/2015/06/14370726237_f3331a0d3e_o-150x150.jpg" className="side-item-thumb wp-post-image" alt />
                    </a>
                  
                  <div className="side-text">
                    <h5><a href="" rel="bookmark" target="_top" style={{textDecoration:"none", color:"#404F52"}}>Self-Creation Of Your Own Cocktail</a></h5>
                    <span className="side-meta"><a href="" rel="category tag" target="_top" style={{textDecoration:"none", color:"#404F52", fontFamily:"sail,cursive"}}>Lifestyle</a></span>							
                  </div>
                </div>
              
              
                <div className="side-item">
                  <div className="side-image">
                    <a href="http://mailovedesign.com/chloeandmarc/the-fragile-girl/" rel="bookmark" target="_top"><img width={150} height={150} src="http://mailovedesign.com/chloeandmarc/wp-content/uploads/2015/06/photo-1451650645557-62193a7bed6a-150x150.jpg" className="side-item-thumb wp-post-image" alt /></a>
                  </div>
                  <div className="side-text">
                    <h5><a href="http://mailovedesign.com/chloeandmarc/the-fragile-girl/" rel="bookmark" target="_top" style={{textDecoration:"none", color:"#404F52"}}>The Fragile Girl</a></h5>
                    <span className="side-meta"><a href="http://mailovedesign.com/chloeandmarc/category/fashion/" rel="category tag" target="_top" style={{textDecoration:"none", color:"#404F52", fontFamily:"sail,cursive"}}>Fashion</a></span>							
                  </div>
                </div>
                <hr style={{height:"5px", backgroundColor:"#CAD7D8"}}/>
              
            
          </div>
          
            
            <form style={{height:"200px"}} method="post" data-id={581} data-name="Subscribe via Email">
            <div className="mc4wp-form-fields"> 
            <label><h3>Sign up for my Newsletter</h3></label>
              <input style={{border:"none",borderColor:"transparent"}} type="email" name="EMAIL" placeholder="Your email address" required /><br/>
              <ul class="pager">
              <li><a href="#">Subscribe</a></li>              
              </ul>
              </div>
            </form>
            
          </aside>

          </Col>
        
          </Row>
          </Grid>
          <Grid>
          <Col xs={12} sm={1} className="text-center">          
          </Col>
          <Col xs={12} sm={10} className="text-center">
          <hr style={{height:"5px", backgroundColor:"#CAD7D8"}}/>  
          <div className="text-center">
              <div className="well">
                <h4>What is on your mind?</h4>
                <div className="input-group">
                  <input type="text" id="userComment" className="form-control input-sm chat-input" placeholder="Write your Comments here..." />
                  <span className="input-group-btn" onclick="addComment()">     
                    <a href="#" className="btn btn-primary btn-sm"><span className="glyphicon glyphicon-comment" /> Add Comment</a>
                  </span>
                </div>
                <hr data-brackets-id={12673} />
                <ul data-brackets-id={12674} id="sortable" className="list-unstyled ui-sortable">
                  <strong className="pull-left primary-font">James</strong>
                  <small className="pull-right text-muted">
                    <span className="glyphicon glyphicon-time" />7 mins ago</small>
                  <br />
                  <li className="ui-state-default">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </li>
                  <br />
                  <strong className="pull-left primary-font">Taylor</strong>
                  <small className="pull-right text-muted">
                    <span className="glyphicon glyphicon-time" />14 mins ago</small>
                  <br />
                  <li className="ui-state-default">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</li>
                </ul>
              </div>
            </div>
            </Col>
            <Col xs={12} sm={1} className="text-center">
          </Col>
          </Grid>
      </div>    
    )
  }
}

export default Home;
