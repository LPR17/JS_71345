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
    - Yen japonés (JPY) => 1 JPY = 5,95 pesos argentinos
    - Rublo Ruso (RUB) => 1 RUB = 10,54 pesos argentinos
    - Rupia India (INR) => 1 INR = 11,06 pesos argentinos
    - Bitcoin (BTC) => 1 BTC = 60995471,74 pesos argentinos
    - Ethereum (ETH) => 1 ETH = 3168967,55 pesos argentinos
    - Solana (SOL) => 1 SOL = 160998,81 pesos argentinos
    - BNB (BNB) => 1 BNB = 539324,73 pesos argentinos
    


## Instrucciones de Uso

1. **Descarga y Configuración**
    - Descargar el repositorio/archivos carpeta `js`( que contiene el archivo `main.js`) e `index.html` .
2. **Abrir la Aplicación**
    - Abrir el archivo `index.html` .
3. **Seleccionar Moneda**
    - Elegir a la moneda a la cual se desea hacer la conversion.
    - Ingresa la cantidad de pesos argentinos que desea convertir.
4. **Visualizar Resultados**
    - Se mostrará la cantidad convertida
        - Para las divisas tradicionales se mostrarán con 2 decimales pero para las criptomonedas hasta 8 decimales


## Mejoras a Futuro para Realiza:

    - Integrar una API para consumir cotizaciones actualizadas para cada tipo de divisa
    - Mejor organización de código para mejor legibilidad
    - Verificacion para casos en los que se ingresen valores que no correspondan
    - Poder realizar conversiones de otras monedas , no solo de pesos argentinos
    - Mejorar diseño y estructura de la página