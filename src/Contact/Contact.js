import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Grid, Col, Row, Navbar, Nav, NavItem, Form, FormGroup, FormControl, Button, ControlLabel } from 'react-bootstrap'

const Contact = () => {
    return (
        <div class="outter">
              <Grid fluid={true} className="topBorder">
                <Row className="navbar">
                    <Col xs={12} sm={4} md={4} lg={3}>
                        <div className="navbar-title">
                            Nick Paridon
                        </div>
                    </Col>
                    <Col xs={12} sm={4} md={4} lg={4} >
                        <div className="navbar-links">
                            <ul >
                                <li><Link to="/">About Me </Link></li>   
                                <li><Link to="/Portfolio">Portfolio </Link></li> 
                                <li><Link to="/Contact">Contact</Link></li>   
                            </ul>
                        </div>
                    </Col>
                </Row>
            </Grid>
            <div className="container">
                <Grid className="lower-grid">
                    <Row>
                        <Col xs={12} lg={6} md={6} sm={6}>
                            <div className="inner-title">Portfolio</div>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                        <div className="line"></div>
                        </Col>
                    </Row>
                    <Row style={{justifyContent: "center"}}>
                        <Col lg={10} md={10} sm={10} xs={12}>
                        <Form >
                            <FormGroup controlId="formControlsText">
                                <ControlLabel>Name</ControlLabel>
                                <FormControl componentClass="text" placeholder="Name" />
                            </FormGroup>
                            <FormGroup controlId="formControlsEmail">
                                <ControlLabel>Email</ControlLabel>
                                <FormControl componentClass="email" placeholder="Email" />
                            </FormGroup>
                            <FormGroup controlId="formControlsTextarea">
                                <ControlLabel>Message</ControlLabel>
                                <FormControl componentClass="textarea" placeholder="Message" />
                            </FormGroup>
                            <FormGroup>
                                <Button bsStyle="primary" style={{backgroundColor: "#4aaaa5"}} bsSize="large" block>
                                    Block level button
                                </Button>
                            </FormGroup>
                        </Form>;
                        </Col>
                    </Row>
                </Grid>
            </div>
            <Navbar fixedBottom={true} className="footer">
                <div className="footer-copyright py-3 text-center">
                    © 2018 Copyright:
                </div>
            </Navbar>
        </div>
    );
};

export default Contact;


