const express = require("express");
const router = express.Router();

router.get('/home', (req, res, next) => {
  return res.status(200).json({
    response: {
      message: `home page rendered!`
    }
  });
});


module.exports = router;