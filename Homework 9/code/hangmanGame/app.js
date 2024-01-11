document.addEventListener('DOMContentLoaded', function () {
    let mainWord = ['programming', 'coding', 'language', 'learning', 'school'];
    let maxLives = 6;
    let wordToGuess;
    let remainingLives;
    let guessedLetters;
    function initializeGame() {
      wordToGuess = mainWord[Math.floor(Math.random() * mainWord.length)].toUpperCase();
      remainingLives = maxLives;
      guessedLetters = new Set();
      displayWord();
      displayLives();
      displayScaffold();
      displayMessage('Guess a letter!');
    }
    function displayWord() {
      let wordDisplay = document.getElementById('word-display');
      wordDisplay.textContent = wordToGuess.split('').map(letter => guessedLetters.has(letter) ? letter : '_').join(' ');
    }
    function displayLives() {
      let livesDisplay = document.getElementById('lives');
      livesDisplay.textContent = `Lives: ${remainingLives}`;
    }
    function displayScaffold() {
      let scaffold = document.getElementById('scaffold');
      scaffold.textContent = 'Scaffold: '.padEnd(maxLives, '⬜');
    }
    function displayMessage(message) {
      let messageDisplay = document.getElementById('message');
      messageDisplay.textContent = message;
    }
    function makeGuess() {
      let guessInput = document.getElementById('guess-input');
      let guess = guessInput.value.toUpperCase();
      if (guessedLetters.has(guess)) {
        displayMessage('You already guessed that letter. Try another one.');
      } else {
        guessedLetters.add(guess);
        if (!wordToGuess.includes(guess)) {
          remainingLives--;
          displayScaffold();
        }
        displayWord();
        displayLives();
        if (checkVictory()) {
          displayMessage('Congratulations! You guessed the word.');
        } else if (checkDeath()) {
          displayMessage(`Game over! The word was "${wordToGuess}". Try again.`);
        } else {
          displayMessage('Guess another letter!');
        }
      }
      guessInput.value = '';
    }
    function checkVictory() {
      return wordToGuess.split('').every(letter => guessedLetters.has(letter));
    }
    function checkDeath() {
      return remainingLives <= 0;
    }
    initializeGame();
    let guessButton = document.getElementById('guess-button');
    guessButton.addEventListener('click', makeGuess);
  });
  