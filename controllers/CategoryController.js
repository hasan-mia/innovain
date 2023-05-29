/* eslint-disable no-undef */
const Category = require("../models/Category");
const User = require("../models/User");

// ========Create a new category============
const categoryPublish = async (req, res) => {

  // Create image post object for mongodb
  const categoryPost = new Category(req.body);
  try {
    const saveCategory = await categoryPost.save();
    res
      .status(200)
      .send({
        status: 200,
        success: true,
        message: "Category publish successfully",
        data: saveCategory,
      });
  } catch (error) {
    return res.status(500).send(error);
  }
};

// ========update category ============
const categoryUpdate = async (req, res) => {

  try {
    const category = await Category.findById(req.params.id);
    if (req.body.isAdmin) {
      await category.updateOne({ $set: req.body }, { upsert: true });
      res
        .status(200)
        .send({
          status: 200,
          success: true,
          message: "Category update successfully",
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

// ========Delete category===========
const deleteCategory = async (req, res) => {
  if (req.body.isAdmin) {
    try {
      //delete user
      await Category.findByIdAndDelete(req.params.id);
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

// ========get all cagtegroy ============
const getAllCategory = async (req, res)=>{
  try {
    const category = await Category.find({});
    if (!category) {
      res.status(404).send({status: 404, success: false, message: 'Category not found'})
    }else{
      res.status(200).send({status: 200, success: true, message: 'Category found', data: category})
    }
  } catch (error) {
    res.status(500).send(error)
  }

}

module.exports = { categoryPublish, categoryUpdate, deleteCategory, getAllCategory};
