// Programa Conversor de divisas
// Ver cambios utilizados 

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

while (tipoMoneda != "ESC"){
    console.log(tipoMoneda);
    let pesos = parseFloat(prompt("Ingrese la cantidad de pesos Argentinos que quiere cambiar: $"));
    console.log(pesos);
    let cambioMoneda = SeleccionMoneda(tipoMoneda, pesos);
    console.log(cambioMoneda)

    tipoMoneda = prompt(textoTipoMoneda);
}

console.log("Programa Finalizado");

function SeleccionMoneda(tipoMoneda , pesos){
    if (tipoMoneda == 1) {
        alert()
    }else if (tipoMoneda == 2) {

    }else if (tipoMoneda == 3) {

    }else if (tipoMoneda == 4) {

    }else if (tipoMoneda == 5) {

    }else if (tipoMoneda == 6) {

    }else if (tipoMoneda == 7) {

    }else if (tipoMoneda == 8) {

    }else if (tipoMoneda == 9) {

    }else{

    }
        
    
}

function CambioUSD(pesos){
    let tipoUSD = prompt("Ingrese el tipo de dólar al que quiere hacer el cambio: ");
    tipoUSD += "1 - Dólar Oficial\n";
    tipoUSD += "2 - Dólar Blue\n";
    tipoUSD += "3 - Dólar Tarjeta\n";
    tipoUSD += "4 - Dólar MEP\n";
    tipoUSD += "5 - Dólar CCL\n";
    tipoUSD += "6 - Dólar Crypto";

    if (tipoUSD == 1) {
            
    }else if (tipoUSD == 2) {

    }else if (tipoUSD == 3) {

    }else if (tipoUSD == 4) {

    }else if (tipoUSD == 5) {

    }else{

    }
}

function CambioEUR(pesos){

}

function CambioGBP(pesos){

}

function CambioJPY(pesos){

}

function CambioRUB(pesos){

}

function CambioINR(pesos){

}

function CambioBTC(pesos){

}

function CambioETH(pesos){

}

function CambioSOL(pesos){

}

function CambioBNB(pesos){

}
