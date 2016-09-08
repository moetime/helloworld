/** Created by Morrice Pfeiffer 2016-09-08 **/
var http = require('http');


/** launch async code non-blocking **/

http.createServer(function (request, response) {
    response.writehead(200); // status OK
    response.end('First node page');

}).listen(3000);

console.log('Server running on port 3000');