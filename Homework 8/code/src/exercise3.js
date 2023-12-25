let numOne = prompt("Enter a number");
let numTwo = 13;
function calculate(numOne, numTwo){
    if(numOne > numTwo){
        let result = numOne * 2;
        console.log(result);
    }else{
        console.log("Sorry, your number is smaller than our number");
    }
}

calculate(numOne, numTwo);

