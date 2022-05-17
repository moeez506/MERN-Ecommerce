const { Router } = require("express");
const express = require("express");
const {
  newOrder,
  getSingleOrder,
  myOrders,
  getAllOrders,
  updateOrder,
  deleteOrder,
} = require("../controller/orderController");
const { isAuthebticatedUser, authorizeRoles } = require("../middleware/auth");
const router = express.Router();

router.route("/order/new").post(isAuthebticatedUser, newOrder);

router
  .route("/order/:id")
  .get(isAuthebticatedUser, getSingleOrder);

router.route("/orders/me").get(isAuthebticatedUser, myOrders);

router
  .route("/admin/orders")
  .get(isAuthebticatedUser, authorizeRoles("admin"), getAllOrders);

router
  .route("/admin/order/:id")
  .put(isAuthebticatedUser, authorizeRoles("admin"), updateOrder)
  .delete(isAuthebticatedUser, authorizeRoles("admin"), deleteOrder);

module.exports = router;
