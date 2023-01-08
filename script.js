// // IMPORTING MODULE
// import { dodajUKorpu, konacnaCena as cena, konKol } from './shoppingCart.js';
console.log('IMPORTING MODULE');
// dodajUKorpu('hleb', 5);
// console.log(cena, konKol);

// import * as Korpa from './shoppingCart.js';
// Korpa.dodajUKorpu('majonez', 10);

import dodaj from './shoppingCart.js';
dodaj('pica', 2);

const response = await fetch('https://jsonplaceholder.typicode.com/posts');
const data = await response.json();
console.log(data);
console.log('Nesto');
