/*
Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.
*/
function XO(str) {
  let OStr = "";
  let XStr = "";
  for (let i = 0; i < str.length; i++) {
    if (str.charAt(i) === "x" || str.charAt(i) === "X") {
      XStr += str.charAt(i);
    } else if (str.charAt(i) === "o" || str.charAt(i) === "O") {
      OStr += str.charAt(i);
    }
  }
  if (XStr.length === OStr.length) {
    return true;
  } else return false;
}
console.log(XO("ooxx"));