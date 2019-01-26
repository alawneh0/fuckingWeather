const rootUrl = "https://api.openweathermap.org/data/2.5/weather?appid=387b443606a821302a8ce79f1728e495";

export const fetchWeather = (lat,lon) => {
    const url = rootUrl+ '&lat=' + lat + '&lon=' + lon+"&units=metric";
    console.log(url);
    return fetch(url).then(
        res => res.json().then(
            json => 
                ({
                    temp: json.main.temp,
                    weather: json.weather[0].main,
                    city: json.name,
                    country: json.sys.country
                })
        )
        );
}