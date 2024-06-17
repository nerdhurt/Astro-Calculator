// Array of planets and their relative gravity compared to Earth
var planets = [
    ['Pluto', 0.06],
    ['Neptune', 1.148],
    ['Uranus', 0.917],
    ['Saturn', 1.139],
    ['Jupiter', 2.640],
    ['Mars', 0.3895],
    ['Moon', 0.1655],
    ['Earth', 1],
    ['Venus', 0.9032],
    ['Mercury', 0.377],
    ['Sun', 27.9]
];

// Function to populate the dropdown with planet options
function populateDropdown() {
    var dropdown = document.getElementById('planets');
    
    planets.forEach(function(planet) {
        var option = document.createElement('option');
        option.value = planet[0];
        option.text = planet[0];
        dropdown.appendChild(option);
    });
}

// Function to calculate weight on a given planet
function calculateWeight(userWeight, planetName) {
    var planet = planets.find(function(p) {
        return p[0] === planetName;
    });
    
    if (planet) {
        var relativeGravity = planet[1];
        var weightOnPlanet = userWeight * relativeGravity;
        return weightOnPlanet.toFixed(2); // Return weight rounded to 2 decimal places
    } else {
        return 'Unknown planet'; // Handle case where planetName is not found (though in your case, all names should match)
    }
}

// Event handler for button click
function handleClickEvent(e) {
    var userWeight = parseFloat(document.getElementById('user-weight').value);
    var planetName = document.getElementById('planets').value;
    var result = calculateWeight(userWeight, planetName);
    document.getElementById('output').innerText = `If you were on ${planetName}, you would weigh ${result} kg.`;
}

// Initialize the dropdown options and set up the button click event handler
populateDropdown();
document.getElementById('calculate-button').onclick = handleClickEvent;
