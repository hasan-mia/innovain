const verifyJWT = require("../../../middleware/verifyJWT");
const PostController = require("../../../controllers/PostController");
const limiter = require("../../../middleware/limiter");
const router = require("express").Router();

/**
 * @api {post} /published a status
 * @apiDescription save status of user
 * @apiPermission anyone
 */
router.route("/").post(limiter, verifyJWT, PostController.postPublish);

/**
 * @api {put} /update status
 * @apiDescription update status of user
 * @apiPermission anyone
 */
router.route("/update/:id").put(limiter, verifyJWT, PostController.postUpdate);

  /**
 * @api {put} /update status
 * @apiDescription update status of user
 * @apiPermission anyone
 */
router.route("/delete/:id").delete(limiter, verifyJWT, PostController.postDelete);


  /**
 * @api {get} /get single post for admin
 * @apiDescription single post of user
 * @apiPermission anyone
 */
router.route("/:id").get(limiter, PostController.getPost);


/**
 * @api {get} /get all post for admin
 * @apiDescription all post of user
 * @apiPermission anyone
 */
router.route("/").get(limiter, PostController.getAllPost);

module.exports = router;
