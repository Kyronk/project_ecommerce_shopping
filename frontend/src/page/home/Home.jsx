import React from "react";
import LiveHome from "../../components/liveHome/LiveHome";
import Navbar from "../../components/navbar/Navbar";

const Home = () => {
    return (
        <div>
            <Navbar />
            <LiveHome />
            <h2>home Component</h2>
        </div>
    );
};

export default Home;
