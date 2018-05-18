import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "../assets/styles/Board.css"

const Contact = () => {
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
            <div className="container" >
                    <div className="row justify-content-md-center">
                        <div className="col col-sm">
                        </div>
                        <div className="col-md-6 col-md-offset-3" id="inner">
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
                        <div className="col col-sm">
                        </div>
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

export default Contact;