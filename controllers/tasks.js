const Task = require("../Models/task.js");
const getAllTasks = async (req, res) => {
  try {
    const tasks = await Task.find({});
    res.status(200).json({ tasks });
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

const createTask = async (req, res) => {
  try {
    const task = await Task.create(req.body);
    res.status(201).json({ task });
  } catch (error) {
    res.status(500).json({ message: error });
  }
};
const getTask = async (req, res) => {
  try {
    const { id: taskId } = req.params;
    const task = await Task.findOne({ _id: taskId });
    if (!task) {
      return res.status(404).json({ message: `No task with id : ${taskId}` });
    }

    res.status(200).json({ task });
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

const deleteTask = async (req, res) => {
  try {
    const { id: taskId } = req.params;
    const task = await Task.findOneAndDelete({ _id: taskId });
    if (!task) {
      return res.status(404).send({ msg: `not task with id : ${taskId}` });
    }
    res.status(200).json({ task });
    // res.status(200).send()
    // res.status(200).json({ task:null,status:'success'});
  } catch (error) {
    res.status(500).json({ message: error });
  }
};
const updateTask = async (req, res) => {
  try {
    const { id: taskId } = req.params;
    const task = await Task.findOneAndUpdate({ _id: taskId }, req.body,{
      new:true,runValidators:true,
    });
    
    if (!task) {
      return res.status(404).send({ msg: `not task with id : ${taskId}` });
    }
    
    res.status(200).json({task});
  } catch (error) {
    res.status(500).json({ message: error });

  }
};

module.exports = {
  getAllTasks,
  createTask,
  getTask,
  updateTask,
  deleteTask,
};
