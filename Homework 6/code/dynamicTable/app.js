let myDiv = document.getElementById("table-container");
function createTable(rows, cols){
    let body = document.getElementsByTagName("body")[0];
    let table = document.createElement("table");
    table.setAttribute("border", "1");
    let tableBody = document.createElement("tbody");
    for (let i = 0; i < rows; i++){
        let row = document.createElement("tr");
        for (let j = 0; j < cols; j++){
            let cell = document.createElement("td");
            let cellText = document.createTextNode("Row " + (i + 1) + ", Column " + (j + 1));
            cell.appendChild(cellText);
            row.appendChild(cell);
        }
        tableBody.appendChild(row);
    }
    table.appendChild(tableBody);
    body.appendChild(table);
    table.style.borderCollapse = "collapse";
    table.style.width = "100%";
    table.style.marginTop = "20px";
}
let createTableButton = document.getElementById("createTableButton");
createTableButton.addEventListener("click", function(){
    createTable(parseInt(document.getElementById('rows').value, 10), parseInt(document.getElementById('columns').value, 10));
});

