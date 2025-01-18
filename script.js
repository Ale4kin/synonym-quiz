
let correctAnswers = 0;
let incorrectAnswers = 0;
let totalAttempts = 0;

const cardsContainer = document.getElementById("cards");
const quizContainer = document.getElementById("quiz");
const quizWord = document.getElementById("quiz-word");
const quizOptions = document.getElementById("quiz-options");


const progressContainer = document.createElement("div");
progressContainer.id = "progress";
progressContainer.style.marginTop = "20px";
quizContainer.appendChild(progressContainer);


function updateProgress() {
  progressContainer.textContent = `Правильных ответов: ${correctAnswers}, Неправильных ответов: ${incorrectAnswers}, Всего попыток: ${totalAttempts}`;
}

// Generate cards dynamically
words.forEach((item, index) => {
  const card = document.createElement("div");
  card.className = "card";
  card.textContent = item.translation;
  card.addEventListener("click", () => showSynonyms(index));
  cardsContainer.appendChild(card);
});

function showSynonyms(index) {
  const { word, synonyms, translation } = words[index];
  cardsContainer.style.display = "none";
  quizContainer.style.display = "block";

  quizWord.textContent = `Слово: ${translation}`;
  quizOptions.innerHTML = "";

  // Display synonyms
  synonyms.forEach(({ ru, de }) => {
    const synonymPair = document.createElement("div");
    const germanText = document.createElement("strong"); 
    germanText.textContent = de;

    const russianText = document.createElement("span"); 
    russianText.textContent = ` - ${ru}`;

    synonymPair.style.fontSize = "18px"; 
    synonymPair.style.lineHeight = "1.5"; 
    synonymPair.style.color = "#555"; 
    synonymPair.style.padding = "10px"; 
    synonymPair.style.marginBottom = "10px"; 
    synonymPair.style.backgroundColor = "#fff"; 
    synonymPair.style.border = "1px solid #ddd"; 
    synonymPair.style.borderRadius = "5px"; 

    synonymPair.appendChild(germanText);
    synonymPair.appendChild(russianText);
    quizOptions.appendChild(synonymPair);
  });

  // Add buttons
  const learnButton = document.createElement("button");
  learnButton.textContent = "Учить слова";
  learnButton.addEventListener("click", () => startLearning(index));

  const trainButton = document.createElement("button");
  trainButton.textContent = "Тренировать синонимы";
  trainButton.addEventListener("click", () => trainSynonyms(index));

  quizOptions.appendChild(learnButton);
  quizOptions.appendChild(trainButton);
}

function startLearning(index) {
    const { synonyms } = words[index];
    let currentIndex = 0; 
  
    function showCurrentWord() {
      const { ru, de } = synonyms[currentIndex];
      const isGermanToRussian = Math.random() > 0.5;
  
      quizWord.textContent = isGermanToRussian
        ? `Выберите перевод для: ${de}`
        : `Выберите перевод для: ${ru}`;
      quizOptions.innerHTML = "";
  
      const options = shuffleOptions(
        synonyms,
        isGermanToRussian ? "ru" : "de",
        isGermanToRussian ? ru : de
      );
  
      options.forEach((option) => {
        const button = document.createElement("button");
        button.textContent = option;
  
        button.addEventListener("click", () => {
          totalAttempts++; 
  
          if (
            (isGermanToRussian && option === ru) ||
            (!isGermanToRussian && option === de)
          ) {
            correctAnswers++;
            alert("Правильно!");
            currentIndex++; 
            if (currentIndex >= synonyms.length) {
           
              alert("Вы прошли все слова!");
              resetQuiz(); 
              return;
            }
            showCurrentWord(); 
          } else {
            incorrectAnswers++;
            alert("Неправильно. Попробуйте снова.");
            updateProgress(); 
          }
        });
  
        quizOptions.appendChild(button);
      });
    }
  
    showCurrentWord(); 
  }
  
  
  function trainSynonyms(index) {
    const { synonyms, translation } = words[index];
    let currentIndex = 0;
    let currentOptions = []; 
  
    function showNextSynonym() {
      const correctSynonym = synonyms[currentIndex].de; 
  
   
      if (currentOptions.length === 0) {
        currentOptions = generateOptions(correctSynonym, translation);
      }
  
      quizWord.textContent = `Выберите синоним для: ${translation}`;
      quizOptions.innerHTML = "";
  
      currentOptions.forEach((option) => {
        const button = document.createElement("button");
        button.textContent = option;
  
        button.addEventListener("click", () => {
          totalAttempts++; 
  
          if (option === correctSynonym) {
            correctAnswers++;
            alert("Правильно!");
            currentIndex++; 
            currentOptions = []; 
            if (currentIndex >= synonyms.length) {
             
              alert("Вы успешно потренировали все синонимы!");
              resetQuiz(); 
              return;
            }
            showNextSynonym(); 
          } else {
            incorrectAnswers++;
            alert("Неправильно. Попробуйте снова.");
          }
  
          updateProgress(); 
        });
  
        quizOptions.appendChild(button);
      });
    }
  
    showNextSynonym(); 
  }
  

function resetQuiz() {
  quizContainer.style.display = "none";
  cardsContainer.style.display = "grid";
  correctAnswers = 0; 
  incorrectAnswers = 0; 
  totalAttempts = 0; 
  updateProgress(); 
}

function generateOptions(correctSynonym, currentWord) {
  const allSynonyms = words
    .flatMap((item) => item.synonyms.map((s) => s.de)) 
    .filter((option) => option !== correctSynonym && option !== currentWord); 

  const randomOptions = allSynonyms.sort(() => Math.random() - 0.5).slice(0, 4); 
  randomOptions.push(correctSynonym); 
  return randomOptions.sort(() => Math.random() - 0.5); 
}

function shuffleOptions(synonyms, key, correctValue) {
  const options = synonyms.map((s) => s[key]);
  const uniqueOptions = Array.from(new Set(options.filter((o) => o !== correctValue)));
  const shuffled = uniqueOptions.sort(() => Math.random() - 0.5).slice(0, 4); 
  shuffled.push(correctValue); 
  return shuffled.sort(() => Math.random() - 0.5); 
}
