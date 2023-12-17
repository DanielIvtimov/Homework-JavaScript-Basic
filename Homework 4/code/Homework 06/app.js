let firstNames = ["Bob", "Jill"];
let lastNames = ["Gregory", "Wurtz"];
let fullNames = [];

function students(firstNames, lastNames){
    let i = 0;
    while (i < Math.max(firstNames.length, lastNames.length)){
        let firstName = firstNames[i];
        let lastName = lastNames[i];
        let fullName = `${i + 1}. ${firstName} ${lastName}`;
        fullNames.push(fullName);
        i++;
    }
    return fullNames;
}

let result = students(firstNames, lastNames);
alert(result);

//iskrajno gledav na interenet kako se dodeluva numericka vrednost 
// taka sto upotrebiv Math.max + na 10 red so (${i + 1})
