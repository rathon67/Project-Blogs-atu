import React, { Component } from 'react'
import {Jumbotron, Grid, Row, Col, Image, Button, Carousel,Badge, Well} from 'react-bootstrap';
import './BlogRead.css'

export default class BlogRead extends Component {
  render() {
    return (
      <div>
        <div className="row">
        <div className="col-lg-2 col-md-1" />
        <div className="col-lg-8 col-md-10">
        <div className="row">
        <div className="col-md-12">
        <h1 className="title">TIttle For One Page of Blog. We can read he paragraph of blog</h1>
        <h5> 17TH SEPTEMBER 2018</h5>
        <h4>Bali, Indonesia</h4>
        </div>
        </div>
        </div>
        <div className="col-lg-2 col-md-1" />
      </div>
        
      <Grid>
        <div className="article-featured-image">
            <Image src="assets/img/blue-interrior1.jpg" />
        </div>
        </Grid>
    
    <div className="container">
        
        <h2 style={{textAlign:"center"}}>Learn From The Best</h2><br/>
        <div>
        <Col sm={6} sm={6} style={{backgroundColor:"#f1f1f1"}}>
        <Image src="assets/img/Pinterest-pict10.jpg" style={{maxWidth:"400px", maxHeight:"600"}}/>
        </Col>
        <Col sm={6} sm={6}><p style={{textAlign:"center",textAlign:"justify",letterSpacing:"2px"}}>Lorem ipsum dolor sit amet consectetur adipisicing 
            elit. Cupiditate aliquid dolor dolorem! Neque tenetur recusandae iusto quia ipsa nulla perferendis iure
            reiciendis dolorem! Laboriosam aspernatur, odit odio corporis blanditiis id. Lorem ipsum dolor sit, 
            amet consectetur adipisicing elit. Nulla iure reprehenderit ratione illum, consequuntur 
            et! Nulla, veniam velit placeat quasi suscipit corrupti cum porro, magni deleniti atque dolor quia veritatis.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem voluptates eum error animi culpa labore, aliquid,
            ab, dicta molestias a reiciendis. Laborum, fuga placeat nisi maiores sint molestiae laboriosam similique. </p>
        </Col>      
        
        </div>  
    </div><br/>
    <div className="container">
    <div>
        <Col sm={6} sm={6}>
        <p style={{textAlign:"center",textAlign:"justify",letterSpacing:"2px"}}>Lorem ipsum dolor sit amet consectetur 
            adipisicing elit. Voluptatibus, laboriosam alias. Animi rem sapiente dolorem? Iusto, 
            a alias nulla culpa harum eos blanditiis suscipit aliquam quibusdam cumque et deserunt sit. Lorem ipsum dolor 
            sit amet consectetur adipisicing elit. Maiores qui ab quia ipsam odio atque asperiores dolores ad inventore
            vitae mollitia, voluptatibus, enim adipisci sapiente vero facilis earum, reprehenderit eaque?</p>
        
        </Col>
        <Col sm={6} sm={6} style={{backgroundColor:"#f1f1f1"}}>
        <Image src="assets/img/Pinterest-pict11.jpg" style={{maxWidth:"400px", maxHeight:"600"}}/>
        
        </Col>
        </div>  

    </div><br/><br/>

    <div className="container" style={{backgroundColor:"#f1f1f1",  }}>
    <h3>Posted 17TH Sept 2018</h3>
    <Image src="assets/img/vernice.jpg"  />
    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugiat omnis est 
        consectetur ipsum delectus. Expedita nemo facere laborum, vero, quisquam saepe est quod, 
        provident dolor assumenda nostrum. Libero, laborum eveniet?</p>
    <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam obcaecati labore dolorum 
        aut nulla incidunt laudantium culpa reprehenderit
         dignissimos autem fuga ullam nihil, sit error possimus dicta aspernatur inventore tenetur?
    </p>
    </div>

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
      
      </div>
    )
  }
}
