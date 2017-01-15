//Notice how the Swords variable is using a capital S? We're going 
//to do this to help us differentiate the swords collection instance 
//(Swords) and other uses of the word "swords" in our application.

var express = require('express');
var router = express.Router();
var db = require('monk')('localhost/swords') //monk
var Swords = db.get('swords') //monk

//Getting All Swords
//A simple route that just returns all of the swords from the database
// router.get('/', function(req, res) {
// 	Swords.find({}, function(err, swords) {
// 		if (err) {
// 			res.send(err);
// 		}
// 		res.status(200).json(swords); //ok
// 	})
// });


router.get('/', function(req, res) {
  res.status(200).json({ message: 'rawr! you did it!' });
});

//Creating a Sword POST /api/swords
router.post('/', function(req, res) {
	//inserts swords into monk db
  Swords.insert(req.body, function(err, sword) {
    if (err) {
      res.send(err);
    }
    res.status(201).json(sword);
  });
})



module.exports = router
