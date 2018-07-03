var path = require('path'),
    config = require( path.join(global.base_dir + '/config.json') );

var express = require('express'),
    app = express();

app.get('/x-tree', function(req, res){
    res.send('THE SERVER IS UP');
});

function startServer(callback) {
    app.listen(config.server.port, function(){
        console.log('The Server is listening on port 4000');
        if (callback) callback(); // optional callback
    })
}

module.exports = {
    start: startServer
};