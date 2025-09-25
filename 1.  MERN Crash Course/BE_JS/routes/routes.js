import express from 'express';
import { getAllProducts, createProduct, deleteProduct, updateProduct } from '../controllers/controllers.js';

const router = express.Router();

router.get("/", getAllProducts);
router.post("/create", createProduct);
router.delete("/deleted/:id", deleteProduct);
router.post("/update", updateProduct);

export default router;
