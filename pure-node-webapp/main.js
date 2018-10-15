// DEPENDENCIES
const http =  require("http");
const router = require('./router.js');

// CONFIG
var HOSTNAME = 'localhost';
var PORT = 5002;

// CREATE HTTP SERVER
var server = http.createServer(function(request, response) {
    router.get(request, response)
});

// LISTEN TO PORT
server.listen(PORT, HOSTNAME, (err) => {
    if(err){
        console.log("ERROR OCCURED");
    }else{
        console.log(`Server running at http://${HOSTNAME}:${PORT}/`);
    }
});