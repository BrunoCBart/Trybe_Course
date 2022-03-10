require('dotenv').config()
const express = require('express');

const router = express.Router();

router.post('/', async (req, res) => {
  const token = req.headers.token
  return res.status(200).json({token})

})



module.exports = router

