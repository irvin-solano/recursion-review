// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className) {
  // your code here
  var body = document.body;
  var matchingElements = [];

  var getElements = function(root) {
    var children = root.childNodes;

    if (root.classList !== undefined) {
      if (root.classList.contains(className)) {
        matchingElements.push(root);
      }
    }

    if (children) {
      for (let i = 0; i < children.length; i++) {
        getElements(children[i]);
      }
    }

  };

  getElements(body);

  return matchingElements;

};
