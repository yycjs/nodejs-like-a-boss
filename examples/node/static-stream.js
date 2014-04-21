var http = require("http");
var url = require("url");
var path = require("path");
var fs = require("fs");
 
http.createServer(function(request, response) {
 
  var uri = url.parse(request.url).pathname;
  var filename = path.join(process.cwd(), 'assets', uri);

  console.log('Fetching File: ', filename);
  
  fs.exists(filename, function(exists) {
    if (!exists) {
      response.writeHead(404, {"Content-Type": "text/plain"});
      response.write("404 Not Found\n");
      return response.end();
    }
 
    if (fs.statSync(filename).isDirectory()) {
      filename += 'index.html';
    }

    var stream = fs.createReadStream(filename).pipe(response);
  });
}).listen(1337, '127.0.0.1');

console.log('Server running at http://127.0.0.1:1337/');