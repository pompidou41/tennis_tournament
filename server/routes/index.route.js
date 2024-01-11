const router = require('express').Router();

const todosAPIRouter = require('./api/todos.api.route');

router.use('/api/todos', todosAPIRouter);

module.exports = router;
