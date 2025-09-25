import Product from "../models/models.js";

export const getAllProducts = async (req, res) => {
    try {
        const products = await Product.find({}); // Fetch all products from the database
        res.status(200).json(products); // Send the products as a JSON response
    } catch (error) {
        res.status(500).json({ message: "Server Error" }); // Handle server errors
    }
}

export const createProduct = async (req, res) => {
    try {
        const { name, price, image } = req.body; // Destructure product details from the request body 
        if (!name || !price || !image) {
            return res.status(400).json({ message: "Please provide all required fields" }); // Validate input
        }
        const newProduct = new Product({ name, price, image }); // Create a new product instance
        await newProduct.save(); // Save the product to the database
        res.status(201).json(newProduct); // Send the created product as a JSON response
    } catch (error) {
        res.status(500).json({ message: "Server Error" }); // Handle server errors
    }
}

export const deleteProduct = async (req, res) => {
    try {
        console.log(req.params);
        const { id } = req.params;
        const deletedProduct = await Product.findByIdAndDelete(id); // Find and delete the product by ID
        if (!deletedProduct) {
            return res.status(404).json({ message: "Product not found" }); // Handle case where product is not found
        }
        res.status(200).json({ message: "Product deleted successfully" }); // Send success response
    } catch (error) {
        res.status(500).json({ message: "Server Error" }); // Handle server errors
    }
}

export const updateProduct = async (req, res) => {
    try {
        const { name, price, image, id } = req.body; // Destructure updated product details from the request body
        const updatedProduct = await Product.findByIdAndUpdate(
            id,
            { name, price, image }, // Update the product details       
            { new: true } // Return the updated product
        );
        if (!updatedProduct) {
            return res.status(404).json({ message: "Product not found" }); // Handle case where product is not found
        }

        res.status(200).json(updatedProduct); // Send the updated product as a JSON response
    } catch (error) {
        res.status(500).json({ message: "Server Error" }); // Handle server errors
    }
}

