// let parts = ["Daniel", "Fantastic", "coding"];
// function tellStory(infoForPerson){
//     return `This is ${infoForPerson[0]}. ${infoForPerson[0]} is a nice person. Today they are ${infoForPerson[1]}. They are ${infoForPerson[2]} all day. The end.`

// }
// let story = tellStory(parts);
// console.log(story);



let parts = ["Daniel", "happy", "working"];
function tellStory(infoForPerson){
    let index = 0;
    let story = "";
    while(index < parts.length[index]){
        story += `${infoForPerson[index]}`;
        index++;
    }
    alert(`This is ${parts[0]}. ${parts[0]} is a nice person. Today they are ${parts[1]}. They are ${parts[2]} all day. The end.`);
    return`This is ${parts[0]}. ${parts[0]} is a nice person. Today they are ${parts[1]}. They are ${parts[2]} all day. The end.`;
}
tellStory(parts);

// Ovdeka imam dve resenia: 
// Vo prviot del e resenie bez while loop 
// Vo vtoriot del e resenie so while loop 




    
