import React from "react";

import "./Post.css";
import "../../6.hobbies/Hobbies.css";

import { Link } from "react-router-dom";

const post = () => {

    return (
        <div>
            <div className="hobbies-container main-area d-flex flex-wrap justify-content-center">
                {/* <div className="col-main-post col-lg-10"> */}
                <div className="card-container d-flex">
                    <div className="card-post-img col-lg-6">
                        <a href="#">
                            <img
                                src={require('../../../assets/images/hobbies/74b97e45-7f1e-4613-a378-245a17f108ca.jpg')} alt="" />
                        </a>
                    </div>
                    <div className="card-post-description col-lg-6">
                        <Link to="/postPage">
                            <a href="#">
                                <h1>Hello world!</h1>
                            </a>
                        </Link>
                        <div>
                            <span>Posted on April 7 </span> <span> - 5 minutes ago</span>
                        </div>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                        <ul className="card-description-likes-section">
                            <li>50 vizualizari</li>
                            <li>
                                <Link to="/postPage">
                                    <a href="#">Scrie un comentariu</a>
                                </Link>
                            </li>
                            <li>23 inima</li>
                        </ul>
                    </div>
                </div>
                {/* </div> */}
                {/* 
                <div className="col1 col-lg-2">
                    <Side />
                </div> */}
            </div>
        </div>
    )
}

export default post;