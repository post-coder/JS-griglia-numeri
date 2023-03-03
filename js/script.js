/*

Creare in JavaScript una griglia 8x8. 
Ogni volta che clicco su un quadrato questo si colora di verde 
(e si decolora al secondo click)

- prendere un elemento contenitore dalla pagina 
- aggiungere un elemento per volta sinchè non raggiungiamo il numero di 8x8
-> al click dell'elemento
  ° togglo la classe "green"



*/



// prendo l'elemento contenitore dalla pagina
let gridContainerElement = document.getElementById("grid-container");

// mi memorizzo il numero totale di celle (8 x 8)
let cellNumber = 64;

// bonus: voglio che questa cella in particolare abbia una colorazione diversa
// al click
let secretCell = 47;

// genero un elemento alla volta tramite un ciclo for da 0 a il numero di celle
for(let i = 0; i < cellNumber; i++) {

  // creiamo una nuova variabile e gli assegnamo ciò che restituirà la funzione createSquare()
  // ovvero un elemento HTML

  // passo alla funzione un numero random come parametro "text" (che è la variabile che poi inserirà come testo all'interno dell'elemento) 

  let newSquareElement = createSquare(randomNumberBetween(1,100));

  // aggiungo l'event listener
  newSquareElement.addEventListener('click', function() {

    // bonus: controllo che il numero della cella sia uguale al valore della secretCell
    if (newSquareElement.textContent == secretCell) {

      // aggiungo la classe, questa non verrà rimossa
      newSquareElement.classList.add('black');

    } else {

      // esercizio normale:
      // controllo se il numero contenuto nella cella è pari o dispari
      if(isEvenOrOdd(newSquareElement.textContent) == 'pari') {

        // in caso sia pari faccio il toggle della classe "green"
        // cosa fa .classList.toggle()?
        // se la stringa che passo come parametro 
        // è già presente come classe dell'elemento viene rimossa,
        // altrimenti viene aggiunta
        newSquareElement.classList.toggle('green');

      } else {

        newSquareElement.classList.toggle('red');

      }
      
    }

   


  });

  // appendiamo l'elemento al contenitore
  gridContainerElement.append(newSquareElement);

}





// _________________________________________________________________________________

// funzione che genera un elemento, gli assegna una classe "square"
function createSquare(text) {

  // creare un elemento
  // dargli una classe
  let newElement = document.createElement('div');
  newElement.classList.add("square");

  newElement.innerText = text;

  return newElement;

}


// funzione che ci dice se un numero è pari o dispari
/**
 * Dice se un numero è pari o dispari
 * @param {any} number
 * @returns {string}
 */
function isEvenOrOdd(number) {
  
  if(number % 2 == 0) {
    
    return "pari";
    
  } else {
    
    return 'dispari';
    
  }
  
}


// funzione che restituisce un numero random tra due limiti min e max
/**
 * Questa funzione genera un numero intero random dal minimo indicato come parametro (min) al massimo indicato come parametro (max)
 * @param {number} min
 * @param {number} max
 * @returns {number}
 */
function randomNumberBetween(min, max) {

  // genero un numero random
  let random = Math.floor(Math.random() * (max - min + 1) + min)

  // una volta che la nostra funzione viene eseguita, restituisci al suo posto questo valore
  return random;

}