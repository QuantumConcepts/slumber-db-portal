const Http = require("http")
const Util = require("util");
const Url = require("url");
const FS = require("fs");

const server = Http.createServer(handleRequest);

function handleRequest(request, response) {
    var url = Url.parse(request.url);
    var path = Util
                .format("./wwwroot/%s", url.pathname)
                .replace(/\/{2,}/, "/");
    
    FS.readFile(path, (err, data) => {
        if (err) {
            response.statusCode = 500;
            return response.end(err.toString());
        }
        
        response.end(data);
    });
}

server.listen(8081, () => {
    console.log("Server listening on port 8081.");
});