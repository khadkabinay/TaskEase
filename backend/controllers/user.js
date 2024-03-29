/* External mudules */
const express = require("express");
const db = require("../models");

// INDEX ROUTE
const index = async (req, res) => {
  try {
    const authUserVerified = await db.User.findById(req.userId)
      .populate("tasks")
      .exec();
    const users = await db.User.find({ isAdmin: false })
      .populate("tasks")
      .exec();

    const top3Users = await db.User.find({ isAdmin: false })
      .sort({ completedTask: -1 })
      .limit(3)
      .populate("tasks")
      .exec();

    const adminInfo = await db.User.find({ isAdmin: true });
    const allUsers = await db.User.find({}).populate("tasks").exec();
    res.status(200).json({
      status: 200,
      data: authUserVerified,
      adminUser: adminInfo,
      userData: users,
      usersData: allUsers,
      top3: top3Users,
    });
  } catch (err) {
    return res.status(500).json({
      status: 500,
      message: "Something went wrong. Please try again",
    });
  }
};

// SHOW ROUTE
const show = async (req, res) => {
  try {
    const foundUser = await db.User.findById(req.params.id)
      .populate("tasks")
      .exec();
    if (!foundUser) {
      res.status(200).json({ message: "No User found with id " });
    } else {
      res.status(200).json({ status: 200, user: foundUser });
    }
  } catch (err) {
    return res.status(500).json({
      status: 500,
      message: "Something went wrong. Please try again",
    });
  }
};

// CREATE ROUTE
const create = async (req, res) => {
  try {
    const userCreated = await db.User.create(req.body);
    res.status(201).json({ user: userCreated });
  } catch (err) {
    return res.status(500).json({
      status: 500,
      message: "Something went wrong. Please try again",
    });
  }
};

//UPDATE ROUTE
const update = async (req, res) => {
  try {
    const userUpdated = await db.User.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!userUpdated) {
      res.status(200).json({ message: "No user is found" });
    } else {
      res.status(200).json({ user: userUpdated });
    }
  } catch (err) {
    return res.status(500).json({
      status: 500,
      message: "Something went wrong. Please try again",
    });
  }
};

// DELETE ROUTE
const destroy = async (req, res) => {
  try {
    const userDeleted = await db.User.findByIdAndDelete(
      req.params.id || req._id
    );
    if (!userDeleted) {
      res.status(200).json({ message: "No user is found with id" });
    } else {
      await db.Task.deleteMany({ user: userDeleted._id });
      res.status(200).json({ user: userDeleted });
    }
  } catch (err) {
    return res.status(500).json({
      status: 500,
      message: "Something went wrong. Please try again",
    });
  }
};

module.exports = {
  index,
  show,
  create,
  update,
  destroy,
};
