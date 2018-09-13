import React, { Component } from 'react'
import {Jumbotron, Grid, Row, Col, Image, Button, Carousel,Badge, Well} from 'react-bootstrap';
import './Blog.css';

export default class Blog extends Component {
  render() {
    return (
      <div>
          <div >
              <Image src="assets/img/blue-interrior1.jpg" className="header-image1 " />
              <div className="bottom-left"></div>
              <div className="top-left"></div>
              <div className="top-right"></div>
              <div className="bottom-right"></div>
              {/* <div className="centered"><h1 className="about" ><b>Category Name</b></h1></div> */}
            </div>
          <div>
            <h1>Category Name</h1>
          </div>
          
            <Grid>
            
            <div id="latestposts">
            <div className="morefeatures">
              <a href="https://boingboing.net/2018/09/11/never-again.html">
                <div className="thumbnailcontainer" style={{backgroundImage: 'url("https://i1.wp.com/media.boingboing.net/wp-content/uploads/2018/09/OG-CopyrightBot-Alt1.png?ssl=1")'}}>
                </div>
              </a>
              <h2>
                <a className="tag" style={{color: '#dd1767'}} href="https://boingboing.net/tag/creators-rights">
                  creators rights				</a>
                <a className="headline" href="https://boingboing.net/2018/09/11/never-again.html">
                  Wanting It Badly Is Not Enough: Real Problems For Creators Deserve Real Solutions				</a>
                <a className="byline" href="https://boingboing.net/author/cory_doctorow_1">
                  <br />Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque esse recusandae, minus architecto ea cupiditate eum odit suscipit necessitatibus praesentium nam ex ipsum, eos velit fugit cum eaque? Sunt, harum.				</a>
              </h2>
            </div> 	
            <div className="morefeatures evens">
              <a href="https://boingboing.net/2018/09/10/heroic-cartography.html">
                <div className="thumbnailcontainer" style={{backgroundImage: 'url("https://i1.wp.com/media.boingboing.net/wp-content/uploads/2018/09/050-056c026d-1c66-4d42-9fae-a8e96df290c5-1020x1935.jpg?ssl=1")'}}>
                </div>
              </a>
              <h2>
                <a className="tag" style={{color: '#dd8022'}} href="https://boingboing.net/tag/mapmaker-mapmaker-make-me-a-map">
                  mapmaker mapmaker make me a map				</a>
                <a className="headline" href="https://boingboing.net/2018/09/10/heroic-cartography.html">
                  Procedurally generated maps of medieval cities, suitable for RPGs				</a>
                <a className="byline" href="https://boingboing.net/author/cory_doctorow_1">
                  <br />Cory&nbsp;Doctorow				</a>
              </h2>
            </div>	
            <div className="morefeatures">
              <a href="https://boingboing.net/2018/09/10/china-shakes-the-world.html">
                <div className="thumbnailcontainer" style={{backgroundImage: 'url("https://i0.wp.com/media.boingboing.net/wp-content/uploads/2018/09/succulents-1030982_960_720.jpg?ssl=1")'}}>
                </div>
              </a>
              <h2>
                <a className="tag" style={{color: '#dd7295'}} href="https://boingboing.net/tag/drought-tolerant-tulip-bulb-mania">
                  drought-tolerant tulip-bulb mania				</a>
                <a className="headline" href="https://boingboing.net/2018/09/10/china-shakes-the-world.html">
                  Thanks to a Chinese and Korean fad, California's wild succulents are being poached and smuggled to Asia				</a>
                <a className="byline" href="https://boingboing.net/author/cory_doctorow_1">
                  <br />Cory&nbsp;Doctorow				</a>
              </h2>
            </div>	
            <div className="morefeatures evens">
              <a href="https://boingboing.net/2018/09/10/brownshirts.html">
                <div className="thumbnailcontainer" style={{backgroundImage: 'url("https://i0.wp.com/media.boingboing.net/wp-content/uploads/2018/09/180-1.jpg?ssl=1")'}}>
                </div>
              </a>
              <h2>
                <a className="tag" style={{color: '#dd1725'}} href="https://boingboing.net/tag/rapey-crooked-fucks">
                  rapey crooked fucks				</a>
                <a className="headline" href="https://boingboing.net/2018/09/10/brownshirts.html">
                  The sheriffs who cheered Trump's attack on the press have long histories of shady dealings, revealed by the press				</a>
                <a className="byline" href="https://boingboing.net/author/cory_doctorow_1">
                  <br />Cory&nbsp;Doctorow				</a>
              </h2>
            </div>	
            <div className="morefeatures">
              <a href="https://boingboing.net/2018/09/10/black-box-justice.html">
                <div className="thumbnailcontainer" style={{backgroundImage: 'url("https://i1.wp.com/media.boingboing.net/wp-content/uploads/2018/09/jail-1287943_960_720.png.jpg?ssl=1")'}}>
                </div>
              </a>
              <h2>
                <a className="tag" style={{color: '#2.2854'}} href="https://boingboing.net/tag/debtors-prisons">
                  debtors prisons				</a>
                <a className="headline" href="https://boingboing.net/2018/09/10/black-box-justice.html">
                  Good news: California ends cash bail! Bad news: It's been replaced with a black-box algorithm.				</a>
                <a className="byline" href="https://boingboing.net/author/cory_doctorow_1">
                  <br />Cory&nbsp;Doctorow				</a>
              </h2>
            </div>	
          </div>
          </Grid>
          
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
            <Grid>
            <hr style={{height:"10px", backgroundColor:"#CAD7D8"}}/>
            </Grid>            
            </Col>

          <div>
              <h1>Blog Related</h1>
          </div>
          <div id="slots">
              <div className="feature top" style={{}}>
                <a href="https://boingboing.net/2018/09/11/a-group-of-african-slaves-spen.html">
                  <div className="thumbnailcontainer" style={{backgroundImage: 'url("https://i0.wp.com/media.boingboing.net/wp-content/uploads/2018/09/2018-09-10-podcast-episode-216-the-tromelin-island-castaways.jpg?ssl=1")'}}>
                  </div>
                </a>
                <h2>
                  <a className="tag" style={{color: '#2.7047'}} href="https://boingboing.net/tag/futility-closet">
                    futility closet		</a>
                  <a className="headline" href="https://boingboing.net/2018/09/11/a-group-of-african-slaves-spen.html">
                    A group of African slaves spent 15 years shipwrecked on this tiny island</a>
                  <a className="byline" href="https://boingboing.net/author/futilitycloset">
                    <br />Futility&nbsp;Closet		</a>
                </h2>
              </div><div className="feature" style={{}}>
                <a href="https://boingboing.net/2018/09/11/scientists-unlock-methods-for.html">
                  <div className="thumbnailcontainer" style={{backgroundImage: 'url("https://i0.wp.com/media.boingboing.net/wp-content/uploads/2018/09/Faust_and_Mephisto-1.jpg?ssl=1")'}}>
                  </div>
                </a>
                <h2>
                  <a className="tag" style={{color: '#4127dd'}} href="https://boingboing.net/tag/Bad-dude-test">
                    Bad dude test		</a>
                  <a className="headline" href="https://boingboing.net/2018/09/11/scientists-unlock-methods-for.html">
                    Scientists unlock methods for testing evil		</a>
                  <a className="byline" href="https://boingboing.net/author/seamus">
                    <br />Seamus&nbsp;Bellamy		</a>
                </h2>
              </div><div className="feature" style={{marginRight: 0}}>
                <a href="https://boingboing.net/2018/09/10/giant-red-ball-escapes-from-ar.html">
                  <div className="thumbnailcontainer" style={{backgroundImage: 'url("https://i1.wp.com/media.boingboing.net/wp-content/uploads/2018/09/Screen-Shot-2018-09-10-at-9.46.16-AM.jpg?ssl=1")'}}>
                  </div>
                </a>
                <h2>
                  <a className="tag" style={{color: '#dd4713'}} href="https://boingboing.net/tag/Red-rover">
                    Red rover		</a>
                  <a className="headline" href="https://boingboing.net/2018/09/10/giant-red-ball-escapes-from-ar.html">
                    Giant red ball escapes from art installation in Ohio		</a>
                  <a className="byline" href="https://boingboing.net/author/mark_frauenfelder_1">
                    <br />Mark&nbsp;Frauenfelder		</a>
                </h2>
              </div>
            </div>
            
            <div className="separator" style={{margin: '1em auto 2em auto', border: '4px solid #CAD7D8', padding: '1em', maxWidth: 1000, textAlign: 'center'}}>
              {/* Begin MailChimp Signup Form */}
              <link href="//cdn-images.mailchimp.com/embedcode/horizontal-slim-10_7.css" rel="stylesheet" type="text/css" />
              <style type="text/css" dangerouslySetInnerHTML={{__html: "\n\t#mc_embed_signup{background:#fff; clear:left; font:14px Helvetica,Arial,sans-serif; width:100%;}\n" }} />
              <style type="text/css" dangerouslySetInnerHTML={{__html: "\n\t#mc-embedded-subscribe-form input[type=checkbox]{display: inline; width: auto;margin-right: 10px;}\n\t#mergeRow-gdpr {margin-top: 20px;}\n\t#mergeRow-gdpr fieldset label {font-weight: normal;}\n\t#mc-embedded-subscribe-form .mc_fieldset{border:none;min-height: 0px;padding-bottom:0px;}\n        #mc-embedded-subscribe-form input[type=submit]{background-color: #404F52; color: white;}\n" }} />
              <div id="mc_embed_signup">
                <form action="https://boingboing.us2.list-manage.com/subscribe/post?u=0e91f8e7df61da4bff2bd9b1f&id=8c5d27370d" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" className="validate" target="_blank" noValidate>
                  <div id="mc_embed_signup_scroll">
                    <label htmlFor="mce-EMAIL">GET THE BLOG NEWEST</label>
                    <input type="email" defaultValue name="EMAIL" className="email" id="mce-EMAIL" placeholder="email address" required />
                    <div style={{position: 'absolute', left: '-5000px'}} aria-hidden="true"><input type="text" name="b_0e91f8e7df61da4bff2bd9b1f_8c5d27370d" tabIndex={-1} defaultValue /></div>
                    <div className="clear"><input type="submit" defaultValue="Subscribe" name="subscribe" id="mc-embedded-subscribe" className="button" /></div>
                  </div>
                </form>
              </div>
              {/*End mc_embed_signup*/}
            </div>

            
      </div>
    )
  }
}
