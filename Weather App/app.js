const express = require("express");
const https = require("https");
const bodyPareser = require("body-parser");

const app = express();
app.use(bodyPareser.urlencoded({extended: true}));

app.get("/", function(req, res) {
    res.sendFile(__dirname+"/index.html");
});
app.post("/", function(req, res) {
    const query = req.body.cityName;
    const apiKey = "45af93ac55291dcb6ddc31b2bcdcfdd7";
    const urlApi = "https://api.openweathermap.org/data/2.5/weather?q=" + query + "&appid=" + apiKey+ "&lang=en&units=Metric";
    
    https.get(urlApi, function(resApi) {
        console.log(resApi.statusCode);

        resApi.on("data", function(dataApi) {
            const data = JSON.parse(dataApi);
            const country = data.sys.country;
            const temp = data.main.temp;
            const description = data.weather[0].description;
            const speed = data.wind.speed;
            const icon = data.weather[0].icon;
            const imageURL = "http://openweathermap.org/img/wn/" + icon + "@2x.png";
            res.write("<h1>Temperature in "+query+" ("+country+") : "+temp+" &#176 C</h1>");
            res.write("Description : "+description+"<br>Wind speed : "+speed);
            res.write("<h2><img src=" + imageURL + "></h2>");
            res.send();
        });
    });
});

app.listen(3000, function() {
    console.log("Server is running on port: 3000...")
});