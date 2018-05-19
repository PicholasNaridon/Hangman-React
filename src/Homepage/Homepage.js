import React from 'react';
import { Link } from "react-router-dom";
import { Grid, Col, Row, Nav, Navbar, NavItem } from 'react-bootstrap'

const Homepage = () => {
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
                            <div className="img-responsive">
                                <img className="myPicture" src={ require('../assets/images/me.png') } />
                            </div>
                            <div className="text">
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam lacus ligula, vulputate vitae massa et, accumsan dictum purus. Curabitur sit amet mauris id nisi lobortis tempus. Aenean sit amet vulputate eros. Curabitur fermentum risus tempor, maximus mauris a, placerat nunc. Suspendisse tristique interdum velit vel aliquet. Donec ut fringilla arcu. Aliquam vehicula turpis sodales ex cursus, sed mollis dolor feugiat. Vivamus ac elit fermentum justo imperdiet pharetra. Sed ac euismod diam. Proin diam neque, ornare a imperdiet nec, vestibulum id quam.</p>
                                <p>Nam eget facilisis est, nec fringilla erat. Nam venenatis dapibus velit, ac efficitur turpis mattis a. Nam vitae lorem mollis, lacinia diam at, commodo tellus. Morbi eleifend pulvinar aliquam. Vivamus ac consectetur ligula. Nulla quis velit porttitor, aliquet velit non, consequat nibh. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Vestibulum finibus condimentum augue a tempus. Cras ac rutrum arcu, id rhoncus eros. In ornare urna sem, non tincidunt dui consequat ut. Donec posuere rutrum pulvinar. Cras interdum hendrerit purus, id cursus sem elementum non.</p>
                                <p>Fusce at urna convallis, molestie libero a, tempus tortor. Nulla facilisi. Phasellus quam tortor, dapibus vitae arcu nec, venenatis vestibulum libero. Maecenas gravida dolor ut nisi accumsan vestibulum eu laoreet nunc. Phasellus vel nunc posuere, facilisis orci sit amet, feugiat arcu. Maecenas ullamcorper lacus lacus, ut accumsan purus facilisis nec. Nulla egestas eleifend elit, at suscipit orci. Morbi porta facilisis cursus. Vivamus iaculis ante id augue pharetra, at vehicula neque facilisis. Vestibulum nec est nec nunc tempor pulvinar. Vivamus ac sodales tellus. Maecenas quis efficitur nunc, id cursus sem.</p>
                            </div>
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

export default Homepage;

