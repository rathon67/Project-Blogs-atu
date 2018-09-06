import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import Home from './components/Home';
import News from './components/News';
import About from './components/About';
import Navbar from './components/CustomNavbar';



class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Navbar/>
          <Route exact path="/" component={Home}/>
          <Route path="/news" component={News}/>
          <Route path="/About" component={About}/>
        </div>
      </Router>
    );
  }
}

export default App;
