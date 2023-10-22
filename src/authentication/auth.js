  const jwt = require('jsonwebtoken');

  const secretKey = process.env.JWT_SECRET;

  function generateToken(user) {
    const payload = {
      id: user.id,
      email: user.email,
    };

    const token = jwt.sign(payload, secretKey, {
      expiresIn: '1h', 
    });

    return token;
  }

  module.exports = {
    generateToken,
  };
