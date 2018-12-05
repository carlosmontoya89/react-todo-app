const express = require("express");
const User = require("../models/user_schema");

const router = express.Router();

router.get('/', (req, res, next) => {
  return res.status(200).json({
    response: {
      message: `user page rendered!`
    }
  });
});

//Getting all of the data from the database
router.get('/get', (req, res, next) => {
  User
    .find()
    .exec()
    .then(users => {
      if (users.length >= 1) {
        res.status(200).json(users);
      } else {
        res.status(404).json({
          message: `No users found!`
        });
      }
    })
    .catch(err => {
      res.status(500).json({
        error: err
      });
    });
});


//Posting data to the database
router.post('/', (req, res, next) => {
  let user = new User({
    name: req.body.name,
    email: req.body.email,
    country: req.body.country
  });
  return user
    .save()
    .then(user => {
      res.status(200).json(user);
    })
    .catch(err => {
      res.status(500).json({
        error: err
      });
    });
});

//Delete data from the database
router.delete('/:id', (req, res, next) => {
  let userId = req.params.id;
  User
    .remove({_id: userId})
    .exec()
    .then(user => {
      res.status(200).json({ success: false });
    })
    .catch(err => {
      res.status(500).json({
        error: err
      });
    });
});

module.exports = router;