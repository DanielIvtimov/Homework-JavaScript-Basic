let buttonDiv = document.getElementById("divBtn");
let buttonAstros = document.getElementById("astronauts");
buttonAstros.addEventListener("click", function (event) {
    event.preventDefault();
    fetch(`http://api.open-notify.org/astros.json`)
        .then(response => response.json())
        .then(data => {
            console.log(data);
            buttonDiv.innerHTML = '';
            data.people.forEach(astronaut => {
                buttonDiv.innerHTML += `<ul>
                    <li>${astronaut.name}</li>
                </ul>`;
            });
        })
        .catch(error => {
            console.error("An error occurred", error);
        });
});

