// DEPENDENCIES
const template = require("../views/template.js");
const { employee } = require("../model/default.js");
const { getHttpCall, 
        getRequestCall, 
        getModeFetchCall,
        getR2Call,
        getAxiosCall } = require("../model/utils.js");

exports.get = function(request, response){
    response.writeHead(200, {'Content-type': 'text/html'});

    getAxiosCall()

    let HTML_TITLE = "Node Fest : home";
    let CONTENT = "";
    CONTENT+=`<div class='divFullWidth'>`;
    CONTENT+=`<h1 class='pageTitle'> Home Page </h1>`;
    CONTENT+=`<p class='pageSubTitle'>  list of employees from model file </p>`;
    CONTENT+=`<ul>`;
    employee.map((o,i)=>{
        CONTENT+=`<li>name: ${o.name}</li>`;
        CONTENT+=`<li>age: ${o.age}</li>`;
        CONTENT+=`<li>qualification: ${o.qualification}</li>`;
        CONTENT+=`<li>residence: ${o.residence}</li>`;
    })
    CONTENT+=`</ul>`;
    CONTENT+=`</div>`;

    response.write(template.build(HTML_TITLE, CONTENT));
    response.end();
}