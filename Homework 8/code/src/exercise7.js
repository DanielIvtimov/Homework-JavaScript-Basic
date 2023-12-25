let arrayFalseValues = [null, NaN, "", false, 2003, "Daniel", false, 2023,];
function removedFalseValues(values){
    let myArray = [];
    let i = 0;
    for(let i = 0; i < values.length; i++){
        if(values[i]){
            myArray.push(values[i]);
        }
    }
    return myArray;
}
let newArray = removedFalseValues(arrayFalseValues);
console.log("The real array: " + arrayFalseValues);


