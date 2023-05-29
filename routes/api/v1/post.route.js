const verifyJWT = require("../../../middleware/verifyJWT");
const PostController = require("../../../controllers/PostController");
const imagesUpload = require("../../../middleware/imagesUpload");
const limiter = require("../../../middleware/limiter");
const router = require("express").Router();

/**
 * @api {post} /published a status
 * @apiDescription save status of user
 * @apiPermission anyone
 */
router
  .route("/post")
  .post(limiter, verifyJWT, PostController.postPublish);

/**
 * @api {put} /update status
 * @apiDescription update status of user
 * @apiPermission anyone
 */
router
  .route("/post/update/:id")
  .put(limiter, verifyJWT, PostController.postUpdate);

  /**
 * @api {get} /get single post for admin
 * @apiDescription single post of user
 * @apiPermission anyone
 */
router.route("/posts").get(limiter, verifyJWT, PostController.getPost);


/**
 * @api {get} /get all post for admin
 * @apiDescription all post of user
 * @apiPermission anyone
 */
router.route("/posts").get(limiter, verifyJWT, PostController.getAllPost);

module.exports = router;
