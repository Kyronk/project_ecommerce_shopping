import React from "react";

import "./LiveHome.scss";
import image1 from "../../assets/img/images/image1.png";

const LiveHome = () => {
    return (
        <>
            <div className="row">
                <div className="col-2 content">
                    <h1>
                        give Your workout <br /> - new style
                    </h1>
                    <p>
                        Lorem, ipsum dolor sit amet <br />
                        consectetur adipisicing elit. Inventore qua s esse
                        maiores, optio minus minima aperiam doloribus .
                    </p>
                    <div className="btn-home">
                        <button href="/" className="btn">
                            Explore Now{" "}
                        </button>
                    </div>
                </div>
                <div className="col-2">
                    <img src={image1} alt="" />
                </div>
            </div>

            
        </>
    );
};

export default LiveHome;
