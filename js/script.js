let firstCard = getRandomCard();
let secondCard = getRandomCard();
let cards = [firstCard, secondCard];
let sum = firstCard + secondCard;
let hasBlackJack = false;
let isAlive = true;
let message = "";

let messageEl = document.getElementById("message-el");
let sumEl = document.getElementById("sum-el");
let cardsEl = document.getElementById("cards-el");
let playerEl = document.getElementById("player-el");

// Random Number
function getRandomCard() {
  let randomNamber = Math.floor(Math.random() * 13) + 1;

  if (randomNamber > 10) {
    return 10;
  } else if (randomNamber === 1) {
    return 11;
  } else {
    return randomNamber;
  }
}

// Start Game
function startGame() {
  renderGame();
}

// Render Game
function renderGame() {
  sumEl.textContent = "Sum:" + " " + sum;
  cardsEl.textContent = "Cards: ";

  for (let i = 0; i < cards.length; i++) {
    cardsEl.textContent += cards[i] + " ";
  }

  if (sum <= 20) {
    message = "Do you want to draw a new card? :)";
  } else if (sum === 21) {
    message = "You win to game Blackjack! :o";
    playerEl.textContent = player.name + ": $" + player.chips;
    hasBlackJack = true;
  } else {
    message = "You're out of the game! :(";
    isAlive = false;
  }

  messageEl.textContent = message;
}

// New Card
function newCard() {
  if (isAlive === true && hasBlackJack === false) {
    let card = getRandomCard();
    sum += card;
    cards.push(card);
    renderGame();
  }
}

// Player
let player = {
  name: "Per",
  chips: 200,
};


