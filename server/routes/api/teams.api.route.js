const router = require('express').Router();
const { Team, User } = require('../../db/models');



router.post('/add', async (req, res) => {
  const { user_1, user_2, tournament_id } = req.body;
  try {
    const tournament = await Tournament.create({ name, description, status });
    if (tournament) {
      return res.status(200).json({ message: 'success', tournament });
    }
    return res.status(400).json({ message: 'Не удалось создать турнир' });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: error.message });
  }
});

module.exports = router;
