console.log("=== 1 Exercises ===");

let visitor = prompt("How much money do you have?");
let cancel = null;
let points = parseInt(visitor);
let text = "You got"
if(visitor === cancel){
    console.log("Okay you pressed Cancel");
    console.log(visitor);
}else{
    console.log(text + " ",visitor + "$");
}