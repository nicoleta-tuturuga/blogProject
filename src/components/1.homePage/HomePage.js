import React from "react";

import "./HomePage.css";
import "../sideLinkPage.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from "react-router-dom";
import { SocialIcon } from 'react-social-icons';

import Hobbies from "../6.hobbies/Hobbies";
import SideBarNavbar from "../Header/SideBarNavbar";
import Footer from "../footer/Footer";


class HomePage extends React.Component {



    render() {

        return (
            <div className="parent">

                {/* <!-- Home Page container --> */}
                <div className="side-link-page">
                    <p>home</p>
                </div>

                <div className="img-container d-flex">
                    <div className="main-presentation align-self-start">
                        <div className="type-writter-effect">
                            <p id="head-title">Hello, I'm Nicoleta.</p>
                        </div>
                        <p>"All our dreams can come true if we have the courage to pursue them."
                    </p>

                        {/* <!-- Social network icons --> */}
                        <div className="widget-wrap-social-networks">
                            {/* <ul className="social-networks">
                                <li>
                                    <SocialIcon network="facebook" bgColor="#000000"
                                        url="https://www.facebook.com/tuturuga.niko"
                                        title="facebook" target="_blank"></SocialIcon>
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
                            </ul> */}
                        </div>
                    </div>


                    <SideBarNavbar></SideBarNavbar>
                </div>


                <div className="categories-container row d-flex">
                    <div className="category-container col-sm-12 col-md-4 col-lg-4 d-flex flex-column align-items-center">
                        <a className="category-title" href="#">Photography</a>
                        <div className="category-img">
                            <img src={require('../../assets/images/hobbies/7940779e-6f86-4a82-9f03-6f5d41eff004.jpg')} alt="" />
                        </div>
                        <div className="category-info d-flex flex-column">
                            <a className="category-style" href="#">Photography</a>
                            <a className="category-btn" href="#">See More</a>
                        </div>
                    </div>
                    <div className="category-container col-sm-12 col-md-4 col-lg-4 d-flex flex-column align-items-center">
                        <a className="category-title" href="#">Cooking</a>
                        <div className="category-img">
                            <img src={require('../../assets/images/hobbies/7940779e-6f86-4a82-9f03-6f5d41eff004.jpg')} alt="" />
                        </div>
                        <div className="category-info d-flex flex-column">
                            <a className="category-style" href="#">Cooking</a>
                            <a className="category-btn" href="#">See More</a>
                        </div>
                    </div>
                    <div className="category-container col-sm-12 col-md-4 col-lg-4 d-flex flex-column align-items-center">
                        <a className="category-title" href="#">Travel</a>
                        <div className="category-img">
                            <img src={require('../../assets/images/hobbies/7940779e-6f86-4a82-9f03-6f5d41eff004.jpg')} alt="" />
                        </div>
                        <div className="category-info d-flex flex-column">
                            <a className="category-style" href="#">Travel</a>
                            <a className="category-btn" href="#">See More</a>
                        </div>
                    </div>

                    <Hobbies />

                </div>


                <Footer />

            </div>

        )
    }
}

export default HomePage;