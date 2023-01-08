// // IMPORTING MODULE
// import { dodajUKorpu, konacnaCena as cena, konKol } from './shoppingCart.js';
console.log('IMPORTING MODULE');
// dodajUKorpu('hleb', 5);
// console.log(cena, konKol);

// import * as Korpa from './shoppingCart.js';
// Korpa.dodajUKorpu('majonez', 10);

import dodaj from './shoppingCart.js';
dodaj('pica', 2);

/*
// TOP LEVEL AWAIT

// console.log('Pocetak fetchinga');
// const response = await fetch('https://jsonplaceholder.typicode.com/posts');
// const data = await response.json();
// console.log(data);
// console.log('Nesto');

const getLastPost = async function () {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts');
  const data = await response.json();
  console.log(data);

  return { title: data.at(-1).title, text: data.at(-1).body };
};

// Not very clean nacin da izvucemo sadrzaj iz promise-a
const lastPost = getLastPost();
lastPost.then(last => console.log(last));

// Bolji nacin
const lastPost2 = await getLastPost();
console.log(lastPost2);
*/
/*
// MODULE PATTERN
const KorpaZaKupovinu2 = (function () {
  const korpa = [];
  const cenaSipinga = 10;
  const ukupnaCena = 237;
  const ukupnaKolicina = 23;

  const dodajUKorpu = function (proizvod, kolicina) {
    korpa.push({ proizvod, kolicina });
    console.log(`${kolicina} ${proizvod} je dodat u korpu`);
  };

  const porudzbina = function (proizvod, kolicina) {
    console.log(`${kolicina} ${proizvod} je narucen od dobavljaca`);
  };

  return {
    dodajUKorpu,
    korpa,
    ukupnaCena,
    ukupnaKolicina,
  };
})();

KorpaZaKupovinu2.dodajUKorpu('jabuka', 4);
KorpaZaKupovinu2.dodajUKorpu('pica', 2);
*/

import cloneDeep from './node_modules/lodash-es/cloneDeep.js';

const state = {
  cart: [
    { product: 'bread', quantity: 5 },
    { product: 'pizza', quantity: 5 },
  ],
  user: { loggedIn: true },
};

const stateClone = Object.assign({}, state);
console.log(stateClone);
