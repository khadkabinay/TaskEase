/* External mudules */
const express = require('express');
const db = require('../models');




// INDEX ROUTE FOR TASK
const index = async (req, res) => {
    try{
        const foundTasks = await db.Task.find({}).populate("user").exec()
        res.status(200).json({ status: 200, "tasks": foundTasks });
    }catch (err) {
        return res.status(500).json({
        status: 500,
        message: "Something went wrong. Please try again",
        });
    }

}


// SHOW ROUTE FOR TASKS
const show = async (req, res) => {
    try{
    const foundTask = await db.Task.findById(req.params.id)
        if(!foundTask){
            res.status(200).json({ "message": "No Task found with id " });
        }else{
            res.status(200).json({  status: 200, "task" : foundTask });
        }

    }catch(err){
        return res.status(500).json({
            status: 500,
            message: "Something went wrong. Please try again",
        });
    }

};



// CREATE ROUTE FOR TASK
const create = async (req, res) => {
    try {
        const  taskCreated = await db.Task.create(req.body);
        const  foundUser = await db.User.findById(req.body.user);
        foundUser.tasks.push(taskCreated)
        await foundUser.save()
        res.status(201).json({ "task" : taskCreated });

    }catch(err){
        return res.status(500).json({
            status: 500,
            message: "Something went wrong. Please try again",
        });
    }
};



//UPDATE ROUTE FOR TASK
const update = async(req, res) => {
    try {
    const taskUpdated = await db.Task.findByIdAndUpdate(req.params.id, req.body, {new: true}) 
            if(!taskUpdated){
                res.status(200).json({ "message": "No task is found" })
            }else{
            res.status(200).json({ "task": taskUpdated});
        }
    }catch(err){
        return res.status(500).json({
            status: 500,
            message: "Something went wrong. Please try again",
        });
    }
};



  // DELETE ROUTE FOR TASK
const destroy = async (req, res) => {
    try {
    const taskDeleted = await db.Task.findByIdAndDelete(req.params.id)
        if(!taskDeleted){
            res.status(200).json({ "message": "No task is found with id" });

        }else{
            const foundUser = await db.User.findById(req.body._id)
            foundUser.tasks.remove(taskDeleted._id)
            await foundUser.save()
            res.status(200).json({ "task": taskDeleted});
        }
    }catch(err){
        console.log("error", err)
        return res.status(500).json({
            status: 500,
            message: "Something went wrong. Please try again",
        });
}
}




module.exports = {
    index,
    show,
    create,
    update,
    destroy
};