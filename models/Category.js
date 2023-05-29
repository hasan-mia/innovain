const mongoose = require("mongoose");
const slug = require("mongoose-slug-generator");
// type is refered 0 means inactive post, 1 means active post,
mongoose.plugin(slug);

const categorySchema = new mongoose.Schema(
  {
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
  },
  {
    timestamps: true,
  }
);

const Category = mongoose.model("Category", categorySchema);

module.exports = Category;
;
