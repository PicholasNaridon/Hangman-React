import React from 'react';
import Portfolio from '../Portfolio/Portfolio'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "../assets/styles/Board.css"



const Homepage = () => {
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
            <div className="row">
                <div className="col-md-6 col-md-offset-3" id="inner">
                    <h3>About Me</h3>
                    <hr />
                    <div className="img-responsive">
                        <img src="./assets/images/react.png" width="260px" height="200px" alt="" />
                    </div>
                    <div className="text">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam lacus ligula, vulputate vitae massa et, accumsan dictum purus. Curabitur sit amet mauris id nisi lobortis tempus. Aenean sit amet vulputate eros. Curabitur fermentum risus tempor, maximus mauris a, placerat nunc. Suspendisse tristique interdum velit vel aliquet. Donec ut fringilla arcu. Aliquam vehicula turpis sodales ex cursus, sed mollis dolor feugiat. Vivamus ac elit fermentum justo imperdiet pharetra. Sed ac euismod diam. Proin diam neque, ornare a imperdiet nec, vestibulum id quam.</p>
                        <p>Nam eget facilisis est, nec fringilla erat. Nam venenatis dapibus velit, ac efficitur turpis mattis a. Nam vitae lorem mollis, lacinia diam at, commodo tellus. Morbi eleifend pulvinar aliquam. Vivamus ac consectetur ligula. Nulla quis velit porttitor, aliquet velit non, consequat nibh. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Vestibulum finibus condimentum augue a tempus. Cras ac rutrum arcu, id rhoncus eros. In ornare urna sem, non tincidunt dui consequat ut. Donec posuere rutrum pulvinar. Cras interdum hendrerit purus, id cursus sem elementum non.</p>
                        <p>Fusce at urna convallis, molestie libero a, tempus tortor. Nulla facilisi. Phasellus quam tortor, dapibus vitae arcu nec, venenatis vestibulum libero. Maecenas gravida dolor ut nisi accumsan vestibulum eu laoreet nunc. Phasellus vel nunc posuere, facilisis orci sit amet, feugiat arcu. Maecenas ullamcorper lacus lacus, ut accumsan purus facilisis nec. Nulla egestas eleifend elit, at suscipit orci. Morbi porta facilisis cursus. Vivamus iaculis ante id augue pharetra, at vehicula neque facilisis. Vestibulum nec est nec nunc tempor pulvinar. Vivamus ac sodales tellus. Maecenas quis efficitur nunc, id cursus sem.</p>
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

export default Homepage;

