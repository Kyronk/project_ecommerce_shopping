import "./LiveHome.scss";
import london from "../../assets/imgtestUI/london.png";
import newyork from "../../assets/imgtestUI/newyork.png";
import washington from "../../assets/imgtestUI/washington.png";

import React, {useState, useEffect} from "react";



const LiveHome = () => {


    return (
        <>
            <div className="live-home">
                <div className="live-home_content">
                    <h4>Hello, my name is</h4>
                    <h1>
                        Tahmid <span>Ahmed</span>
                    </h1>
                    <h3>I'am a Web Developer.</h3>
                    {/* <div className="live-home_news-latter">
                        <form>
                            <input
                                type="email"
                                name="email"
                                id="mail"
                                placeholder="Enter Your Email"
                            />
                            <input
                                type="submit"
                                name="submit"
                                value="Lets Start"
                            />
                        </form>
                    </div> */}
                </div>
            </div>

            {/* ====== style ==== */}

            <div className="live-home_style">
                <h1>Our Global Campus</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                <div className="live-home_style_row">
                    <div className="live-home_style-col">
                        <img src={london} alt="" />
                        <div className="player">
                            <h3>LONDON</h3>
                        </div>
                    </div>
                    <div className="live-home_style-col">
                        <img src={newyork} alt="" />
                        <div className="player">
                            <h3>NEW YORK</h3>
                        </div>
                    </div>
                    <div className="live-home_style-col">
                        <img src={washington} alt="" />
                        <div className="player">
                            <h3>WASHINGTON</h3>
                        </div>
                    </div>
                </div>
            </div>


            {/* ===== Demo grid====== */}

            <div className="live-home_product-list">
                

            </div>

        </>
    );
};

export default LiveHome;
