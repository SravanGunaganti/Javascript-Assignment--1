
function findCarById(inventory,id){
    for (let car of inventory){
        if(id===car.id){
            return `Car is a ${car.car_year} ${car.car_make} ${car.car_model}`;
        }
    }
}

module.exports = findCarById;