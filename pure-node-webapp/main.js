
//  NATIVE MODULES FROM NODE JS
const http =  require("http");
const router = require('./router.js');

// USER DEFINED CONSTANTS
const HOSTNAME = 'localhost';
const PORT = 5002;

// CREATES A SERVER WITH HTTP MODULE
var server = http.createServer(function(request, response) {
    router.get(request, response)
});

// LISTENS TO THE SERVER USER DEFINED PORT AND HOSTNAME
server.listen(PORT, HOSTNAME, function() {
    console.log(`Server running at http://${HOSTNAME}:${PORT}/`);
});
// ERROR HANDLING IS ANY ERROR WHILE STARTING SERVER
server.on("error",function(err) {
    console.log(`Errot occured  due to ${err.message}`);
});