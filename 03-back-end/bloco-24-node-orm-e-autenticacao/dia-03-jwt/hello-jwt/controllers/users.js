const express = require('express')

const router = express.Router();

router.post('/me', async (req, res) => {
  const decoded = req.headers.decodedToken
  return res.status(200).json({
      username: decoded.username,
      admin: decoded.admin
    }
  )

})

router.get('/top-secret', async (req, res) => {
  const {decodedToken} = req.headers;

  if (!decodedToken.admin) return res.status(403).json({
    error: {
      message: "Restricted access"
    }
  })
  return res.status(200).json( {
    secretInfo: "Peter Parker é o Homem-Arannha"
  })
})

module.exports = router;