import React, { Component } from 'react'
import { Navbar, Nav, NavItem, MenuItem, ButtonToolbar, DropdownButton } from 'react-bootstrap';
import {Link} from 'react-router-dom';
import './CustomNavbar.css';

export default class CustomNavbar extends Component {
  render() {
    return (
      <Navbar className="navbar-dark" collapseOnSelect >
        <Navbar.Header>
            <Navbar.Brand>
                <Link to= "/" >Filda Fatimah Tuzahra</Link>
            </Navbar.Brand>
            <Navbar.Toggle/>
        </Navbar.Header>
        <Navbar.Collapse>
            <Nav pullRight>
                <NavItem eventKey={1} componentClass={Link} href="/" to="/">
                    Home
                </NavItem>
                <NavItem eventKey={2} componentClass={Link} href="/about" to="/about">
                    About
                </NavItem>
                <NavItem >               
                <NavItem>
                <ul className="dropdownmenu" >
                <li className="dropdown">
                    <p className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false" style={{textDecoration:"none",color:"#777"}}>Blogs
                    </p>
                    <ul className="dropdown-menu">
                    <li><Link to="/blog">Fashion</Link></li>
                    <li><Link to="/blog">Life Style</Link></li>
                    <li><Link to="/blog">Travel</Link></li>
                    <li role="separator" className="divider" />
                    {/* <li className="dropdown-header">Nav header</li> */}
                    <li><Link to="/blog">Shopping</Link></li>
                    {/* <li><a href="#">One more separated link</a></li> */}
                    </ul>
                </li>
                </ul>
                </NavItem>
                </NavItem>
                <NavItem eventKey={3} componentClass={Link} href="/reviews" to="/reviews">
                    Reviews
                </NavItem>
            </Nav>
        </Navbar.Collapse>
      </Navbar>
    )
  }
}
