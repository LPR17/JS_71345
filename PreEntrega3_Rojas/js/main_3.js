// PreEntrega 2 

// Simulador de conversor de divisas (Pesos Argentinos a otra divisa)
// Ver instrucciones de uso y cambios utilizados en el ReadMe

/* ----------------------------------------------------------------------------------------------------------------------
    Array de objetos con la informacíón correspondiente de cada divisa (Nombre, código, símbolo y cambio al 23/07/2024 )
 ----------------------------------------------------------------------------------------------------------------------*/
 const divisas = [
    {
        nombre: "Dólar estadounidense ofical",
        codigo: "USD Oficial",
        simbolo: " $ ",
        cambio: 946
    },
    {
        nombre: "Dólar estadounidense Blue",
        codigo: "USD Blue",
        simbolo: " $ ",
        cambio: 1445

    }, 
    {
        nombre: "Dólar estadounidense tarjeta",
        codigo: "USD Tarjeta",
        simbolo: " $ ",
        cambio: 1513.60
    }, 
    {
        nombre: "Dólar MEP",
        codigo: "USD MEP",
        simbolo: " $ ",
        cambio: 1334.20
    }, 
    {
        nombre: "Dólar estadounidense contado con liqui",
        codigo: "USD CCL",
        simbolo: " $ ",
        cambio: 1338.70
    }, 
    {
        nombre: "Dólar crypto",
        codigo: "USD Crypto",
        simbolo: " $ ",
        cambio: 1385
        
    }, 
    {
        nombre: "Euro Oficial",
        codigo: "EUR Oficial",
        simbolo: " € ",
        cambio: 1044.22
    },
    {
        nombre: "Euro Blue",
        codigo: "EUR Blue",
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
        nombre: "Franco Suizo",
        codigo: "CHF",
        simbolo: " Fr ",
        cambio: 1048.36
    },
    {
        nombre: "Dolar Canadiense",
        codigo: "CAD",
        simbolo: " $ ",
        cambio: 671.91
    }, 
    {
        nombre: "Yuan Chino",
        codigo: "CNY",
        simbolo: " ¥ ",
        cambio: 127.72
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
    },
    {
        nombre: "Polkadot",
        codigo: "DOT",
        simbolo: "",
        cambio: 5401.86
    },
    {
        nombre: "XRP",
        codigo: "XRP",
        simbolo: "",
        cambio: 580.23
    },
    {
        nombre: "Cardano",
        codigo: "ADA",
        simbolo: "",
        cambio: 382.89
    },
    {
        nombre: "Toncoin",
        codigo: "TON",
        simbolo: "",
        cambio: 1127.11
    },
    {
        nombre: "Tron",
        codigo: "TRX",
        simbolo: "",
        cambio: 124.91
    },
    {
        nombre: "Dogecoin",
        codigo: "DOGE",
        simbolo: "",
        cambio: 120.77
    },
    {
        nombre: "Chainlink",
        codigo: "LINK",
        simbolo: "",
        cambio: 12633.78
    },
    {
        nombre: "Uniswap",
        codigo: "UNI",
        simbolo: "",
        cambio: 6978.01
    }
    
];
// Array que va a contener como objetos todos las conversiones realizadas en la sesion a modo de historial
let historial = []
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

//Agregamos el evento click al boton para disparar la función Cambio
boton.addEventListener("click", () => {
        Cambio(divisas, historial);
});
/* -------------------------------------------------------------------------------------------------
            Funciones
 -------------------------------------------------------------------------------------------------*/
//Función que realiza el cambio de pesos a la divisa seleccionada
function Cambio(divisas, historial){
    let total = document.getElementById("conversion")

    // Obtenemos la cantidad de pesos a cambiar ingresados al input
    let cantPesos = document.getElementById('pesos').value;

    // Obtenemos el tipo de divisa seleccionada en el select para hacer el cambio
    let divisa = document.getElementById('divisas');
    let divisaSeleccionada = divisa.options[divisa.selectedIndex].value;

    // Verificamos la cantidad de pesos y la divisa
    //console.log('cantidad de pesos ingresados:', cantPesos);
    //console.log('divisa seleccionada:', divisaSeleccionada);
    

    if(divisaSeleccionada === "BTC" || divisaSeleccionada === "ETH" || divisaSeleccionada === "SOL" || divisaSeleccionada === "BNB"){
        let cotizacion = divisas.find((cot) => cot.codigo === divisaSeleccionada);
        let cambio = cantPesos / cotizacion.cambio ;

        // Actualizamos el contenido del HTML (etiqueta p) con el resultado de la converison
        total.innerText = `$ ${cantPesos} pesos son : ${cotizacion.simbolo}  ${cambio.toFixed(8)}  ${cotizacion.codigo} (${cotizacion.nombre})`;

        //Agregamos la conversion realizada al array de historial de conversiones
        historial.push({Pesos:cantPesos, Moneda: cotizacion.codigo, Total:cambio.toFixed(8)});

        //disparo de funcion history
        history(historial);
        
    }else{
        let cotizacion = divisas.find((cot) => cot.codigo === divisaSeleccionada);
        let cambio = cantPesos / cotizacion.cambio ;

        // Actualizamos el contenido del HTML (etiqueta p) con el resultado de la converison
        total.innerText = `$ ${cantPesos} pesos son : ${cotizacion.simbolo}  ${cambio.toFixed(2)}  ${cotizacion.codigo} (${cotizacion.nombre})`;

        //Agregamos la conversion realizada al array de historial de conversiones
        historial.push({Pesos:cantPesos, Moneda: cotizacion.codigo, Total:cambio.toFixed(2)});

        //disparo de funcion history
        history(historial);
    }
}

//Funcion que almacena en el local Storage los cambios realizados a modo de historial
function history(historial){

    //Opcion #1 localStorage
    localStorage.setItem(historial, JSON.stringify(historial));

    //Opcion #2 SessionStorage
    //sessionStorage.setItem(historial, JSON.stringify(historial));

}