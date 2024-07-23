// PreEntrega 2 

// Simulador de conversor de divisas (Pesos Argentinos a otra divisa)
// Ver instrucciones de uso y cambios utilizados en el ReadMe

/* ----------------------------------------------------------------------------------------------------------------------
    Array de objetos con la informacíón correspondiente de cada divisa (Nombre, código, símbolo y cambio al 23/07/2024 )
 ----------------------------------------------------------------------------------------------------------------------*/
 const divisas = [
    {
        nombre: "Dólar estadounidense ofical",
        codigo: "USDoficial",
        simbolo: " $ ",
        cambio: 946
    },
    {
        nombre: "Dólar estadounidense Blue",
        codigo: "USDblue",
        simbolo: " $ ",
        cambio: 1445

    }, 
    {
        nombre: "Dólar estadounidense tarjeta",
        codigo: "USDtarjeta",
        simbolo: " $ ",
        cambio: 1513.60
    }, 
    {
        nombre: "Dólar MEP",
        codigo: "USDmep",
        simbolo: " $ ",
        cambio: 1334.20
    }, 
    {
        nombre: "Dólar estadounidense contado con liqui",
        codigo: "USDccl",
        simbolo: " $ ",
        cambio: 1338.70
    }, 
    {
        nombre: "Dólar crypto",
        codigo: "USDcrypto",
        simbolo: " $ ",
        cambio: 1385
        
    }, 
    {
        nombre: "Euro Oficial",
        codigo: "EURoficial",
        simbolo: " € ",
        cambio: 1044.22
    },
    {
        nombre: "Euro Blue",
        codigo: "EURblue",
        simbolo: " € ",
        cambio: 1563.84
    },
    {
        nombre: "Libra esterlina",
        codigo: "GBP",
        simbolo: " £ ",
        cambio: 1195.18
    }, 
    {
        nombre: "Yen Japonés",
        codigo: "JPY",
        simbolo: " ¥ ",
        cambio: 5.95
    }, 
    {
        nombre: "Rublo Ruso",
        codigo: "RUB",
        simbolo: " ₽ ",
        cambio: 10.54
    }, 
    {
        nombre: "Rupia India",
        codigo: "INR",
        simbolo: " ₹ ",
        cambio: 11.06
    }, 
    {
        nombre: "Bitcoin",
        codigo: "BTC",
        simbolo: " ₿ ",
        cambio: 60995471.74
    }, 
    {
        nombre: "Ethereum",
        codigo: "ETH",
        simbolo: " Ξ ",
        cambio: 3168967.55
    }, 
    {
        nombre: "Solana",
        codigo: "SOL",
        simbolo: "",
        cambio: 160998.81
    }, 
    {
        nombre: "BNB",
        codigo: "BNB",
        simbolo: "",
        cambio: 539324.73
    }
];

/* -------------------------------------------------------------------------------------------------
            Programa Principal
 -------------------------------------------------------------------------------------------------*/

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



    tipoMoneda = prompt(textoTipoMoneda);
}

/* -------------------------------------------------------------------------------------------------
            Funciones
 -------------------------------------------------------------------------------------------------*/
function SeleccionMoneda(tipoMonedaUpper, pesos, divisas){
    
    if (tipoMonedaUpper === "USD"){
        SeleccionUSD(tipoMonedaUpper, pesos, divisas);

    } else if (tipoMonedaUpper === "EUR"){
        SeleccionEUR(tipoMonedaUpper, pesos, divisas);

    } else{

        let cotizacion = divisas.find((cot) => cot.codigo === tipoMonedaUpper);
        console.log(cotizacion.cambio);
        Cambio(pesos, tipoMonedaUpper, divisas);
    }
}

