// controllers/subscriptionController.js

let transactions = [];

// POST /api/upload
exports.uploadTransactions = (req, res) => {
  const data = req.body.transactions || [];

  transactions = data;

  res.json({
    message: "Transactions uploaded successfully",
    count: transactions.length,
  });
};

// GET /api/subscriptions
exports.getSubscriptions = (req, res) => {
  res.json({
    message: "Subscriptions fetched",
    data: transactions,
  });
};

// GET /api/leaks
exports.getLeaks = (req, res) => {
  res.json({
    message: "Leak detection placeholder",
    data: [],
  });
};

// GET /api/predictions
exports.getPredictions = (req, res) => {
  res.json({
    message: "Predictions placeholder",
    data: [],
  });
};
