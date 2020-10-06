const express = require('express');
const router = express.Router();


/* GET home page. */
router.get('/', function(req, res, next) {

   //TODO: change to index.html of Angular
  res.render('index', { title: 'Express' });
});

module.exports = router;


