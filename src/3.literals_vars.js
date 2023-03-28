import "./index.css";

let appNode = document.getElementById("app");

let naam = "Fleur";
console.log(`Hoi ${naam}`);

const begroeting = (voornaam) => {
  return `Hoi ${voornaam}`;
};

appNode.innerHTML = begroeting("Jan");

const rekening = (producten, btw) => {
  let totaal = 0;
  for (let i = 0; i < producten.length; i++) {
    totaal += producten[i] + producten[i] * btw;
  }
  return `De rekening is €${totaal}`;
};

console.log(rekening([10, 15, 30], 0.2));
