import React from "react";

import "./LiveHome.scss";

const LiveHome = () => {
    return (
        <>
            <div className="hero">
                <div className="content">
                    <h4>Hello, my name is</h4>
                    <h1>
                        Tahmid <span>Ahmed</span>
                    </h1>
                    <h3>I'am a Web Developer.</h3>
                    <div className="newslatter">
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
                    </div>
                </div>
            </div>
        </>
    );
};

export default LiveHome;
