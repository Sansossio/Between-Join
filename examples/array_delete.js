// Import
const BetweenJoin = require('../index');
// Properties
// Array
const array = ['Hello', 'World'];
// Expression
const expression = '[$1]';
// Response
const normal = BetweenJoin(array, expression);
const one = BetweenJoin(array, expression, 1);
const two = BetweenJoin(array, expression, 2);
// Print
console.log(normal);
console.log(one);
console.log(two);

