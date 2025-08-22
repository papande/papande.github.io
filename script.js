// Get references to our HTML elements
const listSelector = document.getElementById('word-list');
const getWordBtn = document.getElementById('get-word-btn');
const wordInfoContainer = document.getElementById('word-info');

// References to the elements where we'll display the word info
const wordDisplay = document.getElementById('word-display');
const partOfSpeechDisplay = document.getElementById('part-of-speech');
const definitionDisplay = document.getElementById('definition');
const originDisplay = document.getElementById('origin');
const sentenceDisplay = document.getElementById('sentence');

let wordData = {}; // This will store our loaded JSON data

// 1. Load the word data from the JSON file
fetch('words.json')
    .then(response => response.json())
    .then(data => {
        wordData = data;
        console.log("Word lists loaded successfully!");
    })
    .catch(error => console.error("Error loading word lists:", error));

// 2. Add an event listener to the button
getWordBtn.addEventListener('click', () => {
    // Get the name of the selected list (e.g., "easyWords")
    const selectedListName = listSelector.value;

    // Get the array of words for that list
    const selectedList = wordData[selectedListName];

    if (selectedList && selectedList.length > 0) {
        // 3. Pick a random word from the list
        const randomIndex = Math.floor(Math.random() * selectedList.length);
        const randomWord = selectedList[randomIndex];

        // 4. Display the word's information on the page
        wordDisplay.textContent = randomWord.word;
        partOfSpeechDisplay.textContent = randomWord.partOfSpeech;
        definitionDisplay.textContent = randomWord.definition;
        originDisplay.textContent = randomWord.origin;
        sentenceDisplay.textContent = `"${randomWord.sentence}"`;

        // Make the information container visible
        wordInfoContainer.classList.remove('hidden');
    }
});