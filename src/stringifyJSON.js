// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

//1.force the value in to a string



var stringifyJSON = function (obj) {
  // your code goes here
  var finalString = '';
  //if type of obj => num, force it into a string
  if (typeof obj === 'number') {
    finalString = finalString + obj;
  }

  // else if (Array.isArray(obj)) {
  //   // elseif type of obj => array , add stringified bracket and to the final string
  //   finalString += '[';
  //   for (var i = 0; i < obj.length; i++) {
  //     //iterate over the array and add elements one by one , separated by a comma
  //     finalString += obj[i] + ',';
  //   }
  //   finalString += ']';
  // }



  return finalString;
};
