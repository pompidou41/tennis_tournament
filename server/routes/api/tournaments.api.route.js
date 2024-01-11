const router = require('express').Router();
const { Tournament } = require('../../db/models');

router.get('/', async (req, res) => {
  const tournaments = await Tournament.findAll();
  res.status(200).json({ message: 'success', tournaments });
});

module.exports = router;
