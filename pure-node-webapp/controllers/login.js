/**
 * CONTROLLER FOR LOGIN ROUTE 
 */

// DEPENDENCIES
const template = require("../views/template.js");

exports.get = function(request, response){

    response.writeHead(200, {'Content-type': 'text/html'});
    // TITLE OF THE PAGE
    let HTML_TITLE = "Node Fest : login";
    // CONTENT OF THE PAGE
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
    // BUILD THE TEMPLATE MARK UP FROM ../views/template.js MODULE AND RENDER WITH type/html CONTENT TYPE 
    response.write(template.build(HTML_TITLE, CONTENT));
    response.end();
}