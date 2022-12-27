

// const Icon = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`

const btnClick = document.getElementById("click");
let wPage = document.getElementById("pw");

const getWeather = () => {
    wPage.innerHTML = `Loading Weather Info...`;    
    let cityInput = document.getElementById("cityId").value;
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${cityInput}&appid=9dc6aaf5c304a5cc907842ea3a061003&units=metric`)
	.then(response => response.json())
	.then(response => {
        // console.log(response)
        return showWeather(response)
    })
	.catch(err => {
        console.error(err.message);
        wPage.innerHTML = `City / Country not found`;
    });    
}

const showWeather = (response) => {
    const cityInput = document.getElementById("cityId").value;
    console.log(response.main.temp)
    let wPage = document.getElementById("pw");
    wPage.innerHTML = `Temp in ${cityInput} is : ${response.main.temp}&#8451
    <img src="https://openweathermap.org/img/wn/${response.weather}@2x.png" alt="">`;
}


btnClick.addEventListener("click", getWeather)