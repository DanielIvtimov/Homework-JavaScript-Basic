let title = document.getElementById("title");
let priority = document.getElementById("priority");
let color = document.getElementById("color");
let description = document.getElementById("description");
let buttonSave = document.getElementById("saveBtn");
let buttonShow = document.getElementById("showBtn");
let saveArray = [];
function showData(){
    let tableHtml = '<table><thead><tr><th>Title</th><th>Priority</th><th>Description</th></tr></thead><tbody>';
    saveArray.forEach(item => {
        tableHtml +=`<tr><td style="color: ${item.color}">${item.title}</td><td>${item.priority}</td><td>${item.description}</td></tr>`;
    })
    tableHtml +='</tbody></table>';
    document.body.innerHTML += tableHtml;
}
function saveBtn(event) {
    event.preventDefault();
    let save = {
        title: title.value,
        priority: priority.value,
        color: color.value,
        description: description.value
    };
    saveArray.push(save);
    title.value = "";
    description.value = "";
    console.log('Information you saved:', saveArray);
}
buttonSave.addEventListener("click", saveBtn);
buttonShow.addEventListener("click", showData); 



