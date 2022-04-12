// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className) {
  // your code here
  //document.body = html element
  //element.childNodes => returns NodeList
  //element.classList => returns DOMTokenList
  //
  //access classlist for body and checjk for className
  //  if it is present, place element name inside of an array
  //
  //check for children nodes
  //  if it does have children,
  /*    check across children if they have classlist
          if so, check for className
            if presnet add element name to array

    return array
  */



  //fix test!!!
  var body = document.body; //starting html element
  var matchingElements = [];
  // var getElements = function(root) {
  //   var children = root.childNodes;
  //   if (root.classList.includes(className)) {
  //     matchingElements.push(root)
  //   }
  //   if(children) {
  //     for (let i = 0; i < children.length; i++) {
  //       getElements(children[i])
  //     }
  //   }
  // }

  // getElements(body);
  // return matchingElements
};
