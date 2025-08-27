const Todo = require("../models/Todo.js");

 const createTodo = async (req, res) => {
  try {
    console.log(req);
    const data = req.body;
    const todo = new Todo(data);
    const result = await todo.save();
    res.status(201).send({ message: "Created new task" });
  } catch (error) {
    res.status(error);
  }
};
const getAllToDo = async (req, res) => {
  let { userId } = req.query;
  console.log(userId);
  try {
    const result = await Todo.find({ createdBy: userId });
    res.send(result);
  } catch (err) {
    res.status(400).send(error);
  }
};

const updateTodo = async (req, res) => {
  try {
    const { id } = req.query;
    const data = req.body;
    const result = await Todo.findByIdAndUpdate(
      id,
      { $set: { isCompleted: true }, completedOn: new Date() },
      { new: true }
    );
    console.log(result);
    res.send({ message: "Todo list updated" });
  } catch (err) {
    res.status(400).send(err);
  }
};

const deleteToDo = async (req, res) => {
  try {
    console.log("!23123");
    const { id } = req.params;
    console.log(id);
    const result = await Todo.findByIdAndDelete(id);
    res.send({ message: "todo task deleted" });
  } catch (error) {
    res.status(400).send(error);
  }
};
const TodoController = {
  createTodo,
  getAllToDo,
  updateTodo,
  deleteToDo
};

module.exports = TodoController; 