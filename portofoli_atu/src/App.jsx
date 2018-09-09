import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import Home from './components/Home';
import News from './components/News';
import About from './components/About';
import Navbar from './components/CustomNavbar';
import Footer from './components/Footer';



class App extends Component {
  render() {
    return (
      /**bootstrap 3 test */
      <Router>
        <div style={{backgroundColor:"#E3F8F9"}}>
          <Navbar/>
          <Route exact path="/" component={Home}/>
          <Route path="/news" component={News}/>
          <Route path="/About" component={About}/>
          <Footer/>
        </div>
      </Router>    
      
    );
  }
}

export default App;
