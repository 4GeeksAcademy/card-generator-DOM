/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here

  function simbolo() {
    let a = Math.floor(Math.random() * 0 + 1);
    console.log("El numero del simbolo es: " + a);
    return a;
  }

  switch (simbolo()) {
    case 1:
      const container = document.getElementsByClassName(".cont-simbolo");

      const img = document.createElement("img");
      const img_class = container.classList;
      img_class.add("simbolo");
      img.src = "../src/assets/img/picas.webp";
      img.alt = "Logo Picas";

      container.appendChild(img);
      break;
    case 2:
      break;
    case 3:
      break;
    case 4:
      break;
    default:
      break;
  }
};
