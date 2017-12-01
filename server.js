var http = require("http");
var url = require("url");

function start(route, handle) {
  function onRequest(request, response) {
    var pathname = url.parse(request.url).pathname;
    console.log("来至: " + pathname + " 的请求已收到.");
    
    response.writeHead(200, {"Content-Type": "text/plain"});
    response.write(route(handle, pathname));
    response.end();
  }

  http.createServer(onRequest).listen(8888);
  console.log("服务器启动...");
}

exports.start = start;