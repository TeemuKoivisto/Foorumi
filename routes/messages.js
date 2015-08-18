var express = require('express');
var router = express.Router();

var authentication = require('../utils/authentication');
var Models = require('../models');

// Huom! Kaikki polut alkavat polulla /messages

router.get('/', function (req, res, next) {
    Models.Message.findAll().then(function (messages) {
        res.send(messages);
    });
})

router.get('/reply', function (req, res, next) {
    Models.Reply.findAll().then(function (replies) {
        res.send(replies);
    });
})

// GET /messages/:id
router.get('/:id', function (req, res, next) {
    // Hae viesti tällä id:llä ja siihen liittyvät vastaukset tässä (Vinkki: findOne ja sopiva include)
    var messageId = req.params.id;
    Models.Message.findOne({
        where: {
            id: messageId
        },
        include: {
            model: Models.Reply,
            include: {
                model: Models.User
            }
        }
    }).then(function (message) {
        res.send(message);
    })
});

// POST /messages/:id/reply
router.post('/:id/reply', authentication, function (req, res, next) {
    console.log("hei vain täältä " + JSON.stringify(req.body));
    // ...tämä vastaus (Vinkki: lisää ensin replyToAdd-objektiin kenttä MessageId, jonka arvo on messageId-muuttujan arvo ja käytä sen jälkeen create-funktiota)
    var replyToAdd = req.body;
//    replyToAdd.id = messageId;

    console.log("mikä on viesti " + JSON.stringify(replyToAdd));

    Models.Reply.create(replyToAdd).then(function(reply) {
        res.send(reply);
    })
});

module.exports = router;
