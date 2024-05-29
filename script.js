let mes = prompt("Ingrese un mes del año en minúsculas: ");
let dias



switch (mes) {
    case "enero":
    case "marzo":
    case "mayo":
    case "julio":
    case "agosto":
    case "octubre":
    case "diciembre":
        alert("Este mes tiene 31 dias")
    break;

    case "abril":
    case "junio":
    case "septimenbre":
    case "diciembre":
        alert("Este mes tiene 30 dias")
    break;

    case "febrero":
        alert("Este mes tiene 28 o 29 meses, dependiendo de si llueve o no")
    break;

    default:
        alert("Valor inválido")
    break;
}