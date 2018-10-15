// DEPENDENCIES
const path= require("path");
const fs= require("fs");
const url= require("url");

const home = require('./controllers/home'); 
const login = require('./controllers/login'); 

// GET FILE
var getFile = (url, cType, response) => {
    fs.readFile(__dirname+url, (err,content)=>{
        if(err){
            response.writeHead(404);
            response.write(`file not found`);
            response.end();
        }else{
            response.writeHead(200, {'Content-type':cType});
            response.write(content);
            response.end();
        } 
    })
};

// TRANSFER ROUTES
var renderRoute = (req, res) => {

    switch(req.url){
        case '/login': 
            login.get(req, res)
        break;
        case '/home': 
            home.get(req, res)
        break;
        default:home.get(req, res)
        break;
    }
};

// GET FILE MIMETYPE
var getMimeType = (url) => {
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

// ROUTES
exports.get = (request,response) => {
    let reqUrl = url.parse(request.url, true);
    let path = reqUrl.pathname;
    let requestUrl = request.url;
    let requestContentType = getMimeType(requestUrl);

    switch(true){
        case (/.(css)$/.test(path.toLocaleLowerCase())) : 
        case (/.(js)$/.test(path.toLocaleLowerCase())) : 
        case (/.(jpg)$/.test(path.toLocaleLowerCase())) : 
        case (/.(png)$/.test(path.toLocaleLowerCase())) : 
        case (/.(gif)$/.test(path.toLocaleLowerCase())) : 
            getFile(requestUrl, requestContentType, response);
        break;
        case (/.(html)$/.test(path.toLocaleLowerCase())) : 
                renderRoute(request, response);
        break;
        default: renderRoute(request, response);
        break;
    }
} 