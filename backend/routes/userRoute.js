const express = require("express");
const {
  registerUser,
  loginUser,
  logout,
  forgotPassword,
  resetPassword,
  getUserDetails,
  updatePassowrd,
  updateProfile,
  getAllUser,
  getSingleUser,
  updateUserRole,
  deleteUser,
} = require("../controller/userController");
const { isAuthebticatedUser, authorizeRoles } = require("../middleware/auth");

const router = express.Router();

router.route("/register").post(registerUser);

router.route("/login").post(loginUser);

router.route("/password/forgot").post(forgotPassword);

router.route("/password/reset/:token").put(resetPassword);

router.route("/logout").get(logout);

router.route("/me").get(isAuthebticatedUser, getUserDetails);

router.route("/password/update").put(isAuthebticatedUser, updatePassowrd);

router.route("/me/update").put(isAuthebticatedUser, updateProfile);

router
  .route("/admin/users")
  .get(isAuthebticatedUser, authorizeRoles("admin"), getAllUser);

router
  .route("/admin/user/:id")
  .get(isAuthebticatedUser, authorizeRoles("admin"), getSingleUser)
  .put(isAuthebticatedUser, authorizeRoles("admin"), updateUserRole)
  .delete(isAuthebticatedUser, authorizeRoles("admin"), deleteUser);

module.exports = router;
