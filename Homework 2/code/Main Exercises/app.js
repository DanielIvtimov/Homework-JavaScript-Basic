let input = prompt("Enter the year you want");
let year = parseInt(input);
let chineseZodiac = (year - 4) % 12;
let text = ("Chinese Zodiac is:")
if(chineseZodiac === 0){
    console.log(text + " " + "Rat");
}else if(chineseZodiac === 1){
    console.log(text + " " + "Ox");
}else if(chineseZodiac === 2){
    console.log(text + " " + "Tiger");
}else if(chineseZodiac === 3){
    console.log(text + " " + "Rabit");
}else if(chineseZodiac === 4){
    console.log(text + " " + "Dragon");
}else if(chineseZodiac === 5){
    console.log(text + " " + "Snake");
}else if(chineseZodiac === 6){
    console.log(text + " " + "Horse");
}else if(chineseZodiac === 7){
    console.log(text + " " + "Goat");
}else if(chineseZodiac === 8){
    console.log(text + " " + "Monkey");
}else if(chineseZodiac === 9){
    console.log(text + " " + "Rooster");
}else if(chineseZodiac === 10){
    console.log(text + " " + "Dog");
}else if(chineseZodiac === 11){
    console.log(text + " " + "Pig");
}else{
    console.log("Invalid Year");
}


