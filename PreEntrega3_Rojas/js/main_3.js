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
            Eventos
 -------------------------------------------------------------------------------------------------*/
let boton = document.getElementById("boton");

//Evento para cambiar el color del boton cuando posiscionamos el cursor por encima
boton.addEventListener("mouseover",  () => {
    boton.className = "btn btn-success" ; //dispara cambio de clase
})
boton.addEventListener("mouseout",  () => {
    boton.className = "btn btn-primary" ;//dispara cambio de clase
})
boton.addEventListener("click", () => {
        Cambio();
});
/* -------------------------------------------------------------------------------------------------
            Funciones
 -------------------------------------------------------------------------------------------------*/

function Cambio(){

    // Obtenemos la cantidad de pesos a cambiar ingresados al input
    let cantPesos = document.getElementById('pesos').value;

    // Obtenemos el tipo de divisa seleccionada en el select para hacer el cambio
    let divisa = document.getElementById('divisas');
    let divisaSeleccionada = divisa.options[divisa.selectedIndex].value;

    // Verificamos la cantidad de pesos y la divisa
    console.log('Valor del input:', cantPesos);
    console.log('Valor seleccionado del select:', divisaSeleccionada);
    

    if(divisaSeleccionada === "BTC" || divisaSeleccionada === "ETH" || divisaSeleccionada === "SOL" || divisaSeleccionada === "BNB"){
        let cotizacion = divisas.find((cot) => cot.codigo === divisaSeleccionada);
        let cambio = cantPesos / cotizacion.cambio ;
        console.log("$" + cantPesos + " pesos son :" + cotizacion.simbolo + " " + cambio.toFixed(8) + " " + cotizacion.codigo);

    }else{
        let cotizacion = divisas.find((cot) => cot.codigo === divisaSeleccionada);
        let cambio = cantPesos / cotizacion.cambio ;
        console.log("$" + cantPesos + " pesos son :" + cotizacion.simbolo + " " + cambio.toFixed(2) + " " + cotizacion.codigo);
    }
}   