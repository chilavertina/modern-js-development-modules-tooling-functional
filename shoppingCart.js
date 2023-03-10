// EXPORTING MODULE
console.log('EXPORTING MODULE');

// Blocking code
// console.log('Start fetching users');
// await fetch('https://jsonplaceholder.typicode.com/users');
// console.log('Finish fetching users');

// named exports
const cenaSipinga = 10;
const korpa = [];

export const dodajUKorpu = function (proizvod, kolicina) {
  korpa.push({ proizvod, kolicina });
  console.log(`${kolicina} ${proizvod} je dodat u korpu`);
};

const konacnaCena = 237;
const konacnaKolicina = 23;

export { konacnaCena, konacnaKolicina as konKol };

// default exports
export default function (proizvod, kolicina) {
  korpa.push({ proizvod, kolicina });
  console.log(`${kolicina} ${proizvod} je dodat u korpu`);
}
