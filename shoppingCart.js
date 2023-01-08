// EXPORTING MODULE
console.log('EXPORTING MODULE');

const cenaSipinga = 10;
const korpa = [];

export const dodajUKorpu = function (proizvod, kolicina) {
  korpa.push({ proizvod, kolicina });
  console.log(`${kolicina} ${proizvod} je dodat u korpu`);
};
