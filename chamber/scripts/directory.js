const url = "https://cjlynch01.github.io/wdd230/chamber/data/members.json";
const cards = document.querySelector('#cards');

async function getBusinessData() {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data)
    displaybusinesses(data.businesses);
}

getBusinessData();

const displaybusinesses = (businesses) => {

    businesses.forEach((business) => {
        let card = document.createElement('section');
        let name = document.createElement('h3');
        let portrait = document.createElement('img');
        let address = document.createElement('li');
        let phone = document.createElement('li');
        let website = document.createElement('li', 'a');
        let membership = document.createElement('li');
        let information = document.createElement('li');
    
        name.textContent = `${business.name}`;
        address.textContent = `${business.address}`
        phone.textContent = `Phone: ${business.phone}`
        website.textContent = `${business.website}`
        membership.textContent = `Membership: ${business.membership}`

        portrait.setAttribute('src', business.image);
        portrait.setAttribute('alt', `Picture of ${business.name}`);
        portrait.setAttribute('loading', 'lazy');
        portrait.setAttribute('width', '250');
        portrait.setAttribute('height', '200');

        website.setAttribute('href', business.website);


        card.appendChild(name);
        card.appendChild(portrait);
        card.appendChild(address);
        card.appendChild(phone);
        card.appendChild(website);
        card.appendChild(membership);
        card.appendChild(information);

        cards.appendChild(card);

    });

}