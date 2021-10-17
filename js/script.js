// Create global variables
const guessedLettersElement = document.querySelector(".guessed-letters"); // Unordered list where the player’s guessed letters will appear.
const button = document.querySelector(".guess"); // The button with the text “Guess!” in it. 
const letterInput = document.querySelector(".letter"); // The text input where the player will guess a letter.
const wordInProgress = document.querySelector(".word-in-progress"); // The empty paragraph where the word in progress will appear.
const remainingGuessesElement = document.querySelector(".remaining"); // The paragraph where the remaining guesses will display.
const remainingGuessesSpan = document.querySelector (".remaining span"); // Span inside the paragraph where the remaining guesses will display.
const message = document.querySelector (".message"); // Empty paragraph where messages will appear when the player guesses a letter.
const hiddenButton = document.querySelector (".play-again"); // The hidden button that will appear prompting the player to play again.

// Create another global variable called word and give it the value of "magnolia". Magnolia is your starting word to test out the game until you fetch words from a hosted file in a later step.
let word = "magnolia";

// create another global variable called guessedLetters with an empty array. This array will contain all the letters the player guesses. 
const guessedLetters = [];

// Create a global variable called remainingGuesses and set it to a value of 8. The value 8 is the maximum number of guesses the player can make.
let remainingGuesses = 8;

// add an async function called getWord() to fetch data from a file at this address: “https://gist.githubusercontent.com/skillcrush-curriculum/7061f1d4d3d5bfe47efbfbcfe42bf57e/raw/5ffc447694486e7dea686f34a6c085ae371b43fe/words.txt” The difference here is that you’re fetching data from a text file instead of a JSON file. In the second await statement, use .text() instead of .json(). 
const getWord = async function () {
    const res = await fetch ("https://gist.githubusercontent.com/skillcrush-curriculum/7061f1d4d3d5bfe47efbfbcfe42bf57e/raw/5ffc447694486e7dea686f34a6c085ae371b43fe/words.txt");
    const words = await res.text();  
    // console.log(data); 

    const wordArray = words.split("\n");
    console.log(wordArray);
    const randomIndex = Math.floor(Math.random() * wordArray.length);
    word = wordArray[randomIndex].trim();
    placeholderWord(word);
};

// Log out the result of the second await statement to see what data you retrieved! Don’t forget you’ll need to call getWord() in order to view the result in the console.

getWord();

// To grab a random word from the file, create a variable to pull a random index from the wordArray
// const selectRandomWord = function (data) {
    
    // console.log(randomIndex);
// Still in the function, pull out a random word from the array and remove any extra whitespace around the word using the trim() method. Reassign the value of the existing word global variable to this new random word. This means you should also now declare the global word variable with let instead of const.
// Take placeholder(word) from your code’s global space and place it at the bottom of getWord(). In the location the call to placeholder(word) used to be, call getWord() instead.
    //  word = data[randomArray].trim();
    // console.log(randomWord);
    // placeholderWord(word);

// Create and name a function to update the paragraph’s innerText for the “words-in-progress” element with circle symbols (●) to represent each letter in the word. The symbols will stay on the screen until the correct letter is guessed (in a future step). Hint: Copy and paste the ● symbol into your code!
const placeholderWord = function (word) {
    const placeholderLetters = [];
    for (const letter of word) {
        console.log(letter);
        placeholderLetters.push("●");
    }
// Call the function and pass it the word variable as the argument. You should see 8 circle symbols on the screen, one for each letter in the word “magnolia.” Hint: You’ll need to use an array and then join it back to a string using the .join("") method.
wordInProgress.innerText = placeholderLetters.join("");
};

// placeholderWord(word);

// Add an event listener for when a player clicks the Guess button. In the callback function, add a parameter for the event: e.
// Because you’re working with a form, you want to prevent the default behavior of clicking a button, the form submitting, and then reloading the page. To prevent this reloading behavior, add this line of code at the top of the callback function: e.preventDefault();.
button.addEventListener("click", function (e) {
    e.preventDefault();
// Inside the event handler function for the Guess button, empty the text of the message element.
message.innerText = "";
// Create and name a variable to capture the value of the input. Log out the value of the variable capturing the input. Then, empty the value of the input. You should see the letter you enter into the input field in the console when the Guess button is clicked. 
const guess = letterInput.value;
// console.log(guess);

// At the bottom of the event handler, call the function you made that checks the input, and pass it the input value as an argument. Save the result of this function call to a variable and log it out to the console.
const rightGuess = validateInput(guess);
// console.log(rightGuess);

// Return to the event handler for the Guess button. Make sure that the variable mapped to the result of the function validates that the player’s input is returning a letter (as opposed to “undefined”). If it’s returning a letter, pass it as an argument to your makeGuess function.
    if (rightGuess) {
        makeGuess(guess);
    } 
    letterInput.value = "";
});

