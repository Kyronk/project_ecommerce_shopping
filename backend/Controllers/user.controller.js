const User = require('../Models/User');
//const Profile = require('../Models/ProfileUser');

const argon2 = require("argon2");
const jwt = require("jsonwebtoken");
const verifyToken = require('../Middleware/jwt.middleware.js');

exports.register = async function (req, res) {
    const { username, password } = req.body;

    if (!username || !password)
        return res.status(400)
            .json({ success: false, message: 'Missing username of password' })

    try {
        //Checking for existing user
        const user = await User.findOne({ username });
        if (user)
            return res.status(400).json({ success: false, message: "Username already taken" });

        // All good
        const hashedPassword = await argon2.hash(password);
        const newUser = new User({  
                username,   
                password: hashedPassword 
            });
        await newUser.save();

        //RETURN Json token web
        const accessToken = jwt.sign({ userId: newUser._id }, process.env.ACCESS_TOKEN_SECRET);
        res.json({
            success: true,
            message: "user created successfully",
            accessToken,
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({ success: false, message: "Internal Server Error" });
    }
};

exports.login = async (req, res) => {
    const { username, password } = req.body;

	//Simple validation
	if (!username || !password)     
        return res.status(400)
            .json({ success: false, message: "Missing username or password" });

	try {
		//Check for existing user
		const user = await User.findOne({ username });
		if (!user) return res.status(400).json({ success: false, message: "Incorrect username or password" });

		// Username found
		const passwordValid = await argon2.verify(user.password, password);
		if (!passwordValid) return res.status(400).json({ success: false, message: "Incorrect username password" });

		//All good
		//Return token
		const accessToken = jwt.sign({ userId: user._id }, process.env.ACCESS_TOKEN_SECRET);
		res.json({
			success: true,
			message: "user logged successfully",
			accessToken,
		});
	} catch (error) {
		console.log(error);
		res.status(500).json({ success: false, message: "Internal Server Error" });
	}
}