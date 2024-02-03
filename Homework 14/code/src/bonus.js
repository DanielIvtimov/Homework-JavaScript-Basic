async function todoJobBonus(){
    try{
        let makeCallBonus = await fetch("https://jsonplaceholder.typicode.com/todos/1");
        let todoInfoBonus = await makeCallBonus.json();
        console.log("Todo Bonus Information:");
        console.log(`ID: ${todoInfoBonus.id}`);
        console.log(`Title: ${todoInfoBonus.title}`);
        console.log(`Status: Not Completed`);
        let personInfoBonus = await fetch(`https://jsonplaceholder.typicode.com/users/${todoInfoBonus.userId}`);
        let personDataBonus = await personInfoBonus.json();
        console.log("Person Information:");
        console.log(`ID: ${personDataBonus.id}`);
        console.log(`Name: ${personDataBonus.name}`);
        console.log(`Email: ${personDataBonus.email}`);
    }catch(error){
        console.log("An error occurred:", error);
    }finally{
        console.log("End!");
    }
}
todoJobBonus();





