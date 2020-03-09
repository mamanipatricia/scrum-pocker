var express = require('express');
var router = express.Router();
const Controller = require("../controllers/roomController")

/* GET home page. */
router.post('/join', join);
router.post('/:id/vote', vote);
router.get('/:id/results', results);
router.get('/:id/current-vote/:name', currentVote);

function join (req, res, next) {
    console.log(req)
    Controller.join(req.body)
    .then(room => {
        res.send(room)
    })
    .catch(err=>{
        res.status(404).send("NO HAY ROOM")
    })
}
function vote (req, res, next) {
    Controller.vote(req.params, req.body)
    .then(vote => {
        res.send(vote)
    })
    .catch(next)
}
function results (req, res, next) {
    Controller.results(req.params)
    .then(results => {
        res.send(results)
    })
    .catch(next)
}

function currentVote (req, res, next) {
    Controller.currentVote(req.params)
    .then(results => {
        res.send(results)
    })
    .catch(next)
}

module.exports = router;
