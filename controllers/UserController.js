/* eslint-disable no-unused-vars */
const bcrypt = require("bcrypt");
const Post = require("../models/Post");
const User = require("../models/User");

// ========Get a User============
const singleUserByParams = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (user) {
      res.status(200).send({
        status: 200,
        success: true,
        message: `User found successfully`,
        data: user,
      });
    } else {
      res.status(404).send({
        status: 404,
        success: false,
        message: `user not found`,
      });
    }
  } catch (error) {
    return res.status(500).send(error);
  }
};

// ========Get a User============
const singleUserByMail = async (req, res) => {
  try {
    const userbyMail = await User.find({ email: req.body.email });

    if (userbyMail.length > 0) {
      res.status(200).send({
        status: 200,
        success: true,
        message: `User found successfully`,
        data: userbyMail,
      });
    } else {
      res.status(404).send({
        status: 404,
        success: false,
        message: `user not found`,
      });
    }
  } catch (error) {
    return res.status(500).send(error);
  }
};


// ========Get all User for admin============
const allleUser = async (req, res) => {
  try {
      const users = await User.find({});
       if (users) {
      res.status(200).send({
        status: 200,
        success: true,
        message: `user found successfully`,
        data: users,
      })
    } else {
      res
        .status(403)
        .send({ status: 403, success: false, message: "forbiden access" });
    }
      
    } 
  catch (error) {
    return res.status(500).send(error);
  }
};

// ========Update User===========
const updateUser = async (req, res) => {
  if (req.body.userId === req.params.id || req.body.isAdmin) {
    if (req.body.password) {
      try {
        const salt = await bcrypt.genSalt(10);
        req.body.password = await bcrypt.hash(req.body.password, salt);
      } catch (error) {
        return res.status(500).send(error);
      }
    }
    try {
   
      const checkEmail = await User.findOne({ email: req.body.email });
      if (checkEmail) {
        res
          .status(406)
          .send({ status: 406, success: false, error: "email already used" });
      } else {
        const user = await User.findByIdAndUpdate(req.params.id, {
          $set: req.body,
        }, {upsert: true});
        res.status(200).send({
          status: 200,
          success: true,
          message: "account has been updated",
        });
      }
    } catch (error) {
      return res.status(500).send(error);
    }
  } else {
    return res.status(403).send({
      status: 403,
      success: false,
      message: "you can update only your id",
    });
  }
};
// ========Delete User===========
const deleteUser = async (req, res) => {
  if (req.body.userId === req.params.id || req.body.isAdmin) {
    try {
      // delete user posts
      await Post.deleteMany({ userId: req.body.userId });
      //delete user
      await User.findByIdAndDelete(req.params.id);
      res.status(200).send({
        status: 200,
        success: true,
        message: "account has been deleted successfully",
      });
    } catch (error) {
      return res.status(500).send(error);
    }
  } else {
    return res.status(403).send({
      status: 403,
      success: false,
      message: "you can delete only your accout",
    });
  }
};

// ========Update User status===========
const userStatusUpdate = async (req, res) => {
  if (req.body.isAdmin) {
    try {
      const user = await User.findByIdAndUpdate(req.params.id,{$set: { status: req.body.status }},{ upsert: true });
      res.status(200).send({
        status: 200,
        success: true,
        message: "status has been updated",
      });

    } catch (error) {
      return res.status(500).send(error);
    }
  } else {
    return res.status(403).send({
      status: 403,
      success: false,
      message: "you can update it",
    });
  }
};

module.exports = {
  updateUser,
  deleteUser,
  singleUserByParams,
  singleUserByMail,
  allleUser,
  userStatusUpdate,
};
