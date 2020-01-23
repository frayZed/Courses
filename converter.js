// const request = require("request");
// const url = "https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5";
class Converter{
    constructor() {
        this.request = require("request");
        this.url = "https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5";
        this.baseCurrencyUs = this.request(this.url, (error, response, body)=>{
            //return JSON.parse(body)[0].buy;
            console.log(body);
            return body;
        });
    }
    roundTwoDecimals = function (amount) {
        return Math.round(amount * 100) / 100;
    };
    convertToUs(currency){
        return this.roundTwoDecimals(currency / this.baseCurrencyUs);
    };
    convertToUa(currency){
        return this.roundTwoDecimals(currency * this.baseCurrencyUs)
    };
}
//module.exports = Converter;
let Convert = new Converter();
console.log(Convert.convertToUs(45645));