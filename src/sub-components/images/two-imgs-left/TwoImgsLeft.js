import React from "react";


const twoImgsLeft = () => {

    return (
        <div className="d-flex justify-content-center flex-wrap">
            <img className="two-imgs-left col-lg-4"
                src={require('../../../assets/images/hobbies/74b97e45-7f1e-4613-a378-245a17f108ca.jpg')} alt="" />
            <img className="two-imgs-left col-lg-8"
                src={require('../../../assets/images/hobbies/74b97e45-7f1e-4613-a378-245a17f108ca.jpg')} alt="" />
        </div>
    )
}

export default twoImgsLeft;