var path = require('path'),
    test_root = path.resolve('./test');
global.base_dir = path.resolve(__dirname + '/..');

describe('App', function() {

    before(function() {
        //TODO Set Up
    });

    // require test suites to execute them
    require( path.join(test_root + '/test-suites/test-server.js') );


});