const d = document,
  $buttonCanvio = d.querySelector(".cambio");

const id = d.querySelector("body").id;

let temas = [];

if (id === "index") {
  temas = [
    { fondo: "#0a0a0a", texto: "white" },
    { fondo: "#e8f4f8", texto: "black" },
  ];
} else if (id === "imagenes") {
  temas = [
    { fondo: "#0f0c29", texto: "white" },
    { fondo: "#e8f4f8", texto: "black" },
  ];
}

let contador = 0;

$buttonCanvio.addEventListener("click", () => {
  contador++;
  const $body = d.querySelector("body");
  $body.style.backgroundImage = "none";

  if (contador % 2 === 0) {
    $body.style.backgroundColor = temas[0].fondo;
    $body.style.color = temas[0].texto;
  } else {
    $body.style.backgroundColor = temas[1].fondo;
    $body.style.color = temas[1].texto;
  }
});
