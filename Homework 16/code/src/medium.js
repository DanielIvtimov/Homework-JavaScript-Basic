async function carsInfoData(){
    try{
        let callingCarsInfo = await fetch('https://raw.githubusercontent.com/vega/vega/main/docs/data/cars.json');
        let carsData = await callingCarsInfo.json();
        let carsTable = '<table id="carsTable"><thead><tr><th>Make</th><th>Model</th><th>Year</th></tr></thead><tbody>';
        carsData.forEach(car => {
            carsTable += `<tr><td>${car.Name}</td><td>${car.Horsepower}</td><td>${car.Origin}</td></tr>`;
        });
        carsTable += '</tbody></table>';
        document.body.innerHTML += carsTable;
        document.getElementById('searchButton').addEventListener('click', function(){
            let typeButton = document.getElementById('typeButton').value.trim();
            let brandButton = document.getElementById('brandButton').value.trim();
            let rows = document.getElementById('carsTable').getElementsByTagName('tbody')[0].getElementsByTagName('tr');
            for(let row of rows){
                let type = row.cells[0].textContent.trim();
                let brand = row.cells[1].textContent.trim();
                if((typeButton === '' || type === typeButton) && (brandButton === '' || brand === brandButton)){
                    row.style.display = '';
                }else{
                    row.style.display = 'none';
                }
            }
        });
    }catch(error){
        console.error('An error happened:', error);
    }finally{
        console.log("End!");
    }
}
carsInfoData();











