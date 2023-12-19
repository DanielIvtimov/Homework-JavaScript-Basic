let myDiv = document.getElementById("main");
myDiv.innerHTML += `<h2>List with Numbers</h2>`;
let listNumbers = [2, 5, 6, 7, 9, 11];
function sumForList(listNumbers, add){
    add.innerHTML = "";
    add.innerHTML += "<ol>"
    for(let oneList of listNumbers){
        add.innerHTML += `<li>${oneList}</li>`
    }
    add.innerHTML += `</ol>`
}
sumForList(listNumbers, main);

