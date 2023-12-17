let textArray = ["Hello" + " " + "there" + " " + "students" + " " + "of" + " " + "SEDC", "!"];
function sentence(myText){
    let result = '';
    let i = 0;
    while(i < myText.length){
        result += myText[i];
        i++;
    }
    return result;
}
result = sentence(textArray);
alert(result);