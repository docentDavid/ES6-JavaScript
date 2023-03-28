import "./index.css";

let appNode = document.getElementById("app");

// Deze function moeten voor de aanroep gedeclareerd worden
// ES5
// var zegHallo = function() {
//   return "Hallo";
// }

// ES6
// const zegHallo = () => {
//   return "Hallo"
// }

// Dit is hetzelfde als de functie hierboven
// const zegHallo = () => "Hallo";

appNode.innerHTML = zegHallo();

function zegHallo() {
  return "Hallo";
}

/* Laat tevens zien
 *
 */
