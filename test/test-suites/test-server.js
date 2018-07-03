var assert = require('chai').assert,
    request = require('request'),
    path = require('path'),
    server = require( path.join(global.base_dir + '/server/server.js') ),
    config = require( path.join(global.base_dir + '/config.json') ),
    baseUrl = 'http://localhost:' + config.server.port;

describe('Server', function(){
    before(function(){
        return new Promise( function(resolve) {
            server.start( function() {
                resolve();
            });
        });
    });

    it('should pass health check', function() {
        request.get({
            url: baseUrl + '/x-tree'
        }, function(error, response, body){
            assert.notExists(error, 'error is either null or undefined');
            assert.strictEqual(response.statusCode, 200, 'status code is 200 OK');
            assert.strictEqual(body, 'THE SERVER IS UP', 'body matches the expected value');

            done();
        });
    });
});