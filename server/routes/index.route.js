const router = require('express').Router();

const APIRouter = require('./api/api.route');

router.use('/api/', APIRouter);

module.exports = router;
