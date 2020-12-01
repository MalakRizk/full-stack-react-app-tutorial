const request = require('request-promise');

const API_KEY = 'e02d17b865d5132f56c900dbb6ab032a';

class Weather{
    static retrieveByCity (city, callback){
        request ({
            uri: `https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${API_KEY}&units=imperial`,
            json: true

        }).then (function (res){
            callback(res);
        }).catch(function (err){
            console.log(err);
            callback({ error: "Could not reach OpenWeather API."});
        })
    }
}

module.exports = Weather;