let invokeButton = document.getElementById('invoke');
let body = document.getElementById('body');
let nextButton = document.getElementById('next');
let previousButton = document.getElementById('previous');
let page = 1;
function fetchPlanets() {
    fetch(`https://swapi.dev/api/planets/?page=${page}`)
        .then(response => response.json())
        .then(data => {
            let planets = data.results.slice(0, 10);
            showPlanets(planets);
            nextButton.style.display = 'block';
            previousButton.style.display = 'block';
        })
        .catch(error => console.error('Error fetching planets:', error));
}
function showPlanets(planets) {
    body.innerHTML = '';
    planets.forEach(planet => {
        body.innerHTML += `
      <tr>
        <td>${planet.name}</td>
        <td>${planet.population}</td>
        <td>${planet.climate}</td>
        <td>${planet.gravity}</td>
      </tr>
    `;
    });
}
function fetchNextPlanets() {
    page++;
    fetchPlanets();
}
function fetchPreviousPlanets() {
    page--;
    fetchPlanets();
}
invokeButton.addEventListener('click', fetchPlanets);
nextButton.addEventListener('click', fetchNextPlanets);
previousButton.addEventListener('click', fetchPreviousPlanets);



