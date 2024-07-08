// PreEntrega 2 

// Simulador de conversor de divisas (Pesos Argentinos a otra divisa)
// Ver instrucciones de uso y cambios utilizados en el ReadMe

/* ----------------------------------------------------------------------------------------------------------------------
    Array de objetos con la informacíón correspondiente de cada divisa (Nombre, código, símbolo y cambio al 08/07/2024 )
 ----------------------------------------------------------------------------------------------------------------------*/
const divisas = [
    {
        nombre: "Dólar estadounidense",
        codigo: "USD",
        simbolo: " $ ",
        cambio: {
            oficial: 934.50,
            blue: 1440,
            tarjeta: 1495.20,
            mep: 1385.25,
            ccl: 1383.60,
            crypto: 1418
        }
    }, 
    {
        nombre: "Euro",
        codigo: "EUR",
        simbolo: " € ",
        cambio: {
            oficial: 1030,
            blue: 1435
        }
    },
    {
        nombre: "Libra esterlina",
        codigo: "GBP",
        simbolo: " £ ",
        cambio: 1176.49
    }, 
    {
        nombre: "Yen Japonés",
        codigo: "JPY",
        simbolo: " ¥ ",
        cambio: 5.71
    }, 
    {
        nombre: "Rublo Ruso",
        codigo: "RUB",
        simbolo: " ₽ ",
        cambio: 10.47
    }, 
    {
        nombre: "Rupia India",
        codigo: "INR",
        simbolo: " ₹ ",
        cambio: 10.99
    }, 
    {
        nombre: "Bitcoin",
        codigo: "BTC",
        simbolo: " ₿ ",
        cambio: 51058504.70
    }, 
    {
        nombre: "Ethereum",
        codigo: "ETH",
        simbolo: " Ξ ",
        cambio: 2716349.52
    }, 
    {
        nombre: "Solana",
        codigo: "SOL",
        simbolo: "",
        cambio: 124909
    }, 
    {
        nombre: "BNB",
        codigo: "BNB",
        simbolo: "",
        cambio: 458780
    }
];

/* -------------------------------------------------------------------------------------------------
            Programa Principal
 -------------------------------------------------------------------------------------------------*/

alert("Calculadora de Divisas");
let textoTipoMoneda ="Escriba el Código de la moneda a la cual quiere hacer el cambio: (ESC para finalizar)\n\n";
textoTipoMoneda += "USD (Dólar Estadounidense)\n";
textoTipoMoneda += "EUR (Euro)\n";
textoTipoMoneda += "GBP (Libra Esterlina)\n";
textoTipoMoneda += "JPY (Yen Japonés)\n";
textoTipoMoneda += "RUB (Rublo Ruso)\n";
textoTipoMoneda += "INR (Rupia India)\n";
textoTipoMoneda += "BTC (Bitcoin)\n";
textoTipoMoneda += "ETH (Ethereum)\n";
textoTipoMoneda += "SOL (Solana)\n";
textoTipoMoneda += "BNB (BNB)";

let tipoMoneda = prompt(textoTipoMoneda);
console.log("La moneda elegida es: " + tipoMoneda);

// Ingresar ESC o esc para finalizar la ejecución
while (tipoMoneda.toUpperCase() !== "ESC") {
    
    let tipoMonedaUpper = tipoMoneda.toUpperCase().trim();
    
    // Validamos que el código de la divisa ingresada por teclado exista en el array
    let divisaSeleccionada = divisas.find(divisa => divisa.codigo === tipoMonedaUpper);
    
    if (tipoMonedaUpper === "ESC") {
        break;

    } else if (divisaSeleccionada) {

        let pesos = parseFloat(prompt("Ingrese la cantidad de pesos Argentinos (ARS) que quiere cambiar: $"));
        console.log("Divisa seleccionada:", divisaSeleccionada);
        SeleccionMoneda(tipoMonedaUpper, pesos, divisas);

    } else {

        alert("No ha ingresado un código de divisa válido, vuelva a intentar");
        console.log("No se encontró la divisa con código:", tipoMonedaUpper);
    }

    tipoMoneda = prompt(textoTipoMoneda);
}
// console.log("Programa Finalizado");
alert("Programa Finalizado");

/* -------------------------------------------------------------------------------------------------
            Funciones
 -------------------------------------------------------------------------------------------------*/
function SeleccionMoneda(tipoMonedaUpper, pesos, divisas){

    if (tipoMonedaUpper === "USD"){

    } else if (tipoMonedaUpper === "EUR"){

    } else{

        let cotizacion = divisas.find((cot) => cot.codigo === tipoMonedaUpper);
        console.log(cotizacion.cambio);
        Cambio(pesos, tipoMonedaUpper, divisas);
    }
}

function Cambio(pesos, tipoMonedaUpper, divisas){
    if(tipoMonedaUpper === "BTC" || tipoMonedaUpper === "ETH" || tipoMonedaUpper === "SOL" || tipoMonedaUpper === "BNB"){
        let cotizacion = divisas.find((cot) => cot.codigo === tipoMonedaUpper);
        let cambio = pesos / cotizacion.cambio ;
        alert("Seleccionó " + cotizacion.nombre);
        alert("$" + pesos + " pesos son :" + cotizacion.simbolo + " "+ cambio.toFixed(8) + " " + cotizacion.codigo);

    }else{
        let cotizacion = divisas.find((cot) => cot.codigo === tipoMonedaUpper);
        let cambio = pesos / cotizacion.cambio ;
        alert("Seleccionó " + cotizacion.nombre);
        alert("$" + pesos + " pesos son :" + cotizacion.simbolo + " "+ cambio.toFixed(2) + " " + cotizacion.codigo);
    }
}