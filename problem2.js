function findLastCar(inventory){
    const l= inventory.length;
    let lastCar=inventory[l-1];
    return `Last car is a ${lastCar.car_make} ${lastCar.car_model}`;   
}

module.exports = findLastCar;