async function getCarsDataAndPopulateTable(){
    try{
        let callingCarsInfo = await fetch('https://raw.githubusercontent.com/vega/vega/main/docs/data/cars.json');
        let carsData = await callingCarsInfo.json();
        let tableHTML = '<table id="carsTable"><thead><tr><th>Make</th><th>Model</th><th>Year</th><th>Horsepower</th></tr></thead><tbody>';
        carsData.forEach(car =>{
            tableHTML += `<tr><td>${car.Name}</td><td>${car.Model}</td><td>${car.Year}</td><td>${car.Horsepower}</td></tr>`;
        });
        tableHTML += '</tbody></table>';
        document.body.innerHTML += tableHTML;
        document.getElementById('searchButton').addEventListener('click',function(){
            let typeButton = document.getElementById('typeButton').value.trim().toLowerCase();
            let brandButton = document.getElementById('brandButton').value.trim().toLowerCase();
            let modelButton = document.getElementById('modelButton').value.trim().toLowerCase();
            let horsepowerButton = parseInt(document.getElementById('horsepowerButton').value.trim());
            let table = document.getElementById('carsTable');
            if(!table){
                console.error('Table element not found.');
                return;
            }
            let tbody = table.getElementsByTagName('tbody')[0];
            if(!tbody){
                console.error('Table body element not found.');
                return;
            }
            let rows = tbody.getElementsByTagName('tr');
            for(let row of rows){
                let cells = row.getElementsByTagName('td');
                if(!cells || cells.length < 4){
                    console.error('Invalid row structure.');
                    continue;
                }
                let type = cells[0].textContent.trim().toLowerCase();
                let brand = cells[1].textContent.trim().toLowerCase();
                let model = cells[2].textContent.trim().toLowerCase();
                let horsepower = parseInt(cells[3].textContent.trim());
                if((typeButton === '' || type.includes(typeButton))&&
                    (brandButton === '' || brand.includes(brandButton))&&
                    (modelButton === '' || model.includes(modelButton))&&
                    (isNaN(horsepowerButton) || horsepower === horsepowerButton)){
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
getCarsDataAndPopulateTable();



















