/* eslint-disable no-undef */
const Post = require("../models/Post");
const User = require("../models/User");
const path = require("path");
const fs = require("fs");
const ffmpegPath = require("@ffmpeg-installer/ffmpeg").path;
const ffmpeg = require("fluent-ffmpeg");
ffmpeg.setFfmpegPath(ffmpegPath);
// Doamin
const domain = process.env.HOST_URL;

// ========Create a new status============
const statusPublish = async (req, res) => {
  const newStatus = new Post(req.body);
  try {
    const saveStatus = await newStatus.save();
    res.status(200).send({
      status: 200,
      success: true,
      message: "status publish successfully",
      data: saveStatus,
    });
  } catch (error) {
    return res.status(500).send(error);
  }
};

// ========update status============
const statusUpdate = async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    if (post.userId === req.body.userId || req.body.isAdmin) {
      await post.updateOne({ $set: req.body });
      res.status(200).send({
        status: 200,
        success: true,
        message: "status update successfully",
      });
    } else {
      res
        .status(403)
        .send({ status: 403, success: false, message: "you can't update" });
    }
  } catch (error) {
    return res.status(500).send(error);
  }
};

// ======== get all posts for admin ============
const getAllPost = async (req, res) => {
  try {
    const user = await User.findById(req.body.userId);
    if (user.isAdmin) {
      const posts = await Post.find({});
      res
        .status(200)
        .send({ status: 200, success: true, message: "All post", data: posts });
    } else {
      res
        .status(403)
        .send({ status: 403, success: false, message: "forbiden access" });
    }
  } catch (error) {
    return res.status(500).send(error);
  }
};

module.exports = {
  statusPublish,
  statusUpdate,
  getAllPost,
};
