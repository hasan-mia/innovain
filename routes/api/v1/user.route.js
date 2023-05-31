const router = require("express").Router();
const verifyJWT = require("../../../middleware/verifyJWT");
const UserController = require("../../../controllers/UserController");
const limiter = require("../../../middleware/limiter");

/**
  * @api {get} get all user for admin
  * @apiDescription Get all user
  * @apiPermission admin
*/ 
router.route("/all").get(limiter, UserController.allleUser)

/**
  * @api {get} get a single user
  * @apiDescription Get a single user
  * @apiPermission admin
*/ 
router.route("/:id").get(limiter, UserController.singleUserByParams)

/**
 * @api {get} get a single user by params
 * @apiDescription Get a single user
 * @apiPermission admin
 */
router.route("/").get(limiter, UserController.singleUserByMail);


/**
  * @api {put} /get single a user by email
  * @apiDescription Get single the users
  * @apiPermission admin
*/ 
 router.route("/update/:id").put(limiter, verifyJWT, UserController.updateUser)

/**
   * @api {delete} delete a user
   * @apiDescription delete the users
   * @apiPermission admin
*/ 
 router.route("/delete/:id").delete(limiter, verifyJWT, UserController.deleteUser)

 /**
   * @api {delete} change status of a user
   * @apiDescription change status the users
   * @apiPermission admin
*/ 
 router.route("/status/:id").put(limiter, verifyJWT, UserController.userStatusUpdate)
 
module.exports = router