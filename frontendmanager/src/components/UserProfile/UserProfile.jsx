import React, { useEffect, useState } from "react";
import "./UserProfile.scss";

import axios from "axios";
import { useParams, Link, NavLink } from "react-router-dom";


const UserProfile = () => {
    const [user, setUser] = useState({});
    const { id } = useParams();

    useEffect(() => {
        getUser();
    }, []);

    const getUser = async () => {
        const response = await axios.get(
            `http://localhost:5012/api/admin/user-profile/${id}`
        );
        const getDataUser = response.data;
        // console.log("user", getDataItem);
        setUser(getDataUser);

        
    };




    return (
        // <>
        //     UserProfile
        //     <h3>{user.username}</h3>
        //     <h4>first name : {user.firstName}</h4>
        //     <h4>last name : {user.lastName}</h4>
        //     <h4>email : {user.email}</h4>


        // </>
        <>
            <div className="user-profile">
                <div className="user-profile_container">
                    <div className="user-profile_title">
                        Profile User
                        <NavLink to={`/user-profile-edit/${user._id}`}>
                            <button     
                                className="btn" 
                                style={{margin: "0 15px"}}
                                // idUser={user.id}
                                >Edit</button>
                        </NavLink>
                    </div>
                    <div className="user-profile_content">
                        <form action="#">
                            <div className="user-details">
                                <div className="input-box">
                                    <span className="details">First Name</span>
                                    <p>{user.firstName}</p>
                                </div>
                                <div className="input-box">
                                    <span className="details">Last Name</span>
                                    <p>{user.lastName}</p>
                                </div>
                                <div className="input-box">
                                    <span className="details">Username</span>
                                    <p>{user.username}</p>
                                </div>
                                <div className="input-box">
                                    <span className="details">Email</span>
                                    <p>{user.email}</p>
                                </div>
                                <div className="input-box">
                                    <span className="details">Address</span>
                                    <p>{user.address}</p>
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
                            {/* <div className="button">
                                <input type="submit" value="Register" />
                            </div> */}
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};

export default UserProfile;
