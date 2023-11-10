const baseURL = "https://cjlynch01.github.io/wdd230/";
const linksURL = "https://cjlynch01.github.io/wdd230/data/links.json";
const cards = document.querySelector('#cards');

async function getLinks() {
    const response = await fetch(linksURL);
    const data = await response.json();
    console.log(data)
    displayLinks(data.lessons);
}
  
getLinks();

const displayLinks = (lessons) => {
    console.log(lessons)
    lessons.forEach((week) => {
        let card = document.createElement('section');
        console.log(week)
        let numbers = document.createElement('li');
        let description = document.createElement('title');

        description.setAttribute('src', week.url);

        numbers.textContent = `Week ${week.lesson}: ${links.title}`;

        card.appendChild(numbers);
        card.appendChild(description);
        
        cards.appendChild(card);




    });
}