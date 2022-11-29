import React from "react";
import Footer from "../../components/footer/Footer";
import Navbar from "../../components/navbar/Navbar";
import UserProfileEdit from "../../components/userProfileEdit/UserProfileEdit";

const UserEditPage = () => {
    return (
        <div>
            <Navbar />
            <UserProfileEdit />
            <Footer />
        </div>
    );
};

export default UserEditPage;