function SeleccionUSD(tipoMonedaUpper, pesos, divisas) {
    let textotipoUSD = "Ingrese el tipo de dólar al que quiere hacer el cambio: \n\n";
    textotipoUSD += "Oficial\n";
    textotipoUSD += "Blue\n";
    textotipoUSD += "Tarjeta\n";
    textotipoUSD += "MEP\n";
    textotipoUSD += "CCL\n";
    textotipoUSD += "Crypto";

    let tipoUSD = prompt(textotipoUSD);
    console.log("Cambio seleccionado: " + tipoUSD);
    let tipoCambio = tipoUSD.toLowerCase().trim();
    console.log("Tipo de cambio: " + tipoCambio);

    // Buscar el cambio seleccionado en el objeto de la divisa
    let cotizacion = divisas.find(cot => cot.codigo === tipoMonedaUpper);

    // Verificar si el tipoCambio existe dentro del objeto de cambio de la divisa
    if (tipoCambio in cotizacion.cambio) {
        let cambioSeleccionado = cotizacion.cambio[tipoCambio];
        console.log("Cambio seleccionado:", cambioSeleccionado);
        Cambio(pesos, tipoMonedaUpper, divisas, tipoCambio);
    } else {
        alert("Tipo de cambio no válido. Por favor, seleccione uno válido.");
        console.log("Tipo de cambio no válido:" + tipoCambio);
    }
}

function SeleccionEUR(tipoMonedaUpper, pesos, divisas){
    let textotipoEUR = "Ingrese el tipo de Euro al que quiere hacer el cambio: \n\n";
    textotipoEUR += "Oficial\n";
    textotipoEUR += "Blue";
    
    let tipoEUR = prompt(textotipoEUR);
    console.log("Cambio seleccionado: "+ tipoEUR);
    let tipoCambio = tipoEUR.toLowerCase().trim();
    console.log("Tipo de cambio: " + tipoCambio);

    // Buscar el cambio seleccionado en el objeto de la divisa
    let cotizacion = divisas.find(cot => cot.codigo === tipoMonedaUpper);

    // Verificar si el tipoCambio existe dentro del objeto de cambio de la divisa
    if (tipoCambio in cotizacion.cambio) {
        let cambioSeleccionado = cotizacion.cambio[tipoCambio];
        console.log("Cambio seleccionado:", cambioSeleccionado);
        Cambio(pesos, tipoMonedaUpper, divisas, tipoCambio);
    } else {
        alert("Tipo de cambio no válido. Por favor, seleccione uno válido.");
        console.log("Tipo de cambio no válido:" + tipoCambio);
    }

}

function Cambio(pesos, tipoMonedaUpper, divisas, tipoCambio){
    if(tipoMonedaUpper === "BTC" || tipoMonedaUpper === "ETH" || tipoMonedaUpper === "SOL" || tipoMonedaUpper === "BNB"){
        let cotizacion = divisas.find((cot) => cot.codigo === tipoMonedaUpper);
        let cambio = pesos / cotizacion.cambio ;
        alert("Seleccionó " + cotizacion.nombre);
        alert("$" + pesos + " pesos son :" + cotizacion.simbolo + " " + cambio.toFixed(8) + " " + cotizacion.codigo);

    }else if(tipoMonedaUpper === "USD" || tipoMonedaUpper === "EUR"){
        let cotizacion = divisas.find((cot) => cot.codigo === tipoMonedaUpper);
        let cambio = pesos / cotizacion.cambio[tipoCambio];
        alert("Seleccionó " + cotizacion.nombre + " " + tipoCambio);
        alert("$" + pesos + " pesos son :" + cotizacion.simbolo + " " + cambio.toFixed(2) + " " + cotizacion.codigo + " " + tipoCambio);

    }else{
        let cotizacion = divisas.find((cot) => cot.codigo === tipoMonedaUpper);
        let cambio = pesos / cotizacion.cambio ;
        alert("Seleccionó " + cotizacion.nombre);
        alert("$" + pesos + " pesos son :" + cotizacion.simbolo + " " + cambio.toFixed(2) + " " + cotizacion.codigo);

    }
}