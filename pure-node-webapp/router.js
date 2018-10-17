// DEPENDENCIES
const path= require("path");
const fs= require("fs");
const url= require("url");

const home = require('./controllers/home'); 
const login = require('./controllers/login'); 

// READS FILE WITH RESPECTIVE MIME TYPE AND RENDERS THE CONTENTS & ENDS THE RESPONSE
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

// TRANSFER ROUTES
const renderRoute = (req, res) => {
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

// ROUTES
exports.get = (request,response) => {
    let parseUrlData = url.parse(request.url, true);
    let parseUrlDataPath = parseUrlData.pathname;
    let requestContentType = getMimeType(request.url);

    switch(true){
        case (/.(css)$/.test(parseUrlDataPath.toLocaleLowerCase())) : 
        case (/.(js)$/.test(parseUrlDataPath.toLocaleLowerCase())) : 
        case (/.(jpg)$/.test(parseUrlDataPath.toLocaleLowerCase())) : 
        case (/.(png)$/.test(parseUrlDataPath.toLocaleLowerCase())) : 
        case (/.(gif)$/.test(parseUrlDataPath.toLocaleLowerCase())) : 
            getFile(request.url, requestContentType, response);
        break;
        case (/.(html)$/.test(parseUrlDataPath.toLocaleLowerCase())) : 
                renderRoute(request, response);
        break;
        default: renderRoute(request, response);
        break;
    }
} 