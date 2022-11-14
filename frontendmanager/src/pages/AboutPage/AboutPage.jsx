import React from "react";
import "./AboutPage.scss";

const AboutPage = () => {
    return (
        <>
            <h1>About us</h1>
            <div className="about_container">
                <div className="box box_1">
                    <p>box 1</p>
                    <p>flex item</p>
                </div>

                <div className="box box_2">
                    <p>box 2</p>
                    <p>flex item</p>
                </div>

                <div className="box box_3">
                    <p>box 3</p>
                    <p>flex item</p>
                </div>
            </div>
        </>
    );
};

export default AboutPage;
