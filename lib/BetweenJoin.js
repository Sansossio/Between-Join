// Config properties
const find = [/\$1/g, /\$2/g];
let values = null;
let exp = null;
// Replace and return value
const replaceAction = (key, value = null) => {
  // Replace key
  const myKey = exp.replace(find[0], key);
  // Replaca value
  const val = myKey.replace(find[1], value || '');
  // Response
  return val;
};
// Convertion
// Array
const arrayJoin = (vals = null) => {
  // Response
  let response = '';
  // Loop
  (vals || values).forEach((val) => {
    // Comprobe type
    if (typeof val === 'object') { // recursive function
      const joinResult = BetweenJoin(val); // Result of join
      const mergeWithExpression = replaceAction(joinResult);
      response += mergeWithExpression; // Add to result
    } else {
      response += replaceAction(val); // Direct conversation
    }
  });
  // Return
  return response;
};
// Object
const objJoin = (vals = null) => {
  // Response
  let response = '';
  // Obj
  const myObj = vals || values;
  // Get kets
  const Keys = Object.keys(myObj);
  // Loop
  Keys.forEach((key) => {
    // Value
    const thisValue = myObj[key];
    // Comprobe
    let concat = thisValue;
    // Comprobations
    if (Array.isArray(thisValue)) concat = BetweenJoin(thisValue); // If is array
    else if (typeof thisValue === 'object') concat = objJoin(thisValue); // If is a object
    // Push to response
    response += replaceAction(key, concat);
  });
  // Response
  return response;
};
// Module construction
const BetweenJoin = (obj, expression, de = 0) => {
  // Comprobe type
  if (typeof obj !== 'object') return null;
  // Save info temporal
  values = obj;
  if (expression) exp = expression;
  // Array or Object?
  const isArray = Array.isArray(obj);
  const response = (isArray ? arrayJoin(obj) : objJoin(obj)).trim();
  // Response
  const DeleteEndString = response.length - de;
  return response.trim().slice(0, DeleteEndString);
};

// Export module
module.exports = BetweenJoin;
