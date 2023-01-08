// EXPORTING MODULE
console.log('EXPORTING MODULE');

const cenaSipinga = 10;
const korpa = [];

export const dodajUKorpu = function (proizvod, kolicina) {
  korpa.push({ proizvod, kolicina });
  console.log(`${kolicina} ${proizvod} je dodat u korpu`);
};

const konacnaCena = 237;
const konacnaKolicina = 23;

export { konacnaCena, konacnaKolicina as konKol };
