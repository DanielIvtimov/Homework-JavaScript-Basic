let num1 = parseInt(prompt("Enter the first number"));
let num2 = parseInt(prompt("Enterthe second number"));
function closerTo100(num1, num2){
    let number = 100;
    num1 = Math.abs(number - num1);
    num2 = Math.abs(number - num2);
    if(num1 < num2){
        alert(`${num1} is closer to 100`);
    }else if( num2 < num1){
        alert(`${num2} is closer to 100`);
    }else{
        alert("both numbers are equally to 100");
    }
}
closerTo100(num1, num2);



