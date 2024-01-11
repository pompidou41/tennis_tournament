const router = require('express').Router();
const { User } = require('../../db/models');

router.get('/:tournament_id', async (req, res) => {
  const { tournament_id } = req.params;
  try {
    const users = await User.findAll({ where: { tournament_id } });
    return res.status(200).json({ message: 'success', users });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: error.message });
  }
});

module.exports = router;
