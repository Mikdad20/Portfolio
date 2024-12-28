const typing = document.querySelector(".typing");
const words = ["Youtuber", "Developer", "Blogger", "Designer", "Learner"];

//typing script
let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeWords() {
  const currentWord = words[wordIndex];
  if (isDeleting) {
    typing.textContent = currentWord.substring(0, charIndex--);
  } else {
    typing.textContent = currentWord.substring(0, charIndex++);
  }

  //Adjusting typing speed
  const typingSpeed = isDeleting ? 100 : 150;

  if (!isDeleting && charIndex === currentWord.length) {
    //Pause after typing the word
    setTimeout(() => (isDeleting = true), 1000);
  } else if (isDeleting && charIndex === 0) {
    //Move to the next word
    isDeleting = false;
    wordIndex = (wordIndex + 1) % words.length; //Loop back to the first word
  }
  setTimeout(typeWords, typingSpeed);
}

typeWords();
