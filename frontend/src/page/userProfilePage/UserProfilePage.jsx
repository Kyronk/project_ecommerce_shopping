import React from "react";
import Navbar from "../../components/navbar/Navbar";
import UserProfile from "../../components/userProfile/UserProfile";
import Footer from "../../components/footer/Footer";

const UserProfilePage = () => {
    return (
        <>
            <div>
                <Navbar />
                <UserProfile />
                <Footer />
            </div>
        </>
    );
};

export default UserProfilePage;
