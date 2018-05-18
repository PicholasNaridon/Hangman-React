import React from 'react';
import { Link } from "react-router-dom";
import { Grid, Col, Row, Nav, Navbar, NavItem } from 'react-bootstrap'


const Portfolio = () => {
    return (
        <div class="outter">
            <Grid fluid>
                <Row className="navbar">
                    <Col lgOffset={1} lg={2}>
                        <div className="navbar-title">
                            Nick Paridon
                        </div>
                    </Col>
                    <Col lg={3} lgOffset={4}>
                        <ul>
                            <li><Link to="/">About Me </Link></li>   
                            <li><Link to="/Portfolio">Portfolio </Link></li> 
                            <li><Link to="/Contact">Contact</Link></li>   
                        </ul>
                    </Col>
                </Row>
            </Grid>
            <div className="container">
                <div className="row" >
                    <h3>Portfolio</h3>
                    <hr/>
                    <div className="col-sm-3 col-md-3 col-lg-6" id="proj-img"><img src="./assets/images/react.png" className="img-responsive" />
                        <Link to="/Hangman">Hangman</Link>
                    </div>
                    <div className="col-sm-3 col-md-3 col-lg-6" id="proj-img"><img src="./assets/images/react.png" className="img-responsive" />
                        <p className="overlay">Project</p>
                    </div>
                    <div className="col-sm-3 col-md-3 col-lg-6" id="proj-img"><img src="./assets/images/react.png" className="img-responsive" />
                        <p className="overlay">Project</p>
                    </div>
                    <div className="col-sm-3 col-md-3 col-lg-6" id="proj-img"><img src="./assets/images/react.png" className="img-responsive" />
                        <p className="overlay">Project</p>
                    </div>
                    <div className="col-sm-3 col-md-3 col-lg-6" id="proj-img"><img src="./assets/images/react.png" className="img-responsive" />
                        <p className="overlay">Project</p>
                    </div>
                </div>
            </div>
        <footer>
            <div className="footer-copyright py-3 text-center">
                © 2018 Copyright:
            </div>
        </footer>
        </div>
    );
};

export default Portfolio;