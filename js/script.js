const scrollBtn = document.getElementById("scroll-up-btn");
const menuBtn = document.querySelectorAll(".menu-btn");
const menu = document.getElementById("menu");
const crossBtn = document.getElementById("crossBtn");
const typing = document.querySelectorAll(".typing");
const words = ["Youtuber", "Developer", "Blogger", "Designer", "Learner"];

// toggle menu button

menuBtn.forEach((e) => {
  e.addEventListener("click", function () {
    menu.classList.toggle("active");
    crossBtn.classList.toggle("active");
  });
});

//showing scroll button

window.addEventListener("scroll", function () {
  const scrolY = this.window.scrollY;
  if (scrolY > 500) {
    scrollBtn.classList.add("show");
  } else {
    scrollBtn.classList.remove("show");
  }
});

//typing script

function typeAnimation(
  element,
  words,
  typingSpeed = 150,
  deletingSpeed = 50,
  pauseTime = 500
) {
  let wordIndex = 0;
  let charIndex = 0;
  let isDeleting = false;

  function typeWords() {
    const currentWord = words[wordIndex];
    if (isDeleting) {
      element.textContent = currentWord.substring(0, charIndex--);
    } else {
      element.textContent = currentWord.substring(0, charIndex++);
    }

    //Adjusting typing speed
    const speed = isDeleting ? typingSpeed : deletingSpeed;

    if (!isDeleting && charIndex === currentWord.length) {
      //Pause after typing the word
      setTimeout(() => (isDeleting = true), pauseTime);
    } else if (isDeleting && charIndex === 0) {
      //Move to the next word
      isDeleting = false;
      wordIndex = (wordIndex + 1) % words.length; //Loop back to the first word
    }
    setTimeout(typeWords, speed);
  }

  typeWords();
}

typing.forEach((e) => typeAnimation(e, words));
