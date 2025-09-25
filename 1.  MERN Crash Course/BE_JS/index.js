import express from 'express';
import cors from 'cors';
import { connectDB } from './config/db.js';
import productRoutes from './routes/routes.js';
import dotenv from 'dotenv';
dotenv.config();

const app = express();
const PORT = 3001;

// Middleware
app.use(express.json());
app.use(cors());

// Routes
app.get('/', (req, res) => {
    res.send('Hello from Backend Node.js!');
});
app.use("/api/products", productRoutes);

// Start server sau khi DB ok
connectDB()
    .then(() => {
        app.listen(PORT, () => {
            console.log(`✅ Server running on http://localhost:${PORT}`);
        });
    })
    .catch((err) => {
        console.error("❌ DB connection failed:", err);
        process.exit(1);
    });
