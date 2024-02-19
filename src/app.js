/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here

  function numero_random(opcion) {
    let b = 0;
    let j = 0;
    if (opcion == 1) {
      b = 4;
      j = 1;
    } else {
      b = 12;
    }
    let a = Math.floor(Math.random() * b + j);
    console.log("El numero del simbolo es: " + a);
    return a;
  }

  switch (numero_random(1)) {
    case 1:
      const container = document.getElementById("cont-simbolo");
      const container11 = document.getElementById("final");
      const img = document.createElement("img");
      const img11 = document.createElement("img");

      img.src = "../src/assets/img/picas.webp";
      img.alt = "Logo Picas";
      img.classList.add("simbolo");
      img11.src = "../src/assets/img/picas.webp";
      img11.alt = "Logo Picas";
      img11.classList.add("simbolo", "girar");
      container.appendChild(img);
      container11.appendChild(img11);

      break;
    case 2:
      const container3 = document.getElementById("cont-simbolo");

      const img3 = document.createElement("img");
      /*const img_class = container.classList;
      img_class.add("simbolo");*/
      img3.src = "../src/assets/img/diamante.webp";
      img3.alt = "Logo Picas";
      img3.classList.add("simbolo");

      const container33 = document.getElementById("final");
      const img33 = document.createElement("img");
      img33.src = "../src/assets/img/diamante.webp";
      img33.alt = "Logo Picas";
      img33.classList.add("simbolo", "girar");
      container33.appendChild(img33);

      container3.appendChild(img3);
      break;
    case 3:
      const container2 = document.getElementById("cont-simbolo");
      const img2 = document.createElement("img");
      const container22 = document.getElementById("final");
      const img22 = document.createElement("img");

      /*const img_class = container.classList;
      img_class.add("simbolo");*/
      img2.src = "../src/assets/img/trebol.png";
      img2.alt = "Logo Picas";
      img2.classList.add("simbolo");

      img22.src = "../src/assets/img/trebol.png";
      img22.alt = "Logo Picas";
      img22.classList.add("simbolo", "girar");
      container2.appendChild(img2);
      container22.appendChild(img22);

      break;
    case 4:
      const container4 = document.getElementById("cont-simbolo");

      const img4 = document.createElement("img");
      /*const img_class = container.classList;
      img_class.add("simbolo");*/
      img4.src = "../src/assets/img/corazon.png";
      img4.alt = "Logo Picas";
      img4.classList.add("simbolo");
      const container44 = document.getElementById("final");
      const img44 = document.createElement("img");
      img44.src = "../src/assets/img/corazon.png";
      img44.alt = "Logo Picas";
      img44.classList.add("simbolo", "girar");
      container44.appendChild(img44);
      container4.appendChild(img4);
      break;
    default:
      break;
  }

  const opciones = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "J", "Q", "K"];

  const container_num = document.getElementById("centro");
  const p = document.createElement("p");
  let text = document.createTextNode(opciones[numero_random(0)]);
  p.appendChild(text);
  p.classList.add("numero");
  container_num.appendChild(p);
};
