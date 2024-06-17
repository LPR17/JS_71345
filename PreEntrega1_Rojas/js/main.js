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
    let CambioMoneda = SeleccionMoneda(tipoMoneda, pesos);
    console.log(CambioMoneda);

    tipoMoneda = prompt(textoTipoMoneda);
}

console.log("Programa Finalizado");
alert("Programa Finalizado");

function SeleccionMoneda(tipoMoneda , pesos){
    if (tipoMoneda == 1) {

        console.log("Moneda seleccionada USD");
        let SeleccionUSD = CambioUSD(pesos);
        return SeleccionUSD;

    }else if (tipoMoneda == 2) {

        console.log("Moneda seleccionada EUR");
        let SeleccionEUR = CambioEUR(pesos);
        return SeleccionEUR;

    }else if (tipoMoneda == 3) {

        console.log("Moneda seleccionada GBP");
        let SeleccionGBP = CambioGBP(pesos);
        return SeleccionGBP;

    }else if (tipoMoneda == 4) {

        console.log("Moneda seleccionada JPY");
        let SeleccionJPY = CambioJPY(pesos);
        return SeleccionJPY;

    }else if (tipoMoneda == 5) {

        console.log("Moneda seleccionada RUB");
        let SeleccionRUB = CambioRUB(pesos);
        return SeleccionRUB;

    }else if (tipoMoneda == 6) {

        console.log("Moneda seleccionada INR");
        let SeleccionINR = CambioINR(pesos);
        return SeleccionINR;

    }else if (tipoMoneda == 7) {

        console.log("Moneda seleccionada BTC");
        let SeleccionBTC = CambioBTC(pesos);
        return SeleccionBTC;

    }else if (tipoMoneda == 8) {

        console.log("Moneda seleccionada ETH");
        let SeleccionETH = CambioETH(pesos);
        return SeleccionETH;

    }else if (tipoMoneda == 9) {

        console.log("Moneda seleccionada SOL");
        let SeleccionSOL = CambioSOL(pesos);
        return SeleccionSOL;

    }else{

        console.log("Moneda seleccionada BNB");
        let SeleccionBNB = CambioBNB(pesos);
        return SeleccionBNB;

    }
        
    
}

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

    console.log("Cambio seleccionado: "+ tipoUSD);
    

    if (tipoUSD == 1) {
        alert("Seleccionó Dólar Oficial");
        calculoUSD = pesos / 922 ;
        console.log("El total es : $" + calculoUSD+ "USD");
        alert("El total es : $ " + calculoUSD.toFixed(2) + "USD");
        
    }else if (tipoUSD == 2) {
        alert("Seleccionó Dólar Blue");
        calculoUSD = pesos / 1280 ;
        console.log("El total es : $" + calculoUSD+ "USD");
        alert("El total es : $ " + calculoUSD.toFixed(2) + "USD");

    }else if (tipoUSD == 3) {
        alert("Seleccionó Dólar Tarjeta");
        calculoUSD = pesos / 1475 ;
        console.log("El total es : $" + calculoUSD+ "USD");
        alert("El total es : $ " + calculoUSD.toFixed(2) + "USD");

    }else if (tipoUSD == 4) {
        alert("Seleccionó Dólar MEP");
        calculoUSD = pesos / 1245 ;
        console.log("El total es : $" + calculoUSD+ "USD");
        alert("El total es : $ " + calculoUSD.toFixed(2) + "USD");

    }else if (tipoUSD == 5) {
        alert("Seleccionó Dólar CCL");
        calculoUSD = pesos / 1258 ;
        console.log("El total es : $" + calculoUSD+ "USD");
        alert("El total es : $ " + calculoUSD.toFixed(2) + "USD");

    }else{
        alert("Seleccionó Dólar Crypto");
        calculoUSD = pesos / 1299 ;
        console.log("El total es de: $" + calculoUSD + "USD");
        alert("El total es : $ " + calculoUSD.toFixed(2) + "USD");

    }

    return calculoUSD;

    
}

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
        alert("El total es : € " + calculoEUR.toFixed(2) + "EUR");
        
    }else{
        alert("Seleccionó Euro Blue");
        calculoEUR = pesos / 1367.81 ;
        console.log("El total es : €" + calculoEUR + "EUR");
        alert("El total es : € " + calculoEUR.toFixed(2) + "EUR");
    }
    
    return calculoEUR;
}

function CambioGBP(pesos){
    let calculoGBP;
    
    alert("Seleccionó Libra Esterlina");
    calculoGBP = pesos / 1146.02 ;
    console.log("El total es : £" + calculoGBP + "GBP");
    alert("El total es : £ " + calculoGBP.toFixed(2) + "GBP");

    return calculoGBP;
}

function CambioJPY(pesos){
    let calculoJPY;

    alert("Seleccionó Yen Japonés");
    calculoJPY = pesos / 5.72 ;
    console.log("El total es : ¥" + calculoJPY + "JPY");
    alert("El total es : ¥ " + calculoJPY.toFixed(2) + "JPY");
    
    return calculoJPY;
}

function CambioRUB(pesos){
    let calculoRUB;

    alert("Seleccionó Rublo Ruso");
    calculoRUB = pesos /  10.21 ;
    console.log("El total es : ₽" + calculoRUB + "RUB");
    alert("El total es : ₽ " + calculoRUB.toFixed(2) + "RUB");
    
    
    return calculoRUB;

}

function CambioINR(pesos){
    let calculoINR;

    alert("Seleccionó Rupia India");
    calculoINR = pesos / 10.81 ;
    console.log("El total es : ₹" + calculoINR + "INR");
    alert("El total es : ₹ " + calculoINR.toFixed(2) + "INR");
    
    return calculoINR;
}

function CambioBTC(pesos){
    let calculoBTC;

    alert("Seleccionó Bitcoin");
    calculoBTC = pesos / 59114727.87 ;
    console.log("El total es : ₿ " + calculoBTC + "BTC");
    alert("El total es : ₿ " + calculoBTC.toFixed(8) + "BTC");
    
    return calculoBTC;
}

function CambioETH(pesos){
    let calculoETH;

    alert("Seleccionó Ethereum");
    calculoETH = pesos / 3161360.30 ;
    console.log("El total es : " + calculoETH + "ETH");
    alert("El total es :" + calculoETH.toFixed(8) + "ETH");
    
    return calculoETH;
}

function CambioSOL(pesos){
    let calculoSOL;

    alert("Seleccionó Solana");
    calculoSOL = pesos /  127366.88 ;
    console.log("El total es :" + calculoSOL + "SOL");
    alert("El total es :" + calculoSOL.toFixed(8) + "SOL");
    
    return calculoSOL;
}

function CambioBNB(pesos){
    let calculoBNB;

    alert("Seleccionó BNB");
    calculoBNB = pesos / 127366.88 ;
    console.log("El total es :" + calculoBNB + "BNB");
    alert("El total es :" + calculoBNB.toFixed(8) + "BNB");

    return calculoBNB;
}
