const inventory =require('../inventory.js');
const filterCarsByBrand= require('../problem6.js');
const carBrandsList=["BMW","Audi"];
let result=filterCarsByBrand(inventory,carBrandsList);
console.log(JSON.stringify(result));