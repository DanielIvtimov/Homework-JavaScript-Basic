async function todoJob(){
    try{
        let makeCall = await fetch("https://jsonplaceholder.typicode.com/todos/1");
        let todoInfo = await makeCall.json();
        console.log("TODO Information:");
        console.log(`ID: ${todoInfo.id}`);
        console.log(`Tittle: ${todoInfo.title}`);
        console.log("Status: Not Completed");
    }catch(error){
        console.log("An error occurred:", error);
    }finally{
        console.log("End!");
    }
}
todoJob();

// Kodot go napisav da bide mal , ednostaven za ovaa domasno se nadevam deka e dobro 
// Gledav da gi iskoristam try i finally od casot sto gi ucevme 
// Isto taka ednostaven kod koristev i za Bonus domasnoto :D 


