/**
 * CONTROLLER FOR HOME ROUTE 
 */

// DEPENDENCIES
const template = require("../views/template.js");
const { employee } = require("../model/home.js");

// SIMPLE SETUP FOR TYPES OF API CALLS MADE FROM NODE JS
const { getHttpCall, 
        getRequestCall, 
        getModeFetchCall,
        getR2Call,
        getAxiosCall } = require("../model/utils.js");

exports.get = function(request, response){

    response.writeHead(200, {'Content-type': 'text/html'});
    // TITLE OF THE PAGE
    let HTML_TITLE = "Node Fest : home";
    // CONTENT OF THE PAGE
    let CONTENT = "";
    CONTENT+=`<div class='divFullWidth'>`;
    CONTENT+=`<h1 class='pageTitle'> Home Page </h1>`;
    CONTENT+=`<p class='pageSubTitle'>  list of employees from model file </p>`;
    CONTENT+=`<ul>`;    
    // DYNAMIC DATA FROM MODEL FROM ../model/home.js
    employee.map((o,i)=>{
        CONTENT+=`<li>name: ${o.name}</li>`;
        CONTENT+=`<li>age: ${o.age}</li>`;
        CONTENT+=`<li>qualification: ${o.qualification}</li>`;
        CONTENT+=`<li>residence: ${o.residence}</li>`;
    });

    CONTENT+=`</ul>`;
    CONTENT+=`</div>`;
    // BUILD THE TEMPLATE MARK UP FROM ../views/template.js MODULE AND RENDER WITH type/html CONTENT TYPE 
    response.write(template.build(HTML_TITLE, CONTENT));
    response.end();
}