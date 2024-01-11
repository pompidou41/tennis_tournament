const router = require('express').Router();

const tournamentsAPIRouter = require('./api/tournaments.api.route');
const usersAPIRouter = require('./api/users.api.route');
const teamsAPIRouter = require('./api/teams.api.route');
const authAPIRouter = require('./api/auth.api.route');

router.use('/api/tournaments', tournamentsAPIRouter);
router.use('/api/users', usersAPIRouter);
router.use('/api/teams', teamsAPIRouter);
router.use('/api/auth', authAPIRouter);

module.exports = router;
