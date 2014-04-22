var feathers = require('feathers');
var memory = require('feathers-memory');
var path = require('path');
 
feathers().configure(feathers.socketio())
  .use(feathers.static(path.join(__dirname, '..', 'public')))
  .use('/users', memory)
  .use('/images', memory)
  .listen(1337);