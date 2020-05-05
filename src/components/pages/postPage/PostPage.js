import React from "react";

import "./PostPage.css";
import Title1 from "../../../sub-components/titles/title1/Title1";
import ClassicImage from '../../../sub-components/images/one-classic-img/ClassicImage';
import TwoEqualImgs from '../../../sub-components/images/two-equal-imgs/TwoEqualImgs';
import TwoImgsLeft from '../../../sub-components/images/two-imgs-left/TwoImgsLeft';
import TwoImgsRight from '../../../sub-components/images/two-imgs-right/TwoImgsRight';

import ImgTextLeft from '../../../sub-components/images&text/img&text-left/ImgTextLeft';
import ImgTextRight from '../../../sub-components/images&text/img&text-right/ImgTextRight';

import BigParagraph from '../../../sub-components/text/bigParagraph/BigParagraph';
import SmallParagraph from '../../../sub-components/text/smallParagraph/SmallPargraph';
import TwoTextCols from '../../../sub-components/text/twoTexCols/TwoTextCols';
import TwoImgsText from "../../../sub-components/images&text/two-imgs&text/TwoImgsText";

const postPage = () => {

    return (
        <div>
            <div className="post-page-container d-flex flex-column align-items-center">
                <div className="post-page-title-container">
                    <Title1></Title1>
                </div>
                <div className="post-page-img-container">
                   {/* <ClassicImage></ClassicImage> */}
                   {/* <TwoEqualImgs></TwoEqualImgs> */}
                   {/* <TwoImgsLeft></TwoImgsLeft> */}
                   {/* <TwoImgsRight></TwoImgsRight> */}
                   {/* <ImgTextLeft></ImgTextLeft> */}
                   {/* <ImgTextRight></ImgTextRight> */}
                   <TwoImgsText></TwoImgsText>
                </div>

                <div className="main-content">
                    <BigParagraph></BigParagraph>
                    <SmallParagraph></SmallParagraph>
                    <TwoTextCols></TwoTextCols>
                </div>

                <div className="post-page-add-imgs">
                    <img width="500" height="500"
                        src={require('../../../assets/images/add/add_photo-512.png')} alt="" />
                </div>
            </div>
        </div>
    )
}

export default postPage;