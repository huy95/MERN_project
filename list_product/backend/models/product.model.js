const mongoose = require('mongoose')

const productSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true
        },
        price: {
            type: Number,
            require: true,
        },
        image: {
            type:String,
            require: true
        }
    }, {
        timestamps: true,
    }
)

const Products = mongoose.model("product", productSchema);
module.exports = Products;