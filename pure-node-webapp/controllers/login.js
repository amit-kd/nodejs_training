// DEPENDENCIES
const template = require("../views/template.js");

exports.get = function(request, response){
    response.writeHead(200, {'Content-type': 'text/html'});

    let HTML_TITLE = "Node Fest : login";
    let CONTENT = "";

    CONTENT+=`<div class='loginModuleLayer1'>`
    CONTENT+=`<div class='loginModuleLayer2'>`
    CONTENT+=`<div class='loginModuleLayer3'>`
    CONTENT+=`<form action=''>`
    CONTENT+=`<div class='loginFields'>`
    CONTENT+=`<label> First name </label>`
    CONTENT+=`<input type='text' name='userFirstname' value=''>`
    CONTENT+=`</div>`
    CONTENT+=`<div class='loginFields'>`
    CONTENT+=`<label> Last name </label>`
    CONTENT+=`<input type='password' name='userPassword' value=''>`
    CONTENT+=`</div>`
    CONTENT+=`<div class='loginFields'>`
    CONTENT+=`<input type='submit' value='Submit'>`
    CONTENT+=`</div>`
    CONTENT+=`</form>`
    CONTENT+=`</div>`
    CONTENT+=`</div>`
    CONTENT+=`</div>`
    

    response.write(template.build(HTML_TITLE, CONTENT));
    response.end();
}