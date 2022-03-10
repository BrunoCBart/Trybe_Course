const { verifyToken } = require('../utils/jwt');
require('dotenv').config()
module.exports = async (req, res, next) => {
  const {authorization} = req.headers;

  if (!authorization) return res.status(401).json({error: {
    message: "Token not found"
  }})

  try {
    const decoded = verifyToken(authorization, process.env.SECRET)
    req.headers.decodedToken = decoded
    return next()
  } catch (error) {
    return res.status(401).json({  
      error: {
        message: error.message
      }
    })
  }
}
