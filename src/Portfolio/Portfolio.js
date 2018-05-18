import React from 'react';
import Homepage from '../Homepage/Homepage'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "../assets/styles/static.css"
import Board from '../Hangman/Board'


const Portfolio = () => {
    return (
        <div>
            <nav className="navbar navbar-default">
                <div className="container-fluid">
                    <div className="navbar-header">
                        <div className="navbar-text" id="navtitle">
                            Nick Paridon
                        </div>
                    </div>
                    <ul className="nav navbar-nav navbar-right">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/Contact">Contact</Link></li>
                    <li><Link to="/Portfolio">Portfolio</Link></li>
                    </ul>
                </div>
            </nav>
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