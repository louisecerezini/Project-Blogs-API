const jwt = require('jsonwebtoken');

const secretKey = process.env.JWT_SECRET;

function verifyToken(req, res, next) {
  const token = req.header('Authorization');

  if (!token) {
    return res.status(401).json({ message: 'Token not found' });
  }
  jwt.verify(token.split(' ')[1], secretKey, (err, decoded) => {
    if (err) {
      return res.status(401).json({ message: 'Expired or invalid token' });
    }
    
    req.user = decoded;
    next(); 
  });
}

module.exports = verifyToken;