// Create and name a function that accepts the input value as a parameter. This function’s purpose is to validate the player’s input.
// Inside the function, create a variable for the accepted letter sequence: const acceptedLetter = /[a-zA-Z]/. Now your code uses a regular expression to ensure the player inputs a letter! Still inside the function, use a conditional block to check for different scenarios. First, check if the input is empty. Then, check if the player has entered more than one letter. Finally, check if they’ve entered a character that doesn’t match the regular expression pattern. Hint: You’ll need the .match() method here. Each condition should have a message directing the player on what to input. 
const validateInput = function (input) {
    const acceptedLetter = /[a-zA-Z]/;
    if (input.length === 0) {
        message.innerText = "Please enter a letter.";
    } else if (input.length > 1) {
        message.innerText = "Only enter 1 letter.";
    } else if (!input.match(acceptedLetter)) {
        message.innerText = "Please enter a letter from A to Z.";
    } else {
        return input;
    } 
};

// Below the function that checks input, create a new function called makeGuess that accepts a letter as the parameter. 
// JavaScript is case sensitive, so it sees uppercase and lowercase letters as different characters. The easiest way to handle case-sensitivity is to convert all letters to one casing. We recommend converting your letter parameter to uppercase. Once the letter transforms to uppercase, check to see if your guessedLetters array already contains that letter.
const makeGuess = function (guess) {
    guess = guess.toUpperCase();
// If the player already guessed the same letter, update the message to inform the player they’ve already guessed that letter and try again. If they haven’t guessed that letter before, add the letter to the guessedLetters array.
if (guessedLetters.includes(guess)) {
    message.innerText = "You've already guessed that letter.";
} else {
    guessedLetters.push(guess);
    // Log out the guessedLetters array to the console.
    console.log(guessedLetters);
// In the else clause of your makeGuess function, before the call to the function that will update the word in progress, call your new function to update the remaining guesses and pass it the letter that the player guessed as an argument.
    updateGuessesRemaining(guess);
// Call the function inside the else statement of the makeGuess function so the letter displays when it hasn’t been guessed before.
    playerGuesses();
    updateWordInProgress(guessedLetters);
  }
};

// Create and name a function to update the page with the letters the player guesses. Empty the innerHTML of the unordered list where the player’s guessed letters will display. Create a new list item for each letter inside your guessedLetters array (i.e., the global variable) and add it to the unordered list. 
const playerGuesses = function () {
    guessedLettersElement.innerHTML = "";
    for (const letter of guessedLetters) {
        const li = document.createElement("li");
        li.innerText = letter;
        guessedLettersElement.append(li);
    }
};

// Create and name a function to update the word in progress that accepts the guessedLetters array as a parameter. This function will replace the circle symbols with the correct letters guessed. Create a variable called wordUpper to change the word variable to uppercase. On the following line, create a variable to split the word string into an array so that the letter can appear in the guessedLetters array: const wordArray = wordUpper.split("");. Then, log out wordArray to see what this does!
const updateWordInProgress = function (guessedLetters) {
    const wordUpper = word.toUpperCase();
    const wordArray = wordUpper.split("");
    // console.log(wordArray);
    const revealWord = [];
    for (const letter of wordArray) {
    if (guessedLetters.includes(letter)) {
        revealWord.push(letter.toUpperCase());
    } else {
        revealWord.push("●");
    }
  }
 //console.log(revealWord); 
    wordInProgress.innerText = revealWord.join("");
    didPlayerWin();
};

// Create and name a new function that will accept the guess input as a parameter. In the code, place this function before the function that checks if the player won. In the function, grab the word and make it uppercase. Because the player’s guess is uppercase, making the word they’re guessing uppercase will compare letters with the same casing. Find out if the word contains the guessedLetter. If it doesn’t include the letter from guess, let the player know that the word doesn’t contain the letter and subtract 1 from their remainingGuesses. If it does contain a letter, let the player know the letter is in the word.
const updateGuessesRemaining = function(guess) {
    const upperWord = word.toUpperCase(); 
    if (!upperWord.includes(guess)) {
        message.innerText = `Sorry, the word has no ${guess}.`;
        remainingGuesses -= 1;
    } else {
        message.innerText = `Good guess! The word has the letter ${guess}`;
    }
//  Below the conditional statement, determine if the remainingGuesses is a value of 0. If they have no guesses remaining, update the message to say the game is over and what the word is. If they have 1 guess, update the span inside the paragraph where the remaining guesses will display to tell the player they have one guess remaining. If they have more than one guess, update the same span element to tell them the number of guesses remaining.
    if (remainingGuesses === 0) {
        message.innerHTML = `Game is over! The word was <span class="highlight">${word}</span>`;
        remainingGuessesElement.innerText = "Try again later";
        } else if (remainingGuesses === 1) {
            remainingGuessesElement.innerText = `${remainingGuesses} guess`;
        } else {
            remainingGuessesSpan.innerText = `${remainingGuesses} guesses`;
        }        
    };

// Create and name a function to check if the player successfully guessed the word and won the game. Begin by verifying if their word in progress matches the word they should guess. If the player has won, add the “win” class to the empty paragraph where messages appear when they guess the letter. Also, update the paragraph’s contents to: <p class="highlight">You guessed correct the word! Congrats!</p>.
const didPlayerWin = function () {
    if (word.toUpperCase() === wordInProgress.innerText) {
        message.classList.add("win");
        message.innerHTML = `<p class="highlight>You guessed the correct word! YEAH! </p>`;
    }
};


