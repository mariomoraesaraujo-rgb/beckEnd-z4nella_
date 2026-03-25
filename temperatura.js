//conversor de temperatura
const cidade = "curitiba";
let tempCelcios = 18.5;

const tempFahrenheit = tempCelcios * (9/5) + 32;
const tempKelvin = tempCelcios + 273.15;

console.log(`A temperatura de ${cidade} está ${tempCelcios} Cº`);
console.log(` Fahrenheit: ${tempFahrenheit.toFixed(1)} Fº`);
console.log(`Kelvin: ${tempKelvin.toFixed(1)} Kº`);
