import "./index.css";

let appNode = document.getElementById("app");

const getallen = [1, 4, 9, 16];

const getal = getallen.map((getal) => {
  return getal ** 2; // Kwadraat
});

// const personen = [
//   {
//     voornaam: "Marthe",
//     leeftijd: 19
//   },
//   {
//     voornaam: "Peter",
//     leeftijd: 25
//   }
// ];

// const persoon = personen.map((persoon) => {
//   return `
//   <p>${persoon.voornaam}</p>
//   <p>${persoon.leeftijd}</p>
//   `;
// });

appNode.innerHTML = getal;
