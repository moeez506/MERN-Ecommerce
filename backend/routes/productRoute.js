const express = require("express");
const {
  getAllProducts,
  createProduct,
  updateProduct,
  deleteProduct,
  getProductDetails,
  createProductReview,
  getProductReviews,
  deleteReview,
  getAdminProducts,
} = require("../controller/productController");
const { isAuthebticatedUser, authorizeRoles } = require("../middleware/auth");

const router = express.Router();

router.route("/products").get(getAllProducts);

router.route("/admin/products").get(isAuthebticatedUser, authorizeRoles("admin"), getAdminProducts)

router
  .route("/admin/product/new")
  .post(isAuthebticatedUser, authorizeRoles("admin"), createProduct);
router
  .route("/admin/product/:id")
  .put(isAuthebticatedUser, authorizeRoles("admin"), updateProduct)
  .delete(isAuthebticatedUser, authorizeRoles("admin"), deleteProduct);

router.route("/products/:id").get(getProductDetails);

router.route("/review").put(isAuthebticatedUser, createProductReview);

router
  .route("/reviews")
  .get(getProductReviews)
  .delete(isAuthebticatedUser, deleteReview);

module.exports = router;
