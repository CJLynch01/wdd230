var CurrentYear = new Date().getFullYear();
document.querySelector('#year').innerHTML = CurrentYear

//Updates the last modification date.
const date = new Date(document.lastModified);

document.querySelector("#date").innerHTML = `Last Updated: ${document.lastModified}`;