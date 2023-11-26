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

const modeButton = document.querySelector("#mode");
const main = document.querySelector("main");

modeButton.addEventListener("click", () => {
	if (modeButton.textContent.includes("🌚")) {
		main.style.background = "#000";
		main.style.color = "#fff";
		modeButton.textContent = "🌞";
	} else {
		main.style.background = "#eee";
		main.style.color = "#000";
		modeButton.textContent = "🌚";
	}
});

//# of visits
const visitsDisplay = document.querySelector(".visits");
let numVisits = Number(window.localStorage.getItem("numVisits-ls")) || 1;
const today = Date.now();

// if (numVisits === 1) {
// 	visitsDisplay.textContent === `Welcome! Let us know if you have any questions.`;
// } else if (numVisits > 1, today < 1) {
// 	visitsDisplay.textContent === `Back so soon! Awesome!`;
// } else {
// 	visitsDisplay.textContent === 'You last visited';
// }

numVisits++;

localStorage.setItem("numVisits-ls", numVisits);

// removes marquee upon clicking red x

// $('#hidemarquee').click(function () {
// 	$('.marquee').addClass('hide');
// });

//marquee to only display monday-wednesday

const current = new Date;
const marquee = document.querySelector('#marquee');
const bannerButton = document.querySelector('#hidemarquee');

if (current.getDay() == 0) {
	marquee.style.display = 'none';
} else if (current.getDay() > 3) {
	marquee.style.display = 'none';
} else {
	marquee.style.display = 'flex';
};

bannerButton.addEventListener('click', () => {
	marquee.style.display = 'none';
});