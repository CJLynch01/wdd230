var temp= 50;
var wSpeed= 20;
var windChill= (35.74 + (0.6215 * temp))-(35.75 * Math.pow(wSpeed,0.16)) + (0.4275*temp*Math.pow(wSpeed,0.16));

var windChill= Math.round(windChill);
document.getElementById("windChill").innerHTML= windChill;


//temperature

const currentTemp = document.querySelector('#current-temp');
const tomorrowTemp = document.querySelector('#tomorrow-temp');
const dayafterTemp = document.querySelector('#dayafter-temp');
const weatherIcon1 = document.querySelector('#weather-icon1');
const weatherIcon2 = document.querySelector('#weather-icon2');
const weatherIcon3 = document.querySelector('#weather-icon3');
const captionDesc1 = document.querySelector('#caption1');
const captionDesc2 = document.querySelector('#caption2');
const captionDesc3 = document.querySelector('#caption3');

const url = 'https://api.openweathermap.org/data/2.5/forecast?lat=41.17&lon=-111.98&appid=d8a9e71401b6b1b5681eae6b4172a2d7&units=imperial';

async function apiFetch() {
	//console.log("test")
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
                //console.log(data)
                displayResults(data);
        } else {
            throw Error(await response.text());
        }
    }   catch (error) {
            console.log(error);
    }
    
}

function displayResults(data) {
	//console.log(data)
    currentTemp.innerHTML = `${data.list[0].main.temp}&deg;F`;
    tomorrowTemp.innerHTML = `${data.list[1].main.temp}&deg;F`;
    dayafterTemp.innerHTML = `${data.list[2].main.temp}&deg;F`;

    const iconsrc1 = `https://openweathermap.org/img/w/${data.list[0].weather[0].icon}.png`;
    let desc1 = data.list[0].weather[0].description;

    const iconsrc2 = `https://openweathermap.org/img/w/${data.list[1].weather[0].icon}.png`;
    let desc2 = data.list[1].weather[0].description;

    const iconsrc3 = `https://openweathermap.org/img/w/${data.list[2].weather[0].icon}.png`;
    let desc3 = data.list[2].weather[0].description;

    weatherIcon1.setAttribute('src', iconsrc1 );
    weatherIcon1.setAttribute('alt', `Weather is ${data.list[0].weather[0].description}`)

    weatherIcon2.setAttribute('src', iconsrc2 );
    weatherIcon2.setAttribute('alt', `Weather is ${data.list[1].weather[0].description}`)

    weatherIcon3.setAttribute('src', iconsrc3 );
    weatherIcon3.setAttribute('alt', `Weather is ${data.list[2].weather[0].description}`)

	captionDesc1.textContent = `${desc1}`;
    captionDesc2.textContent = `${desc2}`;
    captionDesc3.textContent = `${desc3}`;
}

apiFetch();