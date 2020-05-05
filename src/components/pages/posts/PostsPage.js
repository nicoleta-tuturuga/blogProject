import React from "react";

import "../post/Post.css";
import "./PostsPage.css"
import "../../6.hobbies/Hobbies.css";

import Post from "../post/Post";
import Side from "../../6.hobbies/Side";


const Posts = () => {

    return (
        <div>
            <div className="row posts-page-container">
                <div className="col-main-post col-lg-10">
                    <Post />
                    <Post />
                    <Post />
                </div>
                <div className="col-lg-2">
                    <Side />
                </div>
            </div>
        </div>
    )
}

export default Posts;