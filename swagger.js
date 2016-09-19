'use strict';

const request = require('request');

module.exports = function (context, req, res) {

    request.get('https://www.getpostman.com/api/collections/d2692b755f949f85f9f5', function(err,response,body) {
        request.post(
            {
                url: 
                "https://apitransformer.com/api/transform?output=swagger20json",
                body: body,
                content_type: "text/plain"
            },
            function(err,response,body){
                if (err)
                    res.end('Unable to fetch metadata...');
                res.writeHead(200, { 'Content-Type': 'application/json'});
                res.end(body);
            }
        )
    });
}        




