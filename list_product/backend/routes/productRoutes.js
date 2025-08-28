const express = require('express')
const productsController = require('../controllers/product.controller')
const router = express.Router();


router.get("/getProducts", productsController.getProducts);
router.post("/createProduct", productsController.createProduct)

router.post("/deleteProduct:id", productsController.deleteProduct)


module.exports = router;