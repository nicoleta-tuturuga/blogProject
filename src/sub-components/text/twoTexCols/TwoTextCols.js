import React from "react";

import '../text.css';

const twoTextCols = () => {

    return (
        <div className="d-flex flex-wrap">
            <div className="main-textarea d-flex">
                <div className="col-lg-6">
                    <p className="post-page-text">
                        What is Lorem Ipsum?
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                        Why do we use it?
                    </p>
                    <form>
                        <textarea className="main-textarea"
                            rows="5" cols="30" placeholder="Write your text here...">
                        </textarea>
                        <button type="submit">Adauga text</button>
                    </form>
                </div>

                <div className="col-lg-6">
                    <p className="post-page-text">
                        What is Lorem Ipsum?
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                        Why do we use it?
                    </p>
                    <form>
                        <textarea className="main-textarea"
                            rows="5" cols="30" placeholder="Write your text here...">
                        </textarea>
                        <button type="submit">Adauga text</button>
                    </form>
                </div>
            </div>

        </div>
    )
}

export default twoTextCols;