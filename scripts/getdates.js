//Get's the current year for the copywrite date.
var CurrentYear = new Date().getFullYear();
document.querySelector('#year').innerHTML = CurrentYear

//Updates the last modification date.
const date = new Date(document.lastModified);
document.querySelector('#date').innerHTML = date

//Button for hamburger menu.
const hamButton = document.querySelector('#menu');
const navi = document.querySelector('.navi');

hamButton.addEventListener('click', () => {
	navi.classList.toggle('open');
	hamButton.classList.toggle('open');
});

//visits
const visitsDisplay = document.querySelector(".visits");

let numVisits = Number(window.localStorage.getItem("numVisits-ls")) || 1;

	if (numVisits !== 1) {
		visitsDisplay.textContent = numVisits;
	} else {
		visitsDisplay.textContent = `This is your first visit. 🥳 Welcome!`;
	}

	numVisits++;

localStorage.setItem("numVisits-ls", numVisits);


// RANGE event listener

function displayRatingValue(number) {
	const rangevalue = document.getElementById("rangevalue");
    rangevalue.innerHTML = number;
}

//Checks password value to be the same

//kp2.addEventListener("focusout", checkSame);

function checkSame() {
	const kp1 = document.querySelector("#pwd");
	const kp2 = document.querySelector("#pwd2");
	const message = document.querySelector("#formmessage");
	if (kp1.value !== kp2.value) {
		message.textContent = "❗PASSWORDS DO NOT MATCH!";
		message.style.visibility = "show";
		kp2.style.backgroundColor = "#fff0f3";
		kp2.value = "";
		kp2.focus();
	} else {
		message.style.display = "none";
		kp2.style.backgroundColor = "#fff";
		kp2.style.color = "#000";
	}
}

// join now page pattern to only accept alpha characters, hyphens, and spaces with a minimum of seven characters using

//const hidden timestamp

// var field = document.querySelector("#hidden");
// var date2 = Date.now();

// field.value = date2;

// weather for index.html home page

const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');
const url = 'https://api.openweathermap.org/data/2.5/weather?lat=41.17&lon=-111.98&appid=d8a9e71401b6b1b5681eae6b4172a2d7&units=imperial';

async function apiFetch() {
	console.log("test")
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
	console.log(data)
    currentTemp.innerHTML = `${data.main.temp}&deg;F`;
    const iconsrc = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
    let desc = data.weather[0].description;
    weatherIcon.setAttribute('src', iconsrc );
    weatherIcon.setAttribute('alt', `Weather is ${data.weather.description}`)

	captionDesc.textContent = `${desc}`;
}

apiFetch();

