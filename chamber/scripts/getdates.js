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