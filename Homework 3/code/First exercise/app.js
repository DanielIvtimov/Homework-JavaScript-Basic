console.log("=== The Age Calculator ===");
function calculatorForAge(currentYear, birthYear){
    let yourAge =  currentYear - birthYear; 
    console.log(`You are ${yourAge} old`);
}
calculatorForAge(2023,2003);
calculatorForAge(2023,"1977");
calculatorForAge("2023", "2003");
// Ovde prven go izracunav matematicki so momentalnata godina odnosno 2023 i godinata sto sum roden jas :D 2003 pa po toa mi ja dava tocno brojkata kolku godini sum jas pa ja pisav funkcijata na ovoj nacin isto taka toa ke raboti i za bilo koja druga godina :D 

// BONUS:

console.log("=== BONUS ===");

function theCurrentYear(yourYear){
    let year = new Date().getFullYear();
    let yourAge = year - yourYear;
    console.log(`You are ${yourAge} old`);
}
theCurrentYear(2003);
// za ovoj bonus i ova sto go pisav istraziv malce na internet :D 