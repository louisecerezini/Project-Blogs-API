const { usersService } = require('../services/index');

const login = async (req, res) => {
  if (!req || !req.body) {
    return res.status(400).json({ message: 'Some required fields are missing' });
  }

  const { email, password } = req.body;
  const loginResponse = await usersService.login(email, password);
  return res.status(loginResponse.status).json(loginResponse.body);
};

const createUser = async (req, res) => {
  const user = req.body;
  const response = await usersService.createUser(user);
  return res.status(response.status).json(response.body);
};

const getAll = async (_, res) => {
  const users = await usersService.getAll();
  return res.status(users.status).json(users.body);
};

const getById = async (req, res) => {
  const { id } = req.params; 
  const user = await usersService.getById(id);
  return res.status(user.status).json(user.body);
};

module.exports = {
  login, 
  createUser,
  getAll, 
  getById, 
};