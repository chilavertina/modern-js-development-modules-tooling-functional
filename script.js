// // IMPORTING MODULE
// import { dodajUKorpu, konacnaCena as cena, konKol } from './shoppingCart.js';
console.log('IMPORTING MODULE');
// dodajUKorpu('hleb', 5);
// console.log(cena, konKol);

// import * as Korpa from './shoppingCart.js';
// Korpa.dodajUKorpu('majonez', 10);

import dodaj from './shoppingCart.js';
dodaj('pica', 2);

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
