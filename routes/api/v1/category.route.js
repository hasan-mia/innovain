const verifyJWT = require("../../../middleware/verifyJWT");
const CategoryController = require("../../../controllers/CategoryController");
const imagesUpload = require("../../../middleware/imagesUpload");
const limiter = require("../../../middleware/limiter");
const router = require("express").Router()

/**
  * @api {post} /published a product post
  * @apiDescription save product of user
  * @apiPermission anyone
 */
router.route("/").post(limiter, verifyJWT, imagesUpload, CategoryController.categoryPublish)

/**
  * @api {put} /update product post
  * @apiDescription update product of user
  * @apiPermission anyone
 */  
router.route("/update/:id").put(limiter, verifyJWT, imagesUpload, CategoryController.categoryUpdate)
/**
 * @api {put} /delete category by id
 * @apiDescription delete category of user
 * @apiPermission anyone
 */
router.route("/delete/:id").delete(limiter, verifyJWT, CategoryController.deleteCategory);

/**
 * @api {put} /get all category
 * @apiDescription get category of user
 * @apiPermission anyone
 */
router.route("/").get(limiter, verifyJWT, CategoryController.getAllCategory);

/**
 * @api {get} /get single category
 * @apiDescription single category 
 * @apiPermission anyone
 */
router.route("/:id").get(limiter, verifyJWT, CategoryController.getCategory);



module.exports = router;