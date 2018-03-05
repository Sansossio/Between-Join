# Between-Join

Join array into between expression for NodeJS

## What's this?

This is a simple library for generate string (of object or array)

### Installation

Syslogs files requires [Node.js](https://nodejs.org/) v8+ to run.

Install the dependencies and start the server.

```sh
$ cd yourProject
$ npm install between-join --savewo
```
### Expression
Between-join must receive to parameter, 'expression'. The word '$1' into expression will be replaced by value of array or object
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
const expression = '[$1]';
// Response
const response = BetweenJoin(obj, expression);
// Print
console.log(response);
```
Output
```sh
[hola World][key Value]
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
const expression = '[$1]';
// Response
const response = BetweenJoin(values, expression);
// Print
console.log(response);
```
Output
```sh
[array [Hello][World]][obj [print I'm a js object]]
```