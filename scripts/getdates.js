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

kp2.addEventListener("focusout", checkSame);

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

var field = document.querySelector("#hidden");
var date2 = Date.now();

field.value = date2;