const router = require('express').Router();
const ALLOWED_METHODS = ['GET', 'PUT', 'POST', 'DELETE'];

const getServerStatus = (req, res) => {
  res.send({ success: true, message: 'DeepSense server is up and running.' });
};

const catchAllUnhandled = (req, res) => {
  res.status(404).send({
    message: `Can't find method ${req.method} on ${req.originalUrl}`,
    error: 'Not Found',
  });
};

router.use((req, res, next) => {
  if (!ALLOWED_METHODS.includes(req.method)) {
    return res.status(405).end();
  }
  next();
});

// ROUTES

// SERVER
router.route('/').get(getServerStatus);
router.route('*').all(catchAllUnhandled);

module.exports = router;
