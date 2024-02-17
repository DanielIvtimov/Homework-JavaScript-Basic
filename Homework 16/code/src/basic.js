async function carsInfoData(){
    try{
        let callingCarsInfo = await fetch('https://raw.githubusercontent.com/vega/vega/main/docs/data/cars.json');
        let carsData = await callingCarsInfo.json();
        let carsTable = '<table><thead><tr><th>Make</th><th>Model</th><th>Year</th></tr></thead><tbody>';
        carsData.forEach(car =>{
            carsTable += `<tr><td>${car.Name}</td><td>${car.Horsepower}</td><td>${car.Origin}</td></tr>`;
        });
        carsTable += '</tbody></table>';
        document.body.innerHTML += carsTable;
    }catch(error){
        console.error('An error happen:', error);
    }finally{
        console.log("End!");
    }
}
carsInfoData();



