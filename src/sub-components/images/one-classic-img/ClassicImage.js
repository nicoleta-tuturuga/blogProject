import React from "react";

import './ClassicImage.css';

const classicImage = () => {

    return (
        <div className="d-flex justify-content-center">
            <img className="classic-img"
                src={require('../../../assets/images/hobbies/74b97e45-7f1e-4613-a378-245a17f108ca.jpg')} alt="" />
        </div>
    )
}

export default classicImage;