const Products = require("../models/product.model");

const getProducts = async (req, res) => {
    try {
        console.log("123123")
        const products = await Products.find({});
        res.status(200).json({success: true, data: products});
    } catch(err) {
        res.status(500).json({success: false, message: "Server error"})
    }
}

const createProduct = async (req, res) => {
    try {
        const product = req.body;
        if(!product.name || !product.price || !product.image) {
            return res.status(400).json({success: false, message: "please provide all fields"});
        }
        const newProduct = new Products(product);
        await newProduct.save();
        res.status(201).json({success: true, data: newProduct})
    } catch (e){
        res.status(500).json({success: false, message: "Server error"})
    }
}

const deleteProduct = async (req, res) => {
    const {id} = req.query;
    try {
        Products.findByIdAndDelete({id:id})
        res.status(201).json({success: false, message: "deleted product success"})
    }catch(e){
        res.status(500).json({success: false, message: "Server error"})
    }
    
}

const productsController = {
    getProducts,
    createProduct,
    deleteProduct
}

module.exports = productsController;