var fs = require('fs');
var path = require('path');

/* GET home page. */
exports.index = function(req, res, next){
  var number = Math.floor(Math.random() * 5);
  var image = 'images/' + number + '.gif';

  res.render('index', { title: 'NodeJS, like a boss', image: image });
};