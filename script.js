let words = [];

// JSON dosyasını yükle
fetch('words.json')
    .then(response => response.json())
    .then(data => {
        words = data;
        updateCard();
    });

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
        updateCard();
    }
    document.getElementById('cardInner').classList.remove('is-flipped');
}

function addWrongWordToList(word) {
    const list = document.getElementById('wrongWordsList');
    const wordDiv = document.createElement('div');
    wordDiv.className = 'wrong-word';
    wordDiv.textContent = `${word.english}: ${word.turkish}`;
    list.appendChild(wordDiv);
}

function flipCard() {
    document.getElementById('cardInner').classList.toggle('is-flipped');
}
