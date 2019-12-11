var search = document.getElementById("search");
//events
search.addEventListener('keyup',(e) =>{
    if(e.keyCode === 13) {
        var getCityName = e.target.value
    }
    getweather(getCityName);
});
function getweather(getCityName){
//console.log(getCityName);
const weatherApi = `http://api.openweathermap.org/data/2.5/weather?q=${getCityName}&&mode=json&units=metric&APPID=f4f941b9d88166c4a35efbc142f1606f`;
window
.fetch(weatherApi)
.then(data => {
    data
    .json()    //end result should be in json
    .then(weather => {
        // console.log(weather);
        // console.log(weather.coord.lon);
        // console.log(weather.coord.lat);
        var output="";
        console.log(weather);
        var weatherData = weather.weather;
        //array here
        for(let x of weatherData){
         //console.log(x);
         //console.log(x.id);
         //console.log(x.main);
         //console.log(x.description);
         //console.log(x.icon);
         output +=`
         <div class="col-md-4 offset mt-4 card">
         <div class="card-body">
         <h1>${weather.name}</h1>
         <span class="icon">
         <img src="http://openweathermap.org/img/wn/${x.icon}.png"/></span>
         <p><span>temp:</span>
         <span class="temp">${weather.main.temp}&deg;c</span></p>
         <span class="des float-left">${x.description}</span>
         <span class="des float-right">${x.main}</span>
              </div>
              </div>
         `;
         document.getElementById("template").innerHTML = output;
        }
})
.catch(err => console.log(err));
})
.catch(err=>console.log(err));
}
