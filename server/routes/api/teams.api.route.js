const router = require('express').Router();
const { Team, User } = require('../../db/models');

router.post('/add', async (req, res) => {
  const { users, tournament_id } = req.body;
  try {
    // создание команд в БД
    for (let i = 0; i < 8; i++) {
      let newTeam = await Team.create({
        user1_id: users[i][0],
        user2_id: users[i][1],
        tournament_id,
      });
    }
    // выгрузка всех команд текущего турнира с БД
    const teams = await Team.findAll({ where: { tournament_id } });
    if (teams) {
      return res.status(200).json({ message: 'success', teams });
    }
    return res.status(500).json({ message: 'Не удалось создать турнир' });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: error.message });
  }
});

module.exports = router;
