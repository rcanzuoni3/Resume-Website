import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom';
import {LinkContainer} from 'react-router-bootstrap';
import {Navbar, Nav, NavItem, MenuItem, NavDropdown} from 'react-bootstrap';
import ContactMe from './Pages/containers/ContactMeContainer';
import About from './Pages/components/About';
import TechnicalSkills from './Pages/components/TechnicalSkills';
import Home from './Pages/components/Home';
import {name} from './constants';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Navbar fixedTop>
            <Navbar.Header>
              <Navbar.Brand>
                <Link to={'/'}>{name}</Link>
              </Navbar.Brand>
              <Navbar.Toggle/>
            </Navbar.Header>
            <Navbar.Collapse>
              <Nav>
                <LinkContainer to={'/technicalSkills'}>
                  <NavItem>Technical Skills</NavItem>
                </LinkContainer>
                <LinkContainer to={'/contactMe'}>
                  <NavItem>Contact Me</NavItem>
                </LinkContainer>
              </Nav>
              <Nav>
                <LinkContainer to={'/about'}>
                  <NavItem>About</NavItem>
                </LinkContainer>
              </Nav>
            </Navbar.Collapse>
          </Navbar>

          <Switch>
            <Route path="/technicalSkills" component={TechnicalSkills}/>
            <Route path="/contactMe" component={ContactMe}/>
            <Route path="/about" component={About}/>
            <Route path="/" component={Home}/>

          </Switch>
        </div>
      </Router>
    );
  }
}
export default App;