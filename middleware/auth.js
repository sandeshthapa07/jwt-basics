const jwt = require('jsonwebtoken')

const {UnauthenticatedError } =require('../errors')

const authenticationMiddleware = async (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith("Bearer ")) {
     throw new UnauthenticatedError(" No Token provided")
  }

  try {
    const token = authHeader.split(" ")[1];
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    const { username } = decoded;
    req.user = { username };
    next();
  } catch (error) {
     throw new UnauthenticatedError("Wrong Credentials")
  }
};
module.exports = authenticationMiddleware;
