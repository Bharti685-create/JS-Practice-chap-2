// VAT Calculation

let price = prompt("What is the raw price")

let VAT = Number(price) / 100 * 20.6;

let finalPrice = Number(price) + VAT;

console.log(`this is the final price ${finalPrice}`);