const User = require("../models/User.js");

// Method: get - get list user 
// Method get: - get list user page
const getAllUser = async ( req, res) => {
    let page = parseInt(req.query.page) || 1; 
    if (page <= 0) page = 1;

    // let PAGE_SIZE = 6;
    let PAGE_SIZE = parseInt(req.query.limit) || 6;
    if (PAGE_SIZE <= 0) {
        PAGE_SIZE = 6;
    }

    // get data follow page
    // page = parseInt(page);
    // PAGE_SIZE = parseInt(PAGE_SIZE);

    let skip = (page - 1) * PAGE_SIZE;
    // console.log(skip);
    let userRows = await User.countDocuments({});
    // console.log(userRows)
    let totalPage = Math.ceil(userRows / PAGE_SIZE);
    let pagination = { userRows, totalPage, page, PAGE_SIZE };


    try {
        //const user = await User.find();
        const user = await User.find({}).skip(skip).limit(PAGE_SIZE);
        res.json({user, pagination});
        
    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }

};


// Method: get - get one product
const getUserProfile = async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        console.log(user.email);
        res.status(200).json(user);
    } catch (error) {
        res.status(404).json({
            message: error.message
        })
    }
}

// Method put - update profile user
const updateUser = async (req, res) => {
    try {
        const updateUser = await User.updateOne({
            _id: req.params.id
        }, { $set: req.body });
        res.status(200).json(updateUser);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};






module.exports = { getAllUser, getUserProfile, updateUser };