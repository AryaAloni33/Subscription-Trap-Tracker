// routes/subscriptionRoutes.js

const express = require("express");
const router = express.Router();

const {
  uploadTransactions,
  getSubscriptions,
  getLeaks,
  getPredictions,
} = require("../controllers/subscriptionController");

router.post("/upload", uploadTransactions);
router.get("/subscriptions", getSubscriptions);
router.get("/leaks", getLeaks);
router.get("/predictions", getPredictions);

module.exports = router;
