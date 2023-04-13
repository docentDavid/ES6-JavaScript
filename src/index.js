import "./index.css";

let appNode = document.getElementById("app");

const uitleg = () => {
  return `
  <h2>ES6 - JavaScript</h2>
  <p>Onderwerpen</p>
  <ul>
    <li>Let & const</li>
    <li>Functions</li>
    <li>Literals & variabelen</li>
    <li>Spread</li>
    <li>Ternary statement</li>
    <li>Map</li>
  </ul>
  `;
};

appNode.innerHTML = uitleg();
