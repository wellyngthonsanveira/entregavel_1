///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//ESCREVA SEU CÓDIGO AQUI!!
function Calculadora(n1, n2, op) {
  n1 = parseInt(n1);
  n2 = parseInt(n2);

  let resultado;
  switch (op) {
    case "+":
      resultado = n1 + n2;
      break;
    case "-":
      resultado = n1 - n2;
      break;
    case "*":
      resultado = n1 * n2;
      break;
    case "/":
      resultado = n1 / n2;
      break;
    case "e":
      resultado = n1 * n1;
      for (i = 1; i < n2 - 1; i++) {
        resultado = resultado * n1;
      }
      break;
    default:
      resultado =
        "You must choose what type of operation you want to perform + - * /";
      break;
  }
  if (resultado == undefined || resultado > 1000000) {
    resultado = "ERROR";
  }
  return resultado;
}

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

let visor = document.getElementById("visor");

function adicionar(tecla) {
  visor.value = visor.value + tecla;
}

function limpezatotal() {
  visor.value = "";
}

function calcular() {
  let numeros = visor.value.split(/[^0-9]/);
  let operadores = visor.value.split(/[0-9]/);
  let operador;
  operadores.forEach((x) => {
    if (x != "") operador = x;
  });

  visor.value = Calculadora(numeros[0], numeros[1], operador);
}
