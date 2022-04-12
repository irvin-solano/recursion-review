// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function (obj) {
  // your code goes here
  var finalString = '';
  if (typeof obj === 'number') {
    finalString = finalString + obj;
  }
  if (obj === null) {
    finalString = 'null';
  }
  if (typeof obj === 'boolean') {
    finalString = finalString + obj;
  }
  if (typeof obj === 'string') {
    finalString = '"' + obj + '"';
  } else if (Array.isArray(obj)) {
    finalString += '[';
    for (var i = 0; i < obj.length; i++) {
      if (i === obj.length - 1) {
        finalString += stringifyJSON(obj[i]);
      } else {
        finalString += stringifyJSON(obj[i]) + ',';
      }
    }
    finalString += ']';
  } else if (!Array.isArray(obj) && typeof obj === 'object' && obj !== null) {
    finalString += '{';
    var keys = Object.keys(obj);
    for (var key in obj) {
      if (obj[key] !== undefined && typeof obj[key] !== 'function') {
        if (keys[keys.length - 1] === key) {
          finalString += stringifyJSON(key) + ':' + stringifyJSON(obj[key]);
        } else {
          finalString += stringifyJSON(key) + ':' + stringifyJSON(obj[key]) + ',';
        }
      }
    }
    finalString += '}';
  }

  return finalString;
};
