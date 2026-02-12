const slides = [
  { img: "images/1.jpg", quote: "Some souls are written into destiny." },
  { img: "images/2.jpg", quote: "With you, love feels quiet and safe." },
  { img: "images/3.jpg", quote: "Every version of me chooses you." },
  { img: "images/4.jpg", quote: "You are my calm in chaos." },
  { img: "images/5.jpg", quote: "Time slows when it's us." },
  { img: "images/6.jpg", quote: "You feel like home." },
  { img: "images/7.jpg", quote: "Loving you feels natural." },
  { img: "images/8.jpg", quote: "Every memory with you is gold." },
  { img: "images/9.jpg", quote: "You are my favorite story." },
  { img: "images/10.jpg", quote: "Mehal Jivraj — you are my always." }
];

let index = 0;

function startStory() {
  document.getElementById("intro").classList.remove("active");
  document.getElementById("story").classList.add("active");
  showSlide();
}

function typeQuote(text) {
  const quoteEl = document.getElementById("quote");
  quoteEl.textContent = "";
  let i = 0;
  const typing = setInterval(() => {
    if (i < text.length) {
      quoteEl.textContent += text.charAt(i);
      i++;
    } else {
      clearInterval(typing);
    }
  }, 50);
}

function showSlide() {
  const photo = document.getElementById("photo");
  photo.src = slides[index].img;
  typeQuote(slides[index].quote);
}

function nextSlide() {
  index++;
  if (index >= slides.length) {
    document.getElementById("story").classList.remove("active");
    document.getElementById("ending").classList.add("active");
  } else {
    showSlide();
  }
}
