
import React, { useState, useEffect } from "react";

import axios from "axios";

import "../userProfile/UserProfile.scss";

const UserProfileEdit = () => {

    const [userProfile, setUserProfile] = useState({});

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [address, setAddress] = useState("");
    const [username, setUsername] = useState("");

    useEffect(() => {
        getUserProfile()
    }, [])

    const getUserProfile = async () => {
        const response = await axios.get("http://localhost:5012/api/admin/user-profile/63734cc1c491b45e2ac5fdd2");
        const profile = response.data;
        setUserProfile(profile);
        // console.log(profile);
        setAddress(profile.address);
        setUsername(profile.username);
        setFirstName(profile.firstName);
        setLastName(profile.lastName);
        setEmail(profile.email);

    }


    return (
        <>
            <div className="user-profile">
                <div className="user-profile_container">
                    <div className="user-profile_title">Edit User Profile</div>
                    <div className="user-profile_content">
                        <form action="#">
                            <div className="user-details">
                                <div className="input-box">
                                    <span className="details">First Name</span>
                                    <input
                                        type="text"
                                        placeholder="Enter your name"
                                        required
                                    />
                                </div>
                                <div className="input-box">
                                    <span className="details">Last Name</span>
                                    <input
                                        type="text"
                                        placeholder="Enter your name"
                                        required
                                    />
                                </div>
                                <div className="input-box">
                                    <span className="details">Username</span>
                                    <input
                                        type="text"
                                        placeholder="Enter your username"
                                        required
                                    />
                                </div>
                                <div className="input-box">
                                    <span className="details">Email</span>
                                    <input
                                        type="text"
                                        placeholder="Enter your email"
                                        required
                                    />
                                </div>
                                <div className="input-box">
                                    <span className="details">
                                        Phone Number
                                    </span>
                                    <input
                                        type="text"
                                        placeholder="Enter your number"
                                        required
                                    />
                                </div>
                                <div className="input-box">
                                    <span className="details">Password</span>
                                    <input
                                        type="text"
                                        placeholder="Enter your password"
                                        required
                                    />
                                </div>
                                <div className="input-box">
                                    <span className="details">
                                        Confirm Password
                                    </span>
                                    <input
                                        type="text"
                                        placeholder="Confirm your password"
                                        required
                                    />
                                </div>
                            </div>
                            <div className="gender-details">
                                <input type="radio" name="gender" id="dot-1" />
                                <input type="radio" name="gender" id="dot-2" />
                                <input type="radio" name="gender" id="dot-3" />
                                <span className="gender-title">Gender</span>
                                <div className="category">
                                    <label htmlFor="dot-1">
                                        <span className="dot one"></span>
                                        <span className="gender">Male</span>
                                    </label>
                                    <label htmlFor="dot-2">
                                        <span className="dot two"></span>
                                        <span className="gender">Female</span>
                                    </label>
                                    <label htmlFor="dot-3">
                                        <span className="dot three"></span>
                                        <span className="gender">
                                            Prefer not to say
                                        </span>
                                    </label>
                                </div>
                            </div>
                            <div className="button">
                                <input type="submit" value="Update" />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};

export default UserProfileEdit;
