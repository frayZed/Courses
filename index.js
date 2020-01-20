const http = require("http");
const fs = require("fs");
const request = require("request");
const port = 3000;

fs.readFile('./index.html', function (err, html){
    if(err) throw err;
});
        http.createServer(function (req, res) {
        if(req.url === "/contact") {
            res.write(html);
            res.end();
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
            request("https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5",
                function (error, response, body) {
                if(error) throw error;
                    res.write(body);
                    console.log(JSON.parse(body));;
                    res.end();
                });
        }
        }).listen(port);




// http.createServer(function (request, response) {
//     if(request.url === "/about"){
//         console.log("Поступил запрос с сервера");
//         response.end();
//     }
//     else if(request.url === "/"){
//         response.write("Hello");
//         response.end();
//     }
//     else if(request.url === "/contact"){
//         request.url = "/index.html";
//         response.end();
//     }
// }).listen(port,function () {
//     console.log("Server started up");
// })