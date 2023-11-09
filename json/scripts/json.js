fetch("cities.json")

.then(function(response) {
    return response.json();
})

.then(function(cities) {
    let placeholder = document.querySelector("#data-output");
    let out = "";
    for(let city of cities){
        out += `
            <tr>
                <td>${city.name}</td>
                <td>${city.state_name}</td>
                <td>${city.country_name}</td>
                <td>${city.country_code}</td>
            </tr>
        
        `;
    }

    placeholder.innerHTML = out;
})