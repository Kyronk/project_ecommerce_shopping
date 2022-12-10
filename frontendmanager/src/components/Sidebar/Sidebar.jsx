import React, { useState} from "react";
import "./Sidebar.scss";
import { NavLink } from "react-router-dom";
import {
    FaBars,
    FaShoppingBag,
    FaTh,
    FaThList,
    FaUser,
} from "react-icons/fa";
import { FcAbout,} from "react-icons/fc";


const Sidebar = ({children}) => {
    const  [isOpen, setIsOpen ] = useState(true);
    const toggle = () => setIsOpen(!isOpen);
    const menuItem = [
        {
            path: "/home",
            name: "Dashboard",
            icon: <FaTh />,
        },
        {
            path: "/oder",
            name: "Oder",
            icon: <FaThList/>
        },
        {
            path: "/productlist",
            name: "Product list",
            icon: <FaThList />,
        },
        {
            path: "/user-list",
            name: "User List",
            icon: <FaUser />
        },
        {
            path: "/addproduct",
            name: "Add product",
            icon: <FaShoppingBag />,
        },
        {
            path: "/about",
            name: "About",
            icon: <FcAbout />,
        },
    ];
    return (
        <div className="sidebar_container">
            <div 
                className="sidebar"
                style={{width: isOpen? "200px" : "50px"}} >
                <div className="top_section">
                    <h1 
                        style={{display: isOpen? "block" : "none"}}
                        className="logo">Logo</h1>
                    <div 
                        style={{ marginLeft: isOpen ? "50px" : "0px" }} 
                        className="bars">
                        <FaBars onClick={toggle}/>
                    </div>
                </div>
                {
                    menuItem.map((item, index) => (
                        <NavLink
                            to={item.path}
                            key={index}
                            className='link'
                            activeclassname="active"
                            >
                                <div className="icon">{item.icon}</div>
                                <div style={{display: isOpen? "block": "none"}}>{item.name}</div>
                        </NavLink>
                    ))
                }
            </div>
            <main>{children}</main>
        </div>
    );
};

export default Sidebar;
