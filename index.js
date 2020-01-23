const http = require("http");
const fs = require("fs");
const request = require("request");
const cur = 24.5;
const converter = require("./converter")
let Converter = new converter();
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
            console.log(JSON.parse(data)[0].buy);
            res.end();
        })
    }
    else if(req.url === "/convert"){
        //res.write(String(Converter.convertToUs(23432)));
        console.log(Converter.convertToUs(34345));
        res.end();
    }
}).listen(port);

function getJson(url, cb){
    request(url, (error, response, body)=>{
       return cb(body);
    });
}
