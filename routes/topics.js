var express = require('express');
var router = express.Router();

var authentication = require('../utils/authentication');
var Models = require('../models');

// Huom! Kaikki polut alkavat polulla /topics

// GET /topics
router.get('/', function(req, res, next) {
    // Hae kaikki aihealueet tässä (Vinkki: findAll)
    Models.Topic.findAll().then(function(topics){
        res.send(topics);
    });
});

// GET /topics/:id
router.get('/:id', function(req, res, next) {
  // Hae aihealue tällä id:llä tässä (Vinkki: findOne)
  var topicId = req.params.id;
    Models.Topic.findOne({ 
        where: {
            id: topicId 
        }, 
        include: { 
            model: Models.Message,
            include: { 
                model: Models.User
            }
        }
    }).then(function(topic) {
//        topic.Messages.forEach(function(message) {
//            if (message.User) {
//                message.User.password = undefined;
//            }
//        });
        res.send(topic);
    });
});

// POST /topics
router.post('/', authentication, function(req, res, next) {
  // Lisää tämä aihealue
  var topicToAdd = req.body;
    topicToAdd.UserId = req.session.userId;
    if (topicToAdd.name !== "" && topicToAdd.description !== "") {
        Models.Topic.create(topicToAdd).then(function (topic) {
            console.log("succesfull post is successfull " + JSON.stringify(topic));
            res.send(topic);
        });
    }
    else {
        res.send(505);
    }
});

// POST /topics/:id/message
router.post('/:id/message', authentication, function(req, res, next) {
  // Lisää tällä id:llä varustettuun aihealueeseen...
//  console.log("req on " + JSON.stringify(req));
  var topicId = req.params.id;
    // ...tämä viesti (Vinkki: lisää ensin messageToAdd-objektiin kenttä TopicId, jonka arvo on topicId-muuttujan arvo ja käytä sen jälkeen create-funktiota)
    var messageToAdd = req.body;
    messageToAdd.UserId = req.session.userId;
//    messageToAdd.TopicId = topicId;
//    messageToAdd.UserId = req.session.userId;

//    var messageToAdd = {
//        TopicId: req.params.id,
//        title: req.body.title,
//        content: req.body.content
//    }
    console.log("msg on " + JSON.stringify(messageToAdd));
    // Palauta vastauksena lisätty viesti
    Models.Message.create(messageToAdd).then(function(message) {
        res.send(message);
    });
});

module.exports = router;
