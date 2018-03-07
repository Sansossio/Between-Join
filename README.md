# Between-Join

Join array between expression for NodeJS

## What's this?

This is a simple library for generate string (of object or array)

### Installation

Between-Join requires [Node.js](https://nodejs.org/) v8+ to run.

Install the dependencies and start the server.

```sh
$ cd yourProject
$ npm install between-join --save
```
## Parameters
```
BetweenJoin must receive 3 parametters (2 required):
1) Object / Array [Required]
2) Expression [Required]
    - Expression must contain '$1' key, and/or $2 if is jsobject
      - Objects:
        - $1 = Object key
        - $2 = Object value
3) Delete [Optional]
    - Numeric param, erase last characters (1, ..., response.length)
```
### Expression
Between-join must receive to parameter, 'expression'. The word '$1' into expression will be replaced by value of array and '$1' and '$2' for object
```js
const exp = '>$1<';
```
# Examples
## Array
Code:
```js
// Import
const BetweenJoin = require('between-join');
// Properties
// Array
const array = ['Hola', 'Mundo'];
// Expression
const expression = '[$1]';
// Response
const response = BetweenJoin(array, expression);
// Print
console.log(response);
```
Output
```sh
[Hello][World]
```
## Object
Code:
```js
// Import
const BetweenJoin = require('between-join');
// Properties
// Object
const obj = {
  hola: 'World',
  key: 'Value',
};
// Expression
const expression = '[$1-$2]';
// Response
const response = BetweenJoin(obj, expression);
// Print
console.log(response);
```
Output
```sh
[hola-World][key-Value]
```
## Object and array
Code:
```js
// Import
const BetweenJoin = require('between-join');
// Properties
// Array
const values = {
  array: ['Hello', 'World'],
  obj: {
    print: 'I\'m a js object',
  },
};
// Expression
const expression = '[$1 $2]';
// Response
const response = BetweenJoin(values, expression);
// Print
console.log(response);
```
Output
```sh
[array [Hello][World]][obj[printI'm a js object]]
```

## Deleting last character
```js
// Import
const BetweenJoin = require('between-join');
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
```
Output
```sh
[Hello][World]
[Hello][World
[Hello][Worl
```