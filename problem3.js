function sortByCarModel(inventory){
    let carModelsList=[];
    for (let car of inventory){
        carModelsList.push(car.car_model);
    }
    carModelsList.sort();
    let sortedInventory=[];
    for(let carModel of carModelsList ){
        for (let car of inventory){
            if(carModel===car.car_model){
                sortedInventory.push(car);
            }
        }
    }

    return sortedInventory;
}

module.exports=sortByCarModel;