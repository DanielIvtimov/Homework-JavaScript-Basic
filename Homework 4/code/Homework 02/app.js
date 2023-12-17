let numberArray = [5, 10, 15, 20, 25];
function sumForNumbers(numbers){
    let index = 0;
    let sum = 0;
    while(index < numbers.length){
        sum = sum + numbers[index];
        index = index + 1;
    }
    alert("The sum of the numbers is" + " " +sum);
}
sumForNumbers(numberArray);
