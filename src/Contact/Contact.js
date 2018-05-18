import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Grid, Col, Row, Navbar, Nav, NavItem } from 'react-bootstrap'

const Contact = () => {
    return (
        <div class="outter">
             <Grid fluid>
                <Row className="navbar">
                    <Col xs={12} sm={2} md={3}  lg={3}>
                        <div className="navbar-title">
                            Nick Paridon
                        </div>
                    </Col>
                    <Col xs={12} smOffset={1} md={3} mdOffset={2} lg={3} lgOffset={4}>
                        <ul>
                            <li><Link to="/">About Me </Link></li>   
                            <li><Link to="/Portfolio">Portfolio </Link></li> 
                            <li><Link to="/Contact">Contact</Link></li>   
                        </ul>
                    </Col>
                    <Col lg={2}>
                    </Col>
                </Row>
            </Grid>
            <Grid>
                <Row>
                    <Col lg={6} lgOffset={3}>
                        <div className="inner">
                            <h3>Contact</h3>
                            <hr/>
                            <form className="form-group" action="index.html" method="post">
                                <label for="name">Name</label>
                                <input type="text" className="form-control input-lg" name="name" placeholder="Enter your name"/>
                                
                                <label for="email">Email</label>
                                <input type="email" name="email" className="form-control input-lg" placeholder="Enter your email"/>
                                
                                <label for="entry">Message</label>
                                <textarea name="entry" className="form-control input-lg" rows="5"></textarea>
                                <input type="submit" name="submit" className="form-control input-lg" value="Submit" className="submit"/>
                            </form>                        
                        </div>
                    </Col>
                </Row>
            </Grid>
            <footer>
                <div className="footer-copyright py-3 text-center">
                    © 2018 Copyright:
                </div>
            </footer>
        </div>
    );
};

export default Contact;