import React, { Component } from 'react';
// import './App.css';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import Home from './components/Home';
import Blog from './components/Blog';
import About from './components/About';
import Navbar from './components/CustomNavbar';
import Footer from './components/Footer';
import BlogRead from './components/BlogRead';
import Reviews from './components/Reviews';



class App extends Component {
  render() {
    return (
      /**bootstrap 3 test */
      <Router>
        <div style={{backgroundColor:"#E3F8F9"}}>
          <Navbar/>
          <Route exact path="/" component={Home}/>
          <Route path="/blog" component={Blog}/>
          <Route path="/About" component={About}/>
          <Route path="/blogread" component={BlogRead}/>
          <Route path="/reviews" component={Reviews}/>
          <Footer/>
        </div>
      </Router>    
      
    );
  }
}

export default App;
