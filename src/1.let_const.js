// Onderwerp: let & const
import "./index.css";

let appNode = document.getElementById("app");

const uitleg_let = () => {
  var x = 100;
  console.log(`x is nu ${x}`);
  {
    let x = 25;
    console.log(`x is nu de lokale waarde ${x}`);
    // Lokale scope
  }
  console.log(`x is nog steeds de globale waarde ${x}`);

  return "Zie console";
};

// const uitleg_const = () => {
//   var x = 100;
//   console.log(`x is nu ${x}`);
//   {
//     const x = 25;
//     console.log(`x is nu de constante waarde ${x}`);
//     // Lokale scope, net als let. Const is niet aanpasbaar
//   }
//   console.log(`x is nog steeds de globale waarde ${x}`);

//   return "Zie console";
// };

appNode.innerHTML = uitleg_let();
