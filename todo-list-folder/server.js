require('dotenv').config();
var db = require('./db/db.js')

const express = require('express');
const app = express();
const authRoutes = require('./routes/authRoutes')
const cors = require('cors');
const todoRoutes = require('./routes/todoRoutes.js')



const port = process.env.PORT || 3001;
app.use(cors());
app.use(express.json())
db();

app.use('/api', authRoutes)
app.use('/api/todo', todoRoutes)

app.get('/', (req, res) => {
  res.send(`Kết nối DB: `);
});

app.listen(port, () => {
  console.log(`Server chạy ở cổng ${port}`);
});