const words = [
    { english: 'Apple', turkish: 'Elma' },
    { english: 'Banana', turkish: 'Muz' },
    { english: 'Orange', turkish: 'Portakal' },
    { english: 'Strawberry', turkish: 'Çilek' },
    { english: 'Grape', turkish: 'Üzüm' }
];

function getRandomWord() {
    const randomIndex = Math.floor(Math.random() * words.length);
    return words[randomIndex];
}

function updateCard() {
    const word = getRandomWord();
    document.getElementById('front').textContent = word.english;
    document.getElementById('back').textContent = word.turkish;
}

function checkAnswer(isCorrect) {
    const currentWord = {
        english: document.getElementById('front').textContent,
        turkish: document.getElementById('back').textContent
    };

    if (isCorrect) {
        updateCard();
    } else {
        addWrongWordToList(currentWord);
    }
}

function addWrongWordToList(word) {
    const list = document.getElementById('wrongWordsList');
    const wordDiv = document.createElement('div');
    wordDiv.className = 'wrong-word';
    wordDiv.textContent = `${word.english}: ${word.turkish}`;
    list.appendChild(wordDiv);

    // Yanlış kelimeler konteynerini göster
    const wrongWordsContainer = document.getElementById('wrongWordsContainer');
    wrongWordsContainer.style.display = 'block';
}

// İlk kelimeyi yükle
updateCard();
