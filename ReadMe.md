# Simuladro Interactivo: Conversor de Divisas

 Permite convertir cantidades de pesos argentinos entre diferentes monedas utilizando valores estáticos predefinidos para cada una. En este caso se utiliza el cambio correspondiente al día 23/07/2024

## Funcionalidades

- **Conversión de Divisas:** Permite convertir una cantidad de pesos argentinos a otra seleccionada moneda seleccionada (Por el momento se utilizan valores ya predefinidos para cada moneda).
- **Listado de Monedas Utilizadas:** Incluye las siguientes monedas con sus respectivos códigos y cotizaciones al 23/07/2024 :

    - Dólar estadounidense (USD):

        - Dólar Oficial => 1 USD = 946 pesos argentinos
        - Dólar Blue => 1 USD = 1445 pesos argentinos
        - Dólar Tarjeta => 1 USD = 1513,60 pesos argentinos
        - Dólar MEP => 1 USD = 1334,20 pesos argentinos
        - Dólar CCL => 1 USD = 1338,70 pesos argentinos
        - Dóalr Crypto => 1 USD = 1385 pesos argentinos

    - Euro (EUR):

        - Euro Oficial => 1 EUR = 1044,22 pesos argentinos
        - Euro Blue => 1 EUR = 1563,84 pesos argentinos

    - Libra esterlina (GBP) => 1 GBP = 1195,18 pesos argentinos
    - Franco suizo (CHF) => 1 CHF = 1048,36 pesos argentinos
    - Dólar canadiense (CAD) = > 1 CAD = 671,91 pesos argentinos 
    - Yuan chino (CNY) = > 1 CNY = 127,72 pesos argentinos
    - Yen japonés (JPY) => 1 JPY = 5,95 pesos argentinos
    - Rublo Ruso (RUB) => 1 RUB = 10,54 pesos argentinos
    - Rupia India (INR) => 1 INR = 11,06 pesos argentinos
    - Bitcoin (BTC) => 1 BTC = 60995471,74 pesos argentinos
    - Ethereum (ETH) => 1 ETH = 3168967,55 pesos argentinos
    - Solana (SOL) => 1 SOL = 160998,81 pesos argentinos
    - BNB (BNB) => 1 BNB = 539324,73 pesos argentinos
    - Polkadot (DOT) => 1 DOT = 5401,86 pesos argentinos
    - XRP (XRP) => 1 XRP = 580,23 pesos agentinos
    - Cardano (ADA) => 1 ADA = 382,89 pesos argentinos
    - Toncoin (TON) => 1 TON = 1127,11 pesos argentinos
    - Tron (TRX) => 1 TRX = 124,91 pesos argentinos
    - Dogecoin (DOGE) => 1 DOGE = 120,77 pesos argentinos
    - Chainlink (LINK) => 1 LINK = 12633,78 pesos argentinos 
    - Uniswap (UNI) => 1 UNI = 6978,01 pesos argentinos
    


## Instrucciones de Uso

1. **Descarga y Configuración**
    - Clonar el repositorio.
2. **Abrir la Aplicación**
    - Abrir el archivo `index.html` .
3. **Seleccionar Moneda**
    - Ingresa la cantidad de pesos argentinos que desea convertir.
    - Elegir a la moneda a la cual se desea hacer la conversion.
    - Presionar boton "convertir"

4. **Visualizar Resultados**
    - Se mostrará la cantidad convertida
        - Para las divisas tradicionales se mostrarán con 2 decimales pero para las criptomonedas hasta 8 decimales


## Mejoras a Futuro para Realiza:

    - Integrar una API para consumir cotizaciones actualizadas para cada tipo de divisa
    - Mejor organización de código para mejor legibilidad
    - Verificacion para casos en los que se ingresen valores que no correspondan
    - Poder realizar conversiones de otras monedas , no solo de pesos argentinos
    - Mejorar diseño y estructura de la página