import "./index.css";

let appNode = document.getElementById("app");

const begroeting = (naam) => {
  return `Goede dag ${naam}`;
};

// const begroeting = (dagdeel, naam) => {
//   return `Goede ${dagdeel} ${naam}`;
// };

// const begroeting = (dagdeel = "middag", naam = "John Doe") => {
//   return `Goede ${dagdeel} ${naam}`;
// };

appNode.innerHTML = begroeting("Jan");
