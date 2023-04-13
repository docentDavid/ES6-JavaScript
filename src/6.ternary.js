import "./index.css";

let appNode = document.getElementById("app");

const leeftijd = 21;
const drankje = leeftijd >= 18 ? "biertje" : "frisdrank";

appNode.innerHTML = `Je mag een glaasje ${drankje}`;
