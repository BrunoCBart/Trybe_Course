const { createToken } = require('../utils/jwt');

const adminLogin = 'admin';
const adminPassword = 's3nh4S3gur4???'
module.exports = async (req, res, next) => {
  const {username, password} = req.body
  if (!username || !password) {
    return res.status(400).json({message: 'Invalid username or password'})
  }

  if (username.length < 5 || password.length < 5) return res.status(400).json({message: 'username and password has to have at least 5 characters'})
  
  if (username === adminLogin && password === adminPassword) {
    const token = createToken({username, admin: true}, process.env.SECRET);
    req.headers.token = token;
    return res.status(200).json({token})
  }
  const token = createToken({username, admin: false}, process.env.SECRET)
  req.headers.token = token;

  return next()
}