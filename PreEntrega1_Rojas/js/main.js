// Simulador de conversor de divisas (Pesos Argentinos a otra divisa)
// Ver instrucciones de uso y cambios utilizados en el ReadMe


// -----------------Programa Principal----------------------------------------------------------------------------------------------------------------------------------------

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
// console.log("La moneda elegida es: " + tipoMoneda);

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


// -----------------Funciones--------------------------------------------------------------------------------------------------------------------------------------------------

// Funcion seleccion de moneda
function SeleccionMoneda(tipoMoneda , pesos){
    if (tipoMoneda == 1) {

        // console.log("Moneda seleccionada USD");
        CambioUSD(pesos);


    }else if (tipoMoneda == 2) {

        // console.log("Moneda seleccionada EUR");
        CambioEUR(pesos);


    }else if (tipoMoneda == 3) {

        // console.log("Moneda seleccionada GBP");
        CambioGBP(pesos);


    }else if (tipoMoneda == 4) {

        // console.log("Moneda seleccionada JPY");
        CambioJPY(pesos);


    }else if (tipoMoneda == 5) {

        // console.log("Moneda seleccionada RUB");
        CambioRUB(pesos);

    }else if (tipoMoneda == 6) {

        // console.log("Moneda seleccionada INR");
        CambioINR(pesos);

    }else if (tipoMoneda == 7) {

        // console.log("Moneda seleccionada BTC");
        CambioBTC(pesos);

    }else if (tipoMoneda == 8) {

        // console.log("Moneda seleccionada ETH");
        CambioETH(pesos);

    }else if (tipoMoneda == 9) {

        // console.log("Moneda seleccionada SOL");
        CambioSOL(pesos);

    }else{

        // console.log("Moneda seleccionada BNB");
        CambioBNB(pesos);

    }
}

// Funciones de conversion para cada divisa
// Para cada moneda se le dejó solo 2 decimales

// Dolar - $ (Oficial, Blue, Trajeta, MEP, Contado Con Liquidación y Crypto)
function CambioUSD(pesos){
    let calculoUSD;
    let textotipoUSD = "Ingrese el tipo de dólar al que quiere hacer el cambio: \n\n";
    textotipoUSD += "1 - Dólar Oficial\n";
    textotipoUSD += "2 - Dólar Blue\n";
    textotipoUSD += "3 - Dólar Tarjeta\n";
    textotipoUSD += "4 - Dólar MEP\n";
    textotipoUSD += "5 - Dólar CCL\n";
    textotipoUSD += "6 - Dólar Crypto";

    let tipoUSD = prompt(textotipoUSD);

    // console.log("Cambio seleccionado en dolares: "+ tipoUSD);
    

    if (tipoUSD == 1) {
        alert("Seleccionó Dólar Oficial");
        calculoUSD = pesos / 922 ;
        console.log("El total es : $" + calculoUSD+ "USD");
        alert("$" + pesos + " pesos son : $ " + calculoUSD.toFixed(2) + " USD");
        
    }else if (tipoUSD == 2) {
        alert("Seleccionó Dólar Blue");
        calculoUSD = pesos / 1280 ;
        console.log("El total es : $" + calculoUSD+ "USD");
        alert("$" + pesos + " pesos son : $ " + calculoUSD.toFixed(2) + " USD");

    }else if (tipoUSD == 3) {
        alert("Seleccionó Dólar Tarjeta");
        calculoUSD = pesos / 1475 ;
        console.log("El total es : $" + calculoUSD+ "USD");
        alert("$" + pesos + " pesos son : $ " + calculoUSD.toFixed(2) + " USD");

    }else if (tipoUSD == 4) {
        alert("Seleccionó Dólar MEP");
        calculoUSD = pesos / 1245 ;
        console.log("El total es : $" + calculoUSD+ "USD");
        alert("$" + pesos + " pesos son : $ " + calculoUSD.toFixed(2) + " USD");

    }else if (tipoUSD == 5) {
        alert("Seleccionó Dólar CCL");
        calculoUSD = pesos / 1258 ;
        console.log("El total es : $" + calculoUSD+ "USD");
        alert("$" + pesos + " pesos son : $ " + calculoUSD.toFixed(2) + " USD");

    }else{
        alert("Seleccionó Dólar Crypto");
        calculoUSD = pesos / 1299 ;
        console.log("El total es de: $" + calculoUSD + "USD");
        alert("$" + pesos + " pesos son : $ " + calculoUSD.toFixed(2) + " USD");

    }
}

