import "./index.css";

let appNode = document.getElementById("app");

const startDagM = ["Maandag"];
const werkdagen = ["dinsdag", "woensdag", "Donderdag", "Vrijdag"];
const weekend = ["Zaterdag", "Zondag"];

const dagenVanDeWeek = () => {
  const werkWeek = ["Maandag", ...werkdagen, ...weekend];
  return werkWeek;
};

appNode.innerHTML = dagenVanDeWeek();
