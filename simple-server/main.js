const http =  require("http");
const path= require("path");
const fs= require("fs");

var HOSTNAME = 'localhost';
var PORT = 5001;

var getFile = function(url, cType, res){
    var file = path.join(__dirname,url);
    fs.readFile(file,(err,content)=>{
        if(err){
            res.writeHead(404);
            res.write(`file not found`);
            res.end();
        }else{
            res.writeHead(200, {'Content-type':cType});
            res.write(content);
            res.end();
        } 
    })
};

var getMimeType = function (url) {
    switch(path.extname(url)) {
        case '.html': 
            return 'text/html';
        case '.css': 
            return 'text/css';
        case '.js': 
            return 'text/javascript';
        case '.jpg': 
        case '.jpeg': 
            return 'image/jpeg';
        case '.png': 
            return 'image/png';
        case '.gif': 
            return 'image/gif';
        case '.json': 
            return 'application/json';
        default: return 'application/octate-stream'
    }
}

var server = http.createServer(function(request, response) {
    let requestUrl = request.url;
    let requestContentType = getMimeType(request.url);
    
    if(request.url === "/"){
        getFile(requestUrl, 'text/plain', response);
    }else{
        getFile(requestUrl, requestContentType, response);
    }
});

server.listen(PORT, HOSTNAME, (err) => {
    if(err){
        console.log("ERROR OCCURED");
    }else{
        console.log(`Server running at http://${HOSTNAME}:${PORT}/`);
    }
});