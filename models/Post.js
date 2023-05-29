const mongoose = require("mongoose");
const slug = require("mongoose-slug-generator");
// status is refered 0 means inactive post, 1 means active post
mongoose.plugin(slug);

const PostSchema = new mongoose.Schema(
  {
    userId: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      max: 250,
      default: "",
    },
    slug: {
      type: String,
      slug: "title",
      unique: true,
    },
    catId: {
      type: String,
      max: 5000,
    },
    status: {
      type: Number,
      default: 0,
    },
  },
  {
    timestamps: true,
  }
);

const Post = mongoose.model("Post", PostSchema);

module.exports = Post;
