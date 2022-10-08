const carYears = require('./problem4.js');

function filterOlderCarsByYear(inventory,year){


    let carsYearsList=carYears(inventory);

    let olderCarsYearsList=[];
     for (let i=0; i<carsYearsList.length;i++){
        if (carsYearsList[i]<year){
            olderCarsYearsList.push(carsYearsList[i]);
        }
     }
    return olderCarsYearsList;
        
}

module.exports = filterOlderCarsByYear;