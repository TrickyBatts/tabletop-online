var path = require('path');
global.base_dir = path.resolve(__dirname); // set a global var for absolute file paths using the path library

var server = require(path.join(global.base_dir + '/server/server.js'));
server.start();