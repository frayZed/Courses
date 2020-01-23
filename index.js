// const http = require("http");
// const fs = require("fs");
// const request = require("request");
// const port = 3000;
//
//
//         http.createServer(function (req, res) {
//         if(req.url === "/contact") {
//             fs.readFile('./index.html', function (err, html){
//                 if(err) throw err;
//                 res.write(html);
//                 res.end();
//             });
//         }
//         else if(req.url === "/"){
//             res.write("Welcome");
//             console.log("Server started");
//             res.end();
//         }
//         else if(req.url === "/about"){
//             res.write("About");
//             console.log("About response");
//             res.end();
//         }
//         else if(req.url === "/currency"){
//             request("https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5",
//                 function (error, response, body) {
//                 if(error) throw error;
//                     res.write(body);
//                     console.log(JSON.parse(body));;
//                     res.end();
//                 });
//         }
//         }).listen(port);


const http = require("http");
const fs = require("fs");
const request = require("request");
const port = 3000;
const url = "https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5";

http.createServer(function (req, res) {
    if(req.url === "/contact") {
        fs.readFile('./index.html', function (err, html){
            if(err) throw err;
            res.write(html);
            res.end();
        });
    }
    else if(req.url === "/"){
        res.write("Welcome");
        console.log("Server started");
        res.end();
    }
    else if(req.url === "/about"){
        res.write("About");
        console.log("About response");
        res.end();
    }
    else if(req.url === "/currency"){
        getJson(url, data=>{
            res.write(data);
            res.end();
        })
    }
}).listen(port);

function getJson(url, cb){
    request(url, (error, response, body)=>{
       return cb(body);
    });
}

