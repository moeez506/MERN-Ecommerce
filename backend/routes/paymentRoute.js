const express = require("express");
const {
  processPayment,
  sendStripeApiKey,
} = require("../controller/paymentController");
const router = express.Router();
const { isAuthebticatedUser} = require("../middleware/auth");

router.route("/payment/process").post(isAuthebticatedUser, processPayment);

router.route("/stripeapikey").get(isAuthebticatedUser, sendStripeApiKey);

module.exports = router;