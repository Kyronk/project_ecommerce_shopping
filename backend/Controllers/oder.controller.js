const Oder = require("../models/Oder");

const oderController = {

    // Method post 
    createOder : async(req, res) => {
        const newOder = new Oder(req.body);

        try {
            const savedOder = await newOder.save();
            res.status(200).json(savedOder);
        } catch (err) {
            res.status(500).json(err);
        }
    },

    
    //method get
    getOderList: async(req, res) => {
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

    let oderRows = await Oder.countDocuments({});

    let totalPage = Math.ceil( oderRows / PAGE_SIZE);
    let pagination = { oderRows, totalPage, page, PAGE_SIZE };

    try {
        const oderList = await oder.find({}).skip(skip).limit(PAGE_SIZE);
        res.json({ oderList, pagination });
        
    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
    },

    // method get


}
module.exports = oderController;