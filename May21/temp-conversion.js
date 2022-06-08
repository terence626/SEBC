//
// function convertCelsToFahr(celsius)
// {
//   const celsTemp = celsius;
//   const celsToFahr = celsTemp * 9 / 5 + 32;
//   const message = `${celsTemp}\xB0C is ${celsToFahr} \xB0F.`;
//     console.log(message);
// }
//
// function convertFahrToCels(fahrenheit)
// {
//   const fahrTemp = fahrenheit;
//   const fahrToCels = (fahrTemp - 32) * 5 / 9;
//   const message = `${fahrTemp}\xB0F is ${fahrToCels}\xB0C.`;
//     console.log(message);
// }
// convertCelsToFahr(40);
// convertFahrToCels(100);
// convertFahrToCels(98.6);



// random number generator

for (let i = 0; i < 100; i++) {
    console.log(Math.trunc(Math.random() * 100 + 1))
}
