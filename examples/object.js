// Import
const BetweenJoin = require('../index');
// Properties
// Object
const obj = {
  hola: 'World',
  key: 'Value',
};
// Expression
const expression = '[$1]';
// Response
const response = BetweenJoin(obj, expression);
// Print
console.log(response);
