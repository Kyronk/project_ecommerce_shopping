const Admin = require("../models/Admin.js");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const adminController = {
    // register
    register: async (req, res) => {
        try {
            const salt = await bcrypt.genSalt(10);
            const hashed = await bcrypt.hash(req.body.password, salt);

            // create new a user
            const newAdmin = await new Admin({
                username: req.body.username,
                password: hashed,
            });

            // save to db
            const admin = await newAdmin.save();
            res.status(200).json(admin);
        } catch (error) {
            res.status(500).json(error);
        }
    },

    //login
    login: async (req, res) => {
        try {
            const admin = await Admin.findOne({ username: req.body.username });
            if (!admin) {
                return res.status(404).json("Wrong username");
            }
            const validPassword = await bcrypt.compare(
                req.body.password,
                admin.password
            );
            if (!validPassword) return res.status(404).json("Wrong password");
            if (admin && validPassword) {
                const accessToken = jwt.sign(
                    {
                        id: admin._id,
                        username: admin.username,
                    }, process.env.JWT_ACCESS_KEY,
                    {
                        expiresIn: "1h"
                    }
                );
                const refreshToken = jwt.sign(
                    {
                        id: admin._id,
                        username: admin.username
                    }, process.env.JWT_REFRESH_KEY,
                    {
                        expiresIn: "365d"
                    }
                );


                //lưu vào db
                // refreshTokenDB.push(accessToken);

                //res.status(200).json("login is success");
                //save refresh in cookie
                res.cookie("refreshToken", refreshToken, {
                    httpOnly: true,
                    secure: false,
                    path: "/",
                    sameSite: "strict",
                });

                // get all data tru password
                const {password, ...others} = admin._doc;
                res.status(200).json({...others, accessToken});
            }
        } catch (error) {
            res.status(500).json(error);
        }
    },

    //logout
    logout: async( req, res) => {
        res.clearCookie("refreshToken");
        // reset cai database ()
        res.status(200).json("Logged out!"); 
    }
};

module.exports = adminController;
