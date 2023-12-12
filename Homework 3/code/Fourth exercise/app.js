let myCash = 500;
function atmAccount(myAccount){
    myAccount = parseInt(prompt("Enter the price for money"));
    if(myAccount <= myCash){
        console.log("Here is your cash")
    } else if(myAccount > myCash){
        console.log("Not enough money")
    }else{
        console.log("Invalid value")
    }
}
atmAccount();
// Iskrajno malce me zbuni ovaa zadaca i nemozev da najdam nekoj nacin za da go upotrebam return pa zatoa probav na ovoj nacin za da raboti kako treba :D 
// Se nadevam deka ova mi e tocno vaka na ovoj nacin :D 