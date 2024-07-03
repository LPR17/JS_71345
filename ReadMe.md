# Simuladro Interactivo: Conversor de Divisas

 Permite convertir cantidades de pesos argentinos entre diferentes monedas utilizando valores estáticos predefinidos para cada una. En este caso se utiliza el cambio correspondiente al día 03/07/2024

## Funcionalidades

- **Conversión de Divisas:** Permite convertir una cantidad de pesos argentinos a otra seleccionada moneda seleccionada (Por el momento se utilizan valores ya predefinidos para cada moneda).
- **Listado de Monedas Utilizadas:** Incluye las siguientes monedas con sus respectivos códigos y cotizaciones al 17/06/2024 :

    - Dólar estadounidense (USD):

        - Dólar Oficial => 1 USD = 922 pesos argentinos
        - Dólar Blue => 1 USD = 1280 pesos argentinos
        - Dólar Tarjeta => 1 USD = 1475 pesos argentinos
        - Dólar MEP => 1 USD = 1245 pesos argentinos
        - Dólar CCL => 1 USD = 1258 pesos argentinos
        - Dóalr Crypto => 1 USD = 1299 pesos argentinos

    - Euro (EUR):

        - Euro Oficial => 1 EUR = 968,44 pesos argentinos
        - Euro Blue => 1 EUR = 1367,81 pesos argentinos

    - Libra esterlina (GBP) => 1 GBP = 1146,02 pesos argentinos
    - Yen japonés (JPY) => 1 JPY = 5,72 pesos argentinos
    - Rublo Ruso (RUB) => 1 RUB = 10,21 pesos argentinos
    - Rupia India (INR) => 1 INR = 10,81 pesos argentinos
    - Bitcoin (BTC) => 1 BTC = 59114727,87 pesos argentinos
    - Ethereum (ETH) => 1 ETH = 3161360,30 pesos argentinos
    - Solana (SOL) => 1 SOL = 127366,88 pesos argentinos
    - BNB (BNB) => 1 BNB = 127366,88 pesos argentinos
    


## Instrucciones de Uso

1. **Descarga y Configuración**
    - Descargar el repositorio/archivos carpeta `js`( que contiene el archivo `main.js`) e `index.html` .
2. **Abrir la Aplicación**
    - Abrir el archivo `index.html` .
3. **Seleccionar Moneda**
    - Elegir a la moneda a la cual se desea hacer la conversion.
    - Ingresa la cantidad de mpesos argentinos que desea convertir.
        - En algunos casos como el de USD y EUR volverá a solicitar el tipo de cambio de esa moneda.
4. **Visualizar Resultados**
    - Se mostrará la cantidad convertida
5. **Finalizar Ejecución del Programa**
    -Para finalizar la ejecución del programa ingresar `ESC` o `esc` .


## Mejoras a Futuro para Realiza:

    - Integrar una API para consumir cotizaciones actualizadas para cada tipo de divisa
    - Mejor organización de código para mejor legibilidad
    - Verificacion para casos en los que se ingresen valores que no correspondan
    - Poder realizar conversiones de otras monedas , no solo de pesos argentinos
    - Mejorar diseño y estructura de la página