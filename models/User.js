const mongoose = require("mongoose");
// user type 0 means normal user, 1 means  means super admin
// user  status 0 means acess, 1 means  means no access

const UserSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      require: true,
      max: 50,
      unique: true,
    },
    password: {
      type: String,
      require: true,
      min: 6,
    },
    isAdmin: {
      type: Boolean,
      default: false,
    },
    type: {
      type: Number,
      default: 0,
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

const User = mongoose.model("User", UserSchema);
module.exports = User;
