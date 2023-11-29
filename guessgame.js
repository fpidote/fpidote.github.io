   
   
   
   // generate an array of 5 random numbers
   function generateRandomNumbers() {
    const randomNumbers = [];
    for (let i = 0; i < 5; i++) {
        randomNumbers.push(Math.floor(Math.random() * 10) + 1);
    }
    return randomNumbers;
}

    // Function to count occurrences of a number in an array
    function countOccurrences(array, number) {
    let count = 0;
    for (const element of array) {
        if (element === number) {
            count++;
        }
    }
    return count;
}

// Main game logic
const randomNumbersArray = generateRandomNumbers();


// Get user guess
const userGuess = parseInt(prompt("Guess a number between 1 and 10:"));

// Check both user and computer
const occurrences = countOccurrences(randomNumbersArray, userGuess);

// Display result to the user
if (occurrences > 0) {
    alert(` Your guess ${userGuess} exists ${occurrences} times in the array.`);
} else {
    alert(`Sorry, your guess ${userGuess} does not exist in the array.`);
}

alert("numbers selected by the machine are: "+randomNumbersArray);