// PreEntrega 2 

// Simulador de conversor de divisas (Pesos Argentinos a otra divisa)
// Ver instrucciones de uso y cambios utilizados en el ReadMe


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

	}else{
        
        let pesos = parseFloat(prompt("Ingrese la cantidad de pesos Argentinos (ARS) que quiere cambiar: $"));
        // console.log(pesos);
        SeleccionMoneda(tipoMoneda, pesos);
        
    }

    tipoMoneda = prompt(textoTipoMoneda);
}

// console.log("Programa Finalizado");
alert("Programa Finalizado");

/* -------------------------------------------------------------------------------------------------
            Funciones
 -------------------------------------------------------------------------------------------------*/

/* -------------------------------------------------------------------------------------------------
    Objetos con la informacíón correspondiente de cada divisa (Nombre, código, símbolo y cambio ) 
 -------------------------------------------------------------------------------------------------*/
let divisa1 = {
    nombre: "Dólar estadounidense",
    codigo: "USD",
    simbolo: " $ ",
    cambio: {
        oficial: 922,
        blue: 1280,
        tarjeta: 1475,
        MEP: 1245,
        CCL: 1258,
        crypto: 1299
    }
};

let divisa2 = {
    nombre: "Euro",
    codigo: "EUR",
    simbolo: " € ",
    cambio: {
        oficial: 968.44,
        blue: 1367.81
    }
};

let divisa3 = {
    nombre: "Libra esterlina",
    codigo: "GBP",
    simbolo: " £ ",
    cambio: 1146.02
};

let divisa4 = {
    nombre: "Yen Japonés",
    codigo: "JPY",
    simbolo: " ¥ ",
    cambio: 5.72
};

let divisa5 = {
    nombre: "Rublo Ruso",
    codigo: "RUB",
    simbolo: " ₽ ",
    cambio: 10.21
};

let divisa6 = {
    nombre: "Rupia India",
    codigo: "INR",
    simbolo: " ₹ ",
    cambio: 10.81
};

let divisa7 = {
    nombre: "Bitcoin",
    codigo: "BTC",
    simbolo: " ₿ ",
    cambio: 59114727.87
};

let divisa8 = {
    nombre: "Ethereum",
    codigo: "ETH",
    simbolo: " Ξ ",
    cambio: 3161360.30
};

let divisa9 = {
    nombre: "Solana",
    codigo: "SOL",
    simbolo: "",
    cambio: 127366.88
};

let divisa10 = {
    nombre: "BNB",
    codigo: "BNB",
    simbolo: "",
    cambio: 127366.88
};

/* -------------------------------------------------------------------------------------------------
                        Array con todas las divisas 
 ------------------------------------------------------------------------------------------------- */
let divisas = [
    divisa1, 
    divisa2, 
    divisa3, 
    divisa4, 
    divisa5, 
    divisa6, 
    divisa7, 
    divisa8, 
    divisa9, 
    divisa10
];