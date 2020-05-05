import React from "react";


const twoEqualImgs = () => {

    return (
        <div className="d-flex justify-content-center flex-wrap">
            <img className="two-equal-imgs col-md-12 col-lg-6"
                src={require('../../../assets/images/hobbies/74b97e45-7f1e-4613-a378-245a17f108ca.jpg')} alt="" />
            <img className="two-equal-imgs col-md-12 col-lg-6"
                src={require('../../../assets/images/hobbies/74b97e45-7f1e-4613-a378-245a17f108ca.jpg')} alt="" />
        </div>
    )
}

export default twoEqualImgs;