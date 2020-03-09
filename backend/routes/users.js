var express = require('express');
var router = express.Router();
const Controller = require("../controllers/userController")

/* GET users listing. */
router.get('/', listUsers)

function listUsers (req, res, next) {
  Controller.listUsers()
  .then(users => {
    res.status(200).send(users)
  })
  .catch(err => {
    next(err)
  })
}

module.exports = router;
