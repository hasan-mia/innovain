/* eslint-disable no-undef */
const Post = require("../models/Post");
const User = require("../models/User");
const path = require("path");
const fs = require("fs");

// Doamin
const domain = process.env.HOST_URL;

// ========Create a new post============
const postPublish = async (req, res) => {
  const newPost = new Post(req.body);
  try {
    const savePost = await newPost.save();
    res.status(200).send({
      status: 200,
      success: true,
      message: "post publish successfully",
      data: savePost,
    });
  } catch (error) {
    return res.status(500).send(error);
  }
};

// ========update post============
const postUpdate = async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    if (req.body.isAdmin) {
      await post.updateOne({ $set: req.body }, { upsert: true });
      res.status(200).send({
        status: 200,
        success: true,
        message: "post update successfully",
        data: post
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

const postDelete = async (req, res) => {
  try {
     if (req.body.isAdmin) {
    const post = await Post.findOneAndDelete(req.params.id);
    
    if (!post) {
      res.status(404).send({ status: 404, success: false, message: "post not found" })
    }else{
      res
        .status(200)
        .send({
          status: 200,
          success: true,
          message: "delete post successfully",
        });
    }
  }else{
    res.status(403).send({ status: 403, success: false, message: "you can't update" });
  }
  } catch (error) {
    res.status(500).send(error)
  }
}

// ======== get single posts ============

const getPost = async (req, res) => {
  try {
  const post = await Post.findOne({ _id: req.params.id });
  if (!post) {
    res
      .status(404)
      .send({ status: 404, success: false, message: "post not found" });
    } else {
      res
        .status(200)
        .send({
          status: 200,
          success: true,
          message: "post found",
          data: post,
        });
    }
  } catch (error) {
    res.status(500).send(error);
  }

}
// ======== get all posts for admin ============
const getAllPost = async (req, res) => {
  try {
     const posts = await Post.find({});
    if (posts) {
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
  postPublish,
  postUpdate,
  postDelete,
  getPost,
  getAllPost,
};
