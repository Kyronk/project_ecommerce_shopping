const User = require("../models/User.js");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const userController = {
    // register
    register: async (req, res) => {
        try {
            const salt = await bcrypt.genSalt(10);
            const hashed = await bcrypt.hash(req.body.password, salt);

            // create new a user
            const newUser = await new User({
                username: req.body.username,
                password: hashed,
            });

            // save to db
            const user = await newUser.save();
            res.status(200).json(user);
        } catch (error) {
            res.status(500).json(error);
        }
    },

    // Generate access.token
    generateAccessToken: (user) => {
        return jwt.sign(
            {
                id: user.id,
                username: user.username,
            },
            process.env.JWT_ACCESS_KEY,
            {
                expiresIn: "1h",
            }
        );
    },
    // Generate refresh.token
    generateRefreshToken: (user) => {
        return jwt.sign(
            {
                id: user.id,
                username: user.username,
            },
            process.env.JWT_REFRESH_KEY,
            {
                expiresIn: "365d",
            }
        );
    },

    // login
    login: async (req, res) => {
        try {
            const user = await User.findOne({ username: req.body.username });
            if (!user) {
                return res.status(404).json("Wrong username");
            }
            const validPassword = await bcrypt.compare(
                req.body.password,
                user.password
            );
            if (!validPassword) return res.status(404).json({"mes": "Wrong password"});
            if (user && validPassword) {
                const accessToken = userController.generateAccessToken(user);
                const refreshToken = userController.generateRefreshToken(user);
                //lưu vào db
                // refreshTokenDB.push(accessToken);
                // res.status(200).json("login is success");
                // save refresh in cookie
                res.cookie("refreshToken", refreshToken, {
                    httpOnly: true,
                    secure: false,
                    path: "/",
                    sameSite: "strict",
                });

                // get all data tru password
                const { password, ...others } = user._doc;
                res.status(200).json({ ...others, accessToken });
            }
        } catch (error) {
            res.status(500).json(error);
        }
    },

    // refresh token
    // requestRefreshToken: async (req, res) => {
    //     const refreshToken = req.cookies.refreshToken;
    //     if (!refreshToken) return res.status(401).json("you are not authentication");
    //     // ?
    //     // if(!refreshTokenDB.includes(refreshToken)) {
    //     //     return res.status(403).json("Refresh token is not valid")
    //     // }
    //     jwt.verify(refreshToken, process.env.JWT_REFRESH_KEY, (err, user) => {
    //         if (err) {
    //             console.log("loi o dau do");
    //         }
    //         // xoa token cu
    //         // refreshTokenDB = refreshTokenDB.filter(
    //         //     (token) => token !== refreshToken
    //         // );
    //         // create new a access token
    //         const newAccessToken = authController.generateAccessToken(user);
    //         const newRefreshToken = authController.generateRefreshToken(user);
    //         // luu token moi
    //         // refreshTokenDB.push(newAccessToken);
    //         res.cookie("refreshToken", newRefreshToken, {
    //             httpOnly: true,
    //             secure: false,
    //             path: "/",
    //             sameSite: "strict",
    //         });
    //         res.status(200).json({ accessToken: newAccessToken });
    //     });
    // },

    // User Logout
    logout: async (req, res) => {
        res.clearCookie("refreshToken");
        res.status(200).json("Logged out!");
    },
};

module.exports = userController;
