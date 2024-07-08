// PreEntrega 2 

// Simulador de conversor de divisas (Pesos Argentinos a otra divisa)
// Ver instrucciones de uso y cambios utilizados en el ReadMe

/* -------------------------------------------------------------------------------------------------
    Objetos con la informacíón correspondiente de cada divisa (Nombre, código, símbolo y cambio al 03/07/2024 ) 
 -------------------------------------------------------------------------------------------------*/
 let USD = {
    nombre: "Dólar estadounidense",
    codigo: "USD",
    simbolo: " $ ",
    cambio: {
        oficial: 934.50,
        blue: 1440,
        tarjeta: 1495.20,
        MEP: 1385.25,
        CCL: 1383.60,
        crypto: 1418
    }
};

let EUR = {
    nombre: "Euro",
    codigo: "EUR",
    simbolo: " € ",
    cambio: {
        oficial: 1030,
        blue: 1435
    }
};

let GBP = {
    nombre: "Libra esterlina",
    codigo: "GBP",
    simbolo: " £ ",
    cambio: 1176.49
};

let JPY = {
    nombre: "Yen Japonés",
    codigo: "JPY",
    simbolo: " ¥ ",
    cambio: 5.71
};

let RUB = {
    nombre: "Rublo Ruso",
    codigo: "RUB",
    simbolo: " ₽ ",
    cambio: 10.47
};

let INR = {
    nombre: "Rupia India",
    codigo: "INR",
    simbolo: " ₹ ",
    cambio: 10.99
};

let BTC = {
    nombre: "Bitcoin",
    codigo: "BTC",
    simbolo: " ₿ ",
    cambio: 51058504.70
};

let ETH = {
    nombre: "Ethereum",
    codigo: "ETH",
    simbolo: " Ξ ",
    cambio: 2716349.52
};

let SOL = {
    nombre: "Solana",
    codigo: "SOL",
    simbolo: "",
    cambio: 124909
};

let BNB = {
    nombre: "BNB",
    codigo: "BNB",
    simbolo: "",
    cambio: 458780
};

/* -------------------------------------------------------------------------------------------------
                        Array con todas las divisas 
 ------------------------------------------------------------------------------------------------- */
const divisas = [
    USD, 
    EUR,
    GBP, 
    JPY, 
    RUB, 
    INR, 
    BTC, 
    ETH, 
    SOL, 
    BNB
];

/* -------------------------------------------------------------------------------------------------
            Programa Principal
 -------------------------------------------------------------------------------------------------*/

alert("Calculadora de Divisas");
let textoTipoMoneda ="Ingrese la moneda a la cual quiere hacer el cambio: (ESC para finalizar)\n\n";
textoTipoMoneda += "1 - USD (Dólar Estadounidense)\n";
textoTipoMoneda += "2 - EUR (Euro)\n";
textoTipoMoneda += "3 - GBP (Libra Esterlina)\n";
textoTipoMoneda += "4 - JPY (Yen Japonés)\n";
textoTipoMoneda += "5 - RUB (Rublo Ruso)\n";
textoTipoMoneda += "6 - INR (Rupia India)\n";
textoTipoMoneda += "7 - BTC (Bitcoin)\n";
textoTipoMoneda += "8 - ETH (Ethereum)\n";
textoTipoMoneda += "9 - SOL (Solana)\n";
textoTipoMoneda += "10 - BNB (BNB)";

let tipoMoneda = prompt(textoTipoMoneda);
console.log("La moneda elegida es: " + tipoMoneda);

// Ingresar ESC o esc para finalizar la ejecución
while (tipoMoneda != "ESC"){

    if(tipoMoneda.toUpperCase() == "ESC"){
		break;

	}else if (0 < tipoMoneda && tipoMoneda< 11){
        
        let pesos = parseFloat(prompt("Ingrese la cantidad de pesos Argentinos (ARS) que quiere cambiar: $"));
        // console.log(pesos);
        SeleccionMoneda(tipoMoneda, pesos, divisas);
        
    }else{
        alert("No ha ingresado un valor permitido, vuelva a intentar");
        
    }

    tipoMoneda = prompt(textoTipoMoneda);
}

// console.log("Programa Finalizado");
alert("Programa Finalizado");

/* -------------------------------------------------------------------------------------------------
            Funciones
 -------------------------------------------------------------------------------------------------*/
function SeleccionMoneda(tipoMoneda, pesos, divisas){
    let divisaIndex = tipoMoneda -1 ;
    

    

}

function Cambio(pesos){

}



/*IEDEA

// Función para convertir una cantidad de una moneda a otra
function convertirDivisas(cantidad, monedaOrigen, monedaDestino) {
    let tipoCambioOrigen = monedas.find(moneda => moneda.codigo === monedaOrigen).tipoCambio;
    let tipoCambioDestino = monedas.find(moneda => moneda.codigo === monedaDestino).tipoCambio;
    
    let cantidadEnEuro = cantidad / tipoCambioOrigen;
    let cantidadConvertida = cantidadEnEuro * tipoCambioDestino;
    
    return cantidadConvertida.toFixed(2);
}

// Ejemplo de uso de la función de conversión
let cantidadConvertida = convertirDivisas(100, "USD", "EUR");
console.log(`100 USD son aproximadamente ${cantidadConvertida} EUR`);



*/