/****************************************************************************
* Author: Kabir Sharan *
This file is part of the application HelloNodeJs.

HelloNodeJs is free software: you can redistribute it and/or modify
it under the terms of the GNU General Public License as published by
the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.

Foobar is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU General Public License for more details.

You should have received a copy of the GNU General Public License
along with Foobar.  If not, see <http://www.gnu.org/licenses/>.
****************************************************************************/

var http = require('http');

var startServer = function() {
    var server = http.createServer(function(req, res) {
        console.log('Request received.');
        res.writeHead(200, {'Content-Type' : 'text/plain'});
        res.end('Hello World!');
    });
    server.listen(4444, '127.0.0.1');
    console.log('Server started at http://127.0.0.1:4444/');
};

startServer();
