import React from "react";

import { Link } from "react-router-dom";
import { SocialIcon } from 'react-social-icons';

import "./Navbar.css";



const Navbar = () => {

    return (
        <div id="navbar-parent">
            <header className="site-header">

                {/* ------top-bar------- */}
                <div className="top-bar">
                    <div className="row d-flex justify-content-between">
                        <div className="subscribe-top-bar-left">
                            <button className="top-bar-subscribe-btn" type="button">SUBSCRIBE</button>
                        </div>
                        <a className="top-bar-logo" href="#">Nicoleta Tuturuga</a>
                        <div className="top-bar-social-links-right">
                            <ul className="social-networks">
                                <li>
                                    <SocialIcon network="facebook" bgColor="#000000"
                                        url="https://www.facebook.com/tuturuga.niko"
                                        title="facebook" target="_blank"
                                        className="social-nav-link"></SocialIcon>
                                </li>
                                <li>
                                    <SocialIcon network="github" bgColor="#000000"
                                        url="https://github.com/nicoleta-tuturuga"
                                        title="github" target="_blank"></SocialIcon>
                                </li>
                                <li>
                                    <SocialIcon network="linkedin" bgColor="#000000"
                                        url="https://www.linkedin.com/in/nicoleta-tuturuga-8797041a3/"
                                        title="linkedin" target="_blank"></SocialIcon>
                                </li>
                                <li>
                                    <Link to="/contactPage">
                                        <SocialIcon network="mailto" bgColor="#000000"
                                            title="email" target="_blank"></SocialIcon>
                                    </Link>
                                </li>
                                <li>
                                    <SocialIcon network="instagram" url="https://www.instagram.com/nicotuturuga/?igshid=19603gdl5y8a0&fbclid=IwAR2ilC241XTONY6kJr3a2XzwEyorZI-x8CdL7uQzFFudpa7Ngy9YRp1VuFk" bgColor="#000000"
                                        title="instagram" target="_blank"></SocialIcon>
                                </li>
                            </ul>
                        </div>
                    </div>

                </div>

                {/* ------top-bar-end------- */}


                <nav className="navbar navbar-expand-lg">
                    {/* <a className="navbar-brand" href="#">Nicoleta Tuturuga</a> */}
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-around" id="navbarSupportedContent">
                        <ul className="navbar-nav">
                            <li className="nav-item active">
                                <Link className="nav-link" to='/'>Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to='/aboutMe'>About Me</Link>
                            </li>
                            <li className="nav-item dropdown">
                                <Link className="nav-link dropdown-toggle" id="#navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Categories</Link>
                                <div className="categories-sub-menu">
                                    <ul className="sub-menu-lists dropdown-menu" aria-labelledby="navbarDropdown">
                                        <li>
                                            <Link to='/postsPage'>
                                                <a className="dropdown-item">Photography</a>
                                            </Link>
                                        </li>
                                        <li>
                                            <a className="dropdown-item" href="#">Cooking</a></li>
                                        <li>
                                            <a className="dropdown-item" href="#">Travel</a></li>
                                        <li>
                                            <a className="dropdown-item" href="#">Fashion</a></li>
                                        <li>
                                            <a className="dropdown-item" href="#">Beauty</a></li>
                                        <li>
                                            <a className="dropdown-item" href="#">News</a></li>
                                        <li>
                                            <a className="dropdown-item" href="#">Writings</a></li>
                                    </ul>
                                </div>

                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to='/contactPage'>Contact</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to='/log'>LogIn/SignIn</Link>
                            </li>
                        </ul>
                    </div>
                </nav>
            </header>
        </div>
    )
}

export default Navbar;