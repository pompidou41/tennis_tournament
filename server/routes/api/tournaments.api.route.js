const router = require('express').Router();
const { Tournament } = require('../../db/models');

router.get('/', async (req, res) => {
  try {
    const tournaments = await Tournament.findAll();
    return res.status(200).json({ message: 'success', tournaments });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: error.message });
  }
});

router.get('/:t_id/tour', async (req, res) => {
  const { tournament_id } = req.params;
  try {
    const tournament = await Tournament.findOne({ where: { tournament_id } });
    return res.status(200).json({ message: 'success', tournament });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: error.message });
  }
});

router.post('/add', async (req, res) => {
  const { name, description, status } = req.body;
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
