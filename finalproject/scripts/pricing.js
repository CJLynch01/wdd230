const urlgit = 'https://cjlynch01.github.io/wdd230/finalproject/data/pricing.json';
const cards = document.querySelector('#cards');

async function getPricingData() {
    const response = await fetch(urlgit);
    const data2 = await response.json();
    displayPricing(data2.pricing);
}

getPricingData();

const displayPricing = (pricing) => {
    pricing.forEach((price) => {
        let card = document.createElement('section');
        let rentaltype = document.createElement('h2');
        let maxpersons = document.createElement('h3');
        let reservation = document.createElement('h4');
        let walkin = document.createElement('h4');
        let image = document.createElement('img');
  
        rentaltype.textContent = `${price.rentaltype}`;
        maxpersons.textContent = `Max Persons: ${price.maxpersons}`;
        reservation.textContent = `Reservations - Half Day: ${price.reservation.halfday}, Full Day: ${price.reservation.fullday}`;
        walkin.textContent = `Walk-In - Half Day: ${price.walkin.halfday}, Full Day: ${price.walkin.fullday}`;

        image.setAttribute('src', price.image);
        image.setAttribute('alt', `Vehicle Type ${price.rentaltype}`);
        image.setAttribute('loading', 'lazy');
        image.setAttribute('width', '340');
        image.setAttribute('height', '440');
  
        card.appendChild(rentaltype);
        card.appendChild(maxpersons);
        card.appendChild(reservation);
        card.appendChild(walkin);
        card.appendChild(image);
  
        cards.appendChild(card);
    });
}