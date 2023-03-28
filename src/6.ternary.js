import "./index.css";

let appNode = document.getElementById("app");

const leeftijd = 19;
const drankje = leeftijd >= 18 ? "biertje" : "frisdrank";

appNode.innerHTML = `Je mag een ${drankje} drinken`;
