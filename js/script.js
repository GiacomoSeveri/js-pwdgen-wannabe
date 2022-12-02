// console.log('js ok')

// 1 Prendo l'elemento dal DOM
// 2 Chiedo il nome all'utente
// 3 Chiedo il cognome all'utente
// 4 Chiedo il colore preferito all'utente
// 5 Inserisco nell'HTML con l'aggiunta del 21 finale


// Prendo l'elemento dal DOM
const targetElement = document.getElementById('password');
// console.log(targetElement);

// Chiedere il nome
const userName = prompt('Quale è il tuo Nome?');
// console.log(userName);

// Chiedere il cognome
const userSurName = prompt('Quale è il tuo Cognome?');
// console.log(userSurName);

// Chiedi il colore preferito
const userColor = prompt('Quale è il tuo colore prefetito?');
// console.log(userColor);

// Inseriamo il isultato nell'HTML
targetElement.innerText = `La tua nuova Password è: ${userName}${userSurName}${userColor}21`;
