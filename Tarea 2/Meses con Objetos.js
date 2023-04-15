let mes = prompt("Por favor, introduce un número del 1 al 12:");

const meses = {
  1: "Enero",
  2: "Febrero",
  3: "Marzo",
  4: "Abril",
  5: "Mayo",
  6: "Junio",
  7: "Julio",
  8: "Agosto",
  9: "Septiembre",
  10: "Octubre",
  11: "Noviembre",
  12: "Diciembre"
};

if (meses[mes]) {
  console.log(meses[mes]);
} else {
  console.log("Número inválido. Por favor, introduce un número del 1 al 12.");
}
