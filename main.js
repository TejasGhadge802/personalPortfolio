console.log('Hello World!');

const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("show");
});


//.                      Cards Swipe Logic
const track = document.querySelector('.cardsTrack');
const cards = document.querySelectorAll('.cards');
const btnNext = document.getElementById('btnNext');
const btnPre = document.getElementById('btnPre');

let currentIndex = 0;
const totalCards = cards.length;

btnNext.addEventListener('click', () => {
    if (currentIndex < totalCards - 1) {
        currentIndex++;
        updateCardPosition();
    }
});

btnPre.addEventListener('click', () => {
    if (currentIndex > 0) {
        currentIndex--;
        updateCardPosition();
    }
});

function updateCardPosition() {
    track.style.transform = `translateX(-${currentIndex * 100}%)`;
}

