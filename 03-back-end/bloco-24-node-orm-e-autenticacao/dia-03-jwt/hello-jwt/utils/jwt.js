const jwt = require('jsonwebtoken')

const jwtConfig = {
  expiresIn: '1h',
  algorithm: 'HS256'
}

const createToken = (user, secret) => {
  const token = jwt.sign(user, secret, jwtConfig)
  return token
}


const verifyToken = (authorization, secret) => {
  const decodedToken = jwt.verify(authorization, secret)
  return decodedToken
}
module.exports = {createToken, verifyToken}