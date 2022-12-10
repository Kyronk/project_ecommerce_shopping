import React, { useEffect, useState } from "react";

import axios from "axios";
import { useParams, Link, NavLink } from "react-router-dom";

const EditUser = () => {
    const [user, setUser] = useState({});
    const { id } = useParams();

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [address, setAddress] = useState("");
    const [username, setUsername] = useState("");

    useEffect(() => {
        getUser();
    }, []);

    const getUser = async () => {
        const response = await axios.get(
            `http://localhost:5012/api/admin/user-profile/${id}`
        );
        const profile = response.data;
        // console.log("user", getDataItem);
        // setUser(getDataUser);
        setAddress(profile.address);
        setUsername(profile.username);
        setFirstName(profile.firstName);
        setLastName(profile.lastName);
        setEmail(profile.email);
    };

    const updateUser = async (event) => {
        event.preventDefault();
        try {
            await axios.patch(
                `http://localhost:5012/api/admin/user-profile-update/63734cc1c491b45e2ac5fdd2`,
                {
                    firstName,
                    lastName,
                    username,
                    email,
                    address,
                }
            );
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <>
            <div className="user-profile">
                <div className="user-profile_container">
                    <div className="user-profile_title">Edit User Profile</div>
                    <div className="user-profile_content">
                        <form onSubmit={updateUser}>
                            <div className="user-details">
                                <div className="input-box">
                                    <span className="details">First Name</span>
                                    <input
                                        type="text"
                                        placeholder="Enter your first name"
                                        required
                                        onChange={(e) =>
                                            setFirstName(e.target.value)
                                        }
                                        value={firstName}
                                    />
                                </div>
                                <div className="input-box">
                                    <span className="details">Last Name</span>
                                    <input
                                        type="text"
                                        placeholder="Enter your last name"
                                        required
                                        onChange={(e) =>
                                            setLastName(e.target.value)
                                        }
                                        value={lastName}
                                    />
                                </div>
                                <div className="input-box">
                                    <span className="details">Username</span>
                                    <input
                                        type="text"
                                        placeholder="Enter your username"
                                        required
                                        onChange={(e) =>
                                            setUsername(e.target.value)
                                        }
                                        value={username}
                                    />
                                </div>
                                <div className="input-box">
                                    <span className="details">Email</span>
                                    <input
                                        type="text"
                                        placeholder="Enter your email"
                                        required
                                        onChange={(e) =>
                                            setEmail(e.target.value)
                                        }
                                        value={email}
                                    />
                                </div>
                                <div className="input-box">
                                    <span className="details">Address</span>
                                    <input
                                        type="text"
                                        placeholder="Enter your address"
                                        required
                                        onChange={(e) =>
                                            setAddress(e.target.value)
                                        }
                                        value={address}
                                    />
                                </div>
                                {/* <div className="input-box">
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
                        </div> */}
                            </div>
                            {/* <div className="gender-details">
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
                    </div> */}
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

export default EditUser;
