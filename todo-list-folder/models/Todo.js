const mongoose = require("mongoose")
const {Schema} = mongoose

const toDoSchema = new Schema({
    title: {type: String, required: true},
    description: {type: String, required: true},
    isCompleted: {type: String, required: true},
    completedOn: String,
    createdBy: {
        ref: "User",
        type: Schema.ObjectId,
        require: true
    }
}, {
    timestamps: true
})

const Todo = mongoose.model("ToDo", toDoSchema)
module.exports = Todo