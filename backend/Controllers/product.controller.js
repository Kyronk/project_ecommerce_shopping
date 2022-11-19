const Product = require("../models/Product.js");

// Method: get - get list product
// Method get: - get list product page
const getProducts = async ( req, res) => {
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
    let productRows = await Product.countDocuments({});
    // console.log(userRows)
    let totalPage = Math.ceil(productRows / PAGE_SIZE);
    let pagination = { productRows, totalPage, page, PAGE_SIZE };


    try {
        const product = await Product.find({}).skip(skip).limit(PAGE_SIZE);
        res.json({ product, pagination });
        
    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }

};





// Method: get - get one product
const getItemProduct = async (req, res) => {
    try {
        const itemProduct = await Product.findById(req.params.id);
        res.status(200).json(itemProduct);
    } catch (error) {
        res.status(404).json({
            message: error.message
        })
    }
}

//Method Post - create one Product

const createProduct = async (req, res) =>  {
    const newProduct = new Product(req.body);

    try {
        const savedProduct = await newProduct.save();
        res.status(200).json(savedProduct);
    } catch (err) {
        res.status(500).json(err);
    }
}

//Method Update/patch - update one Product by id
const updateProduct = async (req, res) => {
    try {
        const updateProduct = await Product.updateOne({
            _id: req.params.id
        }, {$set: req.body});
        res.status(200).json(updateProduct);
    } catch (error) {
        res.status(400).json({message: error.message});
    }
};


//Method Delete - delete product by id

const deleteProduct = async (req, res) => {
    try {
        const deleteProduct = await Product.deleteOne({
            _id: req.params.id
        });
        res.status(200).json(deleteProduct);
    } catch (error) {
        res.status(400).json({message: error.message});
    }
};


module.exports = {getProducts, getItemProduct, createProduct, updateProduct, deleteProduct};