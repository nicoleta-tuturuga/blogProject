import React from "react";

import { SocialIcon } from 'react-social-icons';


const side = () => {
    return (
        <div>
            <div className="col-side-post">
                <div className="widget-wrap-social-networks">
                    <p className="title-header">Follow me on</p>
                    <ul className="social-networks d-flex">
                        <li>
                            <SocialIcon network="instagram" url="https://www.instagram.com/nicotuturuga/?igshid=19603gdl5y8a0&fbclid=IwAR2ilC241XTONY6kJr3a2XzwEyorZI-x8CdL7uQzFFudpa7Ngy9YRp1VuFk" bgColor="#000000"
                                title="instagram" target="_blank"></SocialIcon>
                        </li>
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
                    </ul>
                </div>


                {/* <!-- Other travels section --> */}
                <div className="other-travels">
                    <p className="title-header">Love for travel</p>
                    <div className="other-photos-container">

                        <div className="d-flex">
                            <a href="#gallery-grid">
                                <img
                                    src={require('../../assets/images/hobbies/05b79f59-8006-4d44-9afb-a5b69704c90e.jpg')} alt="" />
                            </a>
                            <a href="#gallery-grid">
                                <img
                                    src={require('../../assets/images/hobbies/35af7dba-ab07-4160-969a-7526d4a512c3.jpg')} alt="" />
                            </a>
                            <a href="#gallery-grid">
                                <img
                                    src={require('../../assets/images/hobbies/19fd0410-a760-459d-988a-6dd5d82b35fd.jpg')} alt="" />
                            </a>
                        </div>
                        <div className="d-flex">
                            <a href="#gallery-grid">
                                <img
                                    src={require('../../assets/images/hobbies/47e6296d-5042-4a16-ba98-66accedda90e.jpg')} alt="" />
                            </a>
                            <a href="#gallery-grid">
                                <img
                                    src={require('../../assets/images/hobbies/85e446bd-4668-4ef2-b117-ab4f71723eef.jpg')} alt="" />
                            </a>
                            <a href="#gallery-grid">
                                <img
                                    src={require('../../assets/images/hobbies/29536ea1-7ca6-4eae-b04b-c04d112f5f87.jpg')} alt="" />
                            </a>
                        </div>
                        <div className="d-flex">
                            <a href="#gallery-grid">
                                <img
                                    src={require('../../assets/images/hobbies/f0653171-8aaa-445f-b3f2-9db5f687f171.jpg')} alt="" />
                            </a>
                            <a href="#gallery-grid">
                                <img
                                    src={require('../../assets/images/hobbies/781f1ec4-895f-4bea-b20b-883d4edd0646.jpg')} alt="" />
                            </a>
                            <a href="#gallery-grid">
                                <img
                                    src={require('../../assets/images/hobbies/840196eb-9970-4d05-9c0d-2dd709e1c0bb.jpg')} alt="" />
                            </a>
                        </div>
                        <a href="#gallery-grid">
                            <button type="button" className="custom-styled-btn">More travels</button>
                        </a>
                    </div>
                </div>

                {/* <!-- Cooking section --> */}
                <div className="cooking">
                    <p className="title-header">Passion for cooking sweets</p>
                    <div className="other-photos-container">
                        <div className="d-flex">
                            <a href="#gallery-grid">
                                <img
                                    src={require('../../assets/images/hobbies/a5bf70ed-6fdc-4fe9-bc6c-c4ffa006b2b9.jpg')} alt="" />
                            </a>
                            <a href="#gallery-grid">
                                <img
                                    src={require('../../assets/images/hobbies/a1bdadae-f3ee-44bd-a891-fb8c457cee4d.jpg')} alt="" />
                            </a>
                            <a href="#gallery-grid">
                                <img
                                    src={require('../../assets/images/hobbies/ac1d73e3-236c-4b1e-8b1d-fe71ccf129ec.jpg')} alt="" />
                            </a>
                        </div>
                        <div className="d-flex">
                            <a href="#gallery-grid">
                                <img
                                    src={require('../../assets/images/hobbies/b6c4b7c9-cb29-4a43-8eaa-76fbc42a1ce2.jpg')} alt="" />
                            </a>
                            <a href="#gallery-grid">
                                <img
                                    src={require('../../assets/images/hobbies/684d407a-d36c-486e-8f13-ae44c0ae5214.jpg')} alt="" />
                            </a>
                            <a href="#gallery-grid">
                                <img
                                    src={require('../../assets/images/hobbies/32104e36-d96a-4f07-b0c9-d16c2fceb7c2.jpg')} alt="" />
                            </a>
                        </div>
                        <div className="d-flex">
                            <a href="#gallery-grid">
                                <img
                                    src={require('../../assets/images/hobbies/6be3843f-8fcf-44a3-b335-38fab1a492ee.jpg')} alt="" />
                            </a>
                            <a href="#gallery-grid">
                                <img
                                    src={require('../../assets/images/hobbies/017be026-4669-45c2-8e33-3dd8eca92010.jpg')} alt="" />
                            </a>
                            <a href="#gallery-grid">
                                <img
                                    src={require('../../assets/images/hobbies/10506f92-bad0-4f56-b0f8-c54030bcafd3.jpg')} alt="" />
                            </a>
                        </div>
                        <a href="#gallery-grid">
                            <button type="button" className="custom-styled-btn">More travels</button>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default side;