// Euro - € (Oficial y Blue)
function CambioEUR(pesos){
    let calculoEUR;
    let textotipoEUR = "Ingrese el tipo de Euro al que quiere hacer el cambio: \n\n";
    textotipoEUR += "1 - Euro Oficial\n";
    textotipoEUR += "2 - Euro Blue\n";

    let tipoEUR = prompt(textotipoEUR);

    console.log("Cambio seleccionado: "+ tipoEUR);

    if (tipoEUR == 1) {
        alert("Seleccionó Euro Oficial");
        calculoEUR = pesos / 968.44 ;
        console.log("El total es : €" + calculoEUR + "EUR");
        alert("$" + pesos + " pesos son : € " + calculoEUR.toFixed(2) + " EUR");
        
    }else{
        alert("Seleccionó Euro Blue");
        calculoEUR = pesos / 1367.81 ;
        console.log("El total es : €" + calculoEUR + "EUR");
        alert("$" + pesos + " pesos son : € " + calculoEUR.toFixed(2) + " EUR");
    }
}

// Libra Esterlina - £
function CambioGBP(pesos){
    let calculoGBP;
    
    alert("Seleccionó Libra Esterlina");
    calculoGBP = pesos / 1146.02 ;
    console.log("El total es : £" + calculoGBP + "GBP");
    alert("$" + pesos + " pesos son : £ " + calculoGBP.toFixed(2) + " GBP");

}

// Yen Japonés - ¥
function CambioJPY(pesos){
    let calculoJPY;

    alert("Seleccionó Yen Japonés");
    calculoJPY = pesos / 5.72 ;
    console.log("El total es : ¥" + calculoJPY + "JPY");
    alert("$" + pesos + " pesos son : ¥ " + calculoJPY.toFixed(2) + " JPY");
    
}

// Rublo Ruso - ₽
function CambioRUB(pesos){
    let calculoRUB;

    alert("Seleccionó Rublo Ruso");
    calculoRUB = pesos /  10.21 ;
    console.log("El total es : ₽" + calculoRUB + "RUB");
    alert("$" + pesos + " pesos son : ₽ " + calculoRUB.toFixed(2) + " RUB");
    
}

// Rupia India - ₹
function CambioINR(pesos){
    let calculoINR;

    alert("Seleccionó Rupia India");
    calculoINR = pesos / 10.81 ;
    console.log("El total es : ₹" + calculoINR + "INR");
    alert("$" + pesos + " pesos son : ₹ " + calculoINR.toFixed(2) + " INR");
    
}

// En el caso de las criptomonedas se le dejaron 8 decimales

// Bitcoin - ₿
function CambioBTC(pesos){
    let calculoBTC;

    alert("Seleccionó Bitcoin");
    calculoBTC = pesos / 59114727.87 ;
    console.log("El total es : ₿ " + calculoBTC + "BTC");
    alert("$" + pesos + " pesos son : ₿ " + calculoBTC.toFixed(8) + " BTC");
    
}

// Ethereum - Ξ
function CambioETH(pesos){
    let calculoETH;

    alert("Seleccionó Ether");
    calculoETH = pesos / 3161360.30 ;
    console.log("El total es : " + calculoETH + "ETH");
    alert("$" + pesos + " pesos son : " + calculoETH.toFixed(8) + " ETH");
    
}

// Solana 
function CambioSOL(pesos){
    let calculoSOL;

    alert("Seleccionó Solana");
    calculoSOL = pesos /  127366.88 ;
    console.log("El total es :" + calculoSOL + "SOL");
    alert("$" + pesos + " pesos son : " + calculoSOL.toFixed(8) + " SOL");
    
}

// BNB
function CambioBNB(pesos){
    let calculoBNB;

    alert("Seleccionó BNB");
    calculoBNB = pesos / 127366.88 ;
    console.log("El total es :" + calculoBNB + "BNB");
    alert("$" + pesos + " pesos son : " + calculoBNB.toFixed(8) + " BNB");

}