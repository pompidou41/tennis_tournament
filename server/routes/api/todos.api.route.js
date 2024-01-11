const router = require('express').Router();

const { Todo } = require('../../db/models');

router.get('/', async (req, res) => {
  try {
    const todos = await Todo.findAll();
    res.status(200).json(todos);
  } catch (error) {
    console.error(error);
    res.status(500).json(error.message);
  }
});

router.post('/add', async (req, res) => {
  try {
    const { text } = req.body;
    const todo = await Todo.create({ text });
    res.status(200).json({ success: true, todo });
  } catch (error) {
    console.error(error);
    res.status(500).json(error.message);
  }
});

router.delete('/delete/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const deletedTodos = await Todo.destroy({ where: { id } });
    if (deletedTodos > 0) {
      res.status(200).json({ success: true });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json(error.message);
  }
});

router.put('/update/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const { isDone } = req.body;

    const updatedTodos = await Todo.update({ isDone }, { where: { id } });
    if (updatedTodos.length > 0) {
      res.status(200).json({ success: true });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json(error.message);
  }
});

module.exports = router;
