
// DEPENDENCY
const http = require("http");
const request = require("request");
const fetch = require("node-fetch");
const r2 = require("r2");
const axios = require("axios");

// REPLACE BY ANY RESTFULL API FOR DEMO
const URL = "";

function getHttpCall() {
    http.get(URL, res=>{
        res.setEncoding("utf8");
        let body = "";
        res.on("data",data => {
            body += data;
        });
        
        res.on("end", () => {
            body = JSON.parse(body);
            console.log(body);
        })
    });
}

function getRequestCall() {
    request.get(URL, (error, response, body) => {
        let json = JSON.parse(body);
        console.log(body);
    });
}

const getModeFetchCall = async (url=URL) => {
    try {   
        const response = await fetch(url);
        const json = await response.json();
        console.log("\n\njson ---> ");
        console.log(json);
        console.log(" <--- json \n\n");
    }catch(error) {
        console.log(error);
    }
}

const getR2Call = async (url=URL) => {
    try {   
        const response = await r2(url).json;
        console.log("\n\njson ---> ");
        console.log(response);
        console.log(" <--- json \n\n");
    }catch(error) {
        console.log(error);
    }
}

const getAxiosCall = async (url=URL) => {
    try {   
        const response = await axios.get(url);
        console.log("\n\njson ---> ");
        console.log(response.data);
        console.log(" <--- json \n\n");
    }catch(error) {
        console.log(error);
    }
}

module.exports = {
    getHttpCall,
    getRequestCall,
    getModeFetchCall,
    getR2Call,
    getAxiosCall
};