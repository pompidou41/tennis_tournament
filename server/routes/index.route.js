const router = require('express').Router();

const tournamentsAPIRouter = require('./api/tournaments.api.route');
const usersAPIRouter = require('./api/users.api.route');

router.use('/api/tournaments', tournamentsAPIRouter);
router.use('/api/users', usersAPIRouter);

module.exports = router;
