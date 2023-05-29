const router = require("express").Router();
const verifyJWT = require("../../../middleware/verifyJWT");
const UserController = require("../../../controllers/UserController");
const limiter = require("../../../middleware/limiter");

/**
  * @api {get} get all user for admin
  * @apiDescription Get all user
  * @apiPermission admin
*/ 
router.route("/all").get(limiter, verifyJWT, UserController.allleUser)

/**
  * @api {get} get a single user
  * @apiDescription Get a single user
  * @apiPermission admin
*/ 
router.route("/:id").get(limiter, verifyJWT, UserController.singleUser)

/**
  * @api {put} /update a user
  * @apiDescription Get all the users
  * @apiPermission admin
*/ 
 router.route("/update/:id").put(limiter, verifyJWT, UserController.updateUser)

/**
   * @api {delete} delete a user
   * @apiDescription Get all the users
   * @apiPermission admin
*/ 
 router.route("/delete/:id").delete(limiter, verifyJWT, UserController.deleteUser)
 
module.exports = router