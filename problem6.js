function filterCarsByBrand(inventory,carBrandsList){

    let filteredCarsList=[];

    for (let car of inventory){
        let carBrand=car.car_make;
        if(carBrandsList.includes(carBrand)){
            filteredCarsList.push(car);
        }
        
    }
    
    return filteredCarsList;
}

module.exports = filterCarsByBrand;