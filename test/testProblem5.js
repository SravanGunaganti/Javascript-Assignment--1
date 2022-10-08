const inventory =require('../inventory.js');
const filterOlderCarsByYear = require('../problem5.js');

const year=2000;
let result=filterOlderCarsByYear(inventory,year);

console.log(result.length);