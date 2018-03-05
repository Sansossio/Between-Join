// Import
const BetweenJoin = require('../index');
// Properties
// Array
const values = {
  array: ['Hello', 'World'],
  obj: {
    print: 'I\'m a js object',
  },
};
// Expression
const expression = '[$1]';
// Response
const response = BetweenJoin(values, expression);
// Print
console.log(response);
