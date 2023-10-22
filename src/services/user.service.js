const { generateToken } = require('../authentication/auth');
const { User } = require('../models');
const { validateName, validateEmail, validatePassword } = require('../utils/validationUtils');

const login = async (email, password) => {
  if (!email || !password) {
    return {
      status: 400,
      body: { message: 'Some required fields are missing' },
    };
  }
  const user = await User.findOne({ where: { email } });

  if (!user) {
    return { status: 400, body: { message: 'Invalid fields' } };
  }

  if (user.password === password) {
    return { status: 200, body: { token: generateToken(user) } };
  }

  return { status: 400, body: { message: 'Invalid fields' } };
};

const createUser = async (user) => {
  let validation = validateName(user.displayName);
  if (validation) return validation; 

  validation = validateEmail(user.email);
  if (validation) return validation;

  validation = validatePassword(user.password);
  if (validation) return validation;

  const userFromDb = await User.findOne({ where: { email: user.email } });
  if (userFromDb) {
    return { status: 409, body: { message: 'User already registered' } };
  }

  const newUser = await User.create(user);
  return { status: 201, body: { token: generateToken(newUser) } };
};
const getAll = async () => {
 const users = await User.findAll({ attributes: { exclude: ['password'] } });
  return { status: 200, body: users };
};
const getById = async (id) => {
  const user = await User.findByPk(id, { attributes: { exclude: ['password'] } });
  if (!user) return { status: 404, body: { message: 'User does not exist' } };
   return { status: 200, body: user };
 };

module.exports = {
  login,
  createUser,
  getAll,
  getById,
};
