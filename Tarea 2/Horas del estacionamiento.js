let horas = prompt("¿Cuántas horas estuvo estacionado el vehículo?");

if (horas <= 1) {
  console.log('El costo total del estacionamiento es de $5');
} else if (horas <= 2) {
    console.log('El costo total del estacionamiento es de $15');
} else {
    console.log('El costo total del estacionamiento es de $40');
}
