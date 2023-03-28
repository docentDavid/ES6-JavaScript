import "./index.css";

let appNode = document.getElementById("app");

const startDagM = ["Maandag"];
const werkdagen = ["dinsdag", "woensdag", "Donderdag", "Vrijdag"];
const weekend = ["Zaterdag", "Zondag"];

const dagenVanDeWeek = () => {
  const werkWeek = [...werkdagen, ...weekend, ...startDagM];
  return werkWeek;
};

// const begroeting = (dagdeel = "middag", naam = "John Doe") => {
//   return `Goede ${dagdeel} ${naam}`;
// };

appNode.innerHTML = dagenVanDeWeek();
