/* ESERCIZIO 1
 Scrivi una funzione chiamata "crazySum" che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma di quei due valori, ma se il loro valore è lo stesso allora deve ritornare la loro somma moltiplicata per 3.
*/
/*
let crazySum = function (num1, num2) {
  let somma = num1 + num2;

  if (num1 === num2) {
    somma *= 3;
  }
  return somma;
};

console.log(crazySum(33, 3));

*/

/* ESERCIZIO 2
 Scrivi una funzione chiamata "boundary", che accetta un numero intero come parametro e ritorna true se tale parametro è incluso tra 20 e 100 (incluso) o se è esattamente uguale a 400.
*/
/* 
let boundary = function (numero) {
  if (numero === 400 || (numero >= 20 && numero <= 100)) {
    return true;
  } else {
    return false;
  }
};
console.log(boundary(100));
 */

/* ESERCIZIO 3
 Scrivi una funzione chiamata "reverseString", che accetta una stringa come parametro e la ritorna invertita (es.: EPICODE => EDOCIPE).
*/

/* 
let reverseString = function (stringa) {
  let stringaDaInvertire = stringa.split(""); //splitto i caratteri in un array
  let stringaReverese = stringaDaInvertire.reverse(); //uso metodo reverse 
  stringaDaInvertire = stringaReverese.join(""); //ricompongo la stringa

  return stringaDaInvertire;
};

console.log(reverseString("epo"));
*/

/* ESERCIZIO 4 - DA FINIRE
 Scrivi una funzione chiamata "upperFirst", che accetta una stringa come parametro e la ritorna rendendo maiuscola ogni lettera iniziale di ogni parola.
*/

/*
let upperFirst = function (str) {
  let array = str.split(" ");

  for (let i = 0; i < array.length; i++) {
    array[i] = array[i].charAt(0).toUpperCase() + array[i].slice(1);
  }
  const manageString = array.toString();

  return manageString.replaceAll(",", " ");
};
console.log(upperFirst("ciao sono io shallallaaa"));
 */
/* ESERCIZIO 5
 Scrivi una funzione chiamata "giveMeRandom", che accetta come parametro un numero chiamato n e ritorna un array contenente n numeri random contenuti tra 0 e 10.
*/
/* 
let giveMeRandom = function (n) {
  let arrayNr = [];
  for (let i = 0; i < n; i++) {
    arrayNr[i] = Math.floor(Math.random() * 10);
  }
  return arrayNr;
};
console.log(giveMeRandom(2));
 */

//EXTRA:
/* ESERCIZIO 1
 Scrivi una funzione chiamata "area" che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato.
*/

/* 
let area = function (l1, l2) {  
  return (calcolaArea = l1 * l2);
};
console.log(area(22, 3));
*/

/* ESERCIZIO 2
 Scrivi una funzione chiamata "crazyDiff" che calcola la differenza assoluta tra un numero fornito e 19.
 Se il valore calcolato è più grande di 19, la funzione deve tornare tale risultato moltiplicato per 3.
*/

/* 
let crazyDiff = function (num) {
  let calcolaDifferenza = Math.abs(num) - 19;

  if (calcolaDifferenza > 19) {
    return calcolaDifferenza * 3;
  } else return calcolaDifferenza;
};

console.log(crazyDiff(-9));
*/

/* ESERCIZIO 3
 Scrivi una funzione chiamata "codify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "code" all'inizio della stringa fornita e ritornare il risultato, ma se la stringa fornita comincia proprio con "code" allora deve ritornarla senza modifiche.
*/

/*
let codify = function (stringa) {
  switch (stringa) {
    case "code":
      return stringa;
      break;
    default:
      let stringa2 = "code ";
      let stringa3 = stringa;
      return stringa.replace(stringa, stringa2).concat(stringa3);
  }
};

console.log(codify("catalin"));
 */

/* ESERCIZIO 4
 Scrivi una funzione chiamata "check3and7" la quale accetta un numero intero positivo come parametro.
 La funzione deve controllare che tale parametro sia un multiplo di 3 o di 7, e in tal caso tornare true; altrimenti deve tornare false.
 SUGGERIMENTO: operatore modulo
*/

/* 
let check3and7 = function (numero) {
  if (numero !== 0) {
    if (numero % 3 === 0 || numero % 7 === 0) {
      return true;
    } else {
      return false;
    }
  } else {
    return console.log(
      "dai fai il bravo, inserisci un numero magggiore a zero"
    );
  }
};

console.log(check3and7(0)); */

/* ESERCIZIO 5
 Scrivi una funzione chiamata "cutString", che accetta una stringa come parametro e la ritorna senza il primo e l'ultimo carattere.
*/
/* 
let cutString = function (stringa) {
  return stringa.slice(1, stringa.length - 1);
};

console.log(cutString("cisasdasdao"));
 */
