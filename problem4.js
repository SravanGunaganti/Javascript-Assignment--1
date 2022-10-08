function carYears(inventory){

    let carYearsList=[];

    for (let car of inventory){
        carYearsList.push(car.car_year);
    }
    
    return carYearsList;
}

module.exports = carYears;