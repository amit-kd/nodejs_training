
//  NATIVE MODULES FROM NODE JS
const http =  require("http");
const path= require("path");
const fs= require("fs");

// USER DEFINED CONSTANTS
const HOSTNAME = 'localhost';
const PORT = 5001;

// READS FILE WITH RESPECTIVE MIME TYPE AND RENDERS THE CONTENT WITH HEADER, CONTENTS & ENDS THE RESPONSE 
const getFile = function(url, cType, res){
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
// DETERMINES THE MIME TYPE BY THE URL HIT BY USER
const getMimeType = function (url) {
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
        default: return 'application/octet-stream'
    }
}
// CREATES A SERVER WITH HTTP MODULE
const server = http.createServer(function(request, response) {
    let requestUrl = request.url;
    let requestContentType = getMimeType(request.url);
    
    if(request.url === "/"){
        getFile(requestUrl, 'text/plain', response);
    }else{
        getFile(requestUrl, requestContentType, response);
    }
});

// LISTENS TO THE SERVER USER DEFINED PORT AND HOSTNAME
server.listen(PORT, HOSTNAME, function() {
    console.log(`Server running at http://${HOSTNAME}:${PORT}/`);
});
// ERROR HANDLING IS ANY ERROR WHILE STARTING SERVER
server.on("error",function(err) {
    console.log(`Errot occured  due to ${err.message}`);
});