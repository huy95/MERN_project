const express = require('express');
const TodoController  = require('../controllers/todoController');
const router = express.Router();
const {authenticateToken} = require("../middleware/authjwt.js")

router.post('/create-to-do',authenticateToken, TodoController.createTodo);
router.get('/get-to-do',authenticateToken, TodoController.getAllToDo);
router.post('/update-to-do',authenticateToken, TodoController.updateTodo);
router.delete('/delete-to-do/:id',authenticateToken, TodoController.deleteToDo);

module.exports = router;