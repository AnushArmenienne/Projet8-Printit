const slides = [
    {
        "image": "slide1.jpg",
        "tagLine": "Impressions tous formats <span>en boutique et en ligne</span>"
    },
    {
        "image": "slide2.jpg",
        "tagLine": "Tirages haute définition grand format <span>pour vos bureaux et events</span>"
    },
    {
        "image": "slide3.jpg",
        "tagLine": "Grand choix de couleurs <span>de CMJN aux pantones</span>"
    },
    {
        "image": "slide4.png",
        "tagLine": "Autocollants <span>avec découpe laser sur mesure</span>"
    }
];




let currentIndex = 0;
const arrowLeft = document.querySelector(".arrow_left");
const arrowRight = document.querySelector(".arrow_right");
const dots = document.querySelector(".dots");
const bannerImg = document.querySelector(".banner-img");
const tagLine = document.querySelector("#banner p");

function updateSlider() {
	//Initialisation de la première slide / tag line
    bannerImg.src = `./assets/images/slideshow/${slides[currentIndex].image}`;
    tagLine.innerHTML = slides[currentIndex].tagLine;
	// Mise à jour class pour dot selectionne
    const allDots = document.querySelectorAll('.dot');
    allDots.forEach((dot, index) => {
        dot.classList.remove('dot_selected');
        if (index === currentIndex) {
            dot.classList.add('dot_selected');
        }
    });
}

function createDots() {
	//Supprimer les anciens points s'il y en a
    dots.innerHTML = '';
	//Créer et ajouter les nouveaux points
    slides.forEach((slide, index) => {
        const dot = document.createElement('span');
        dot.classList.add('dot');
        if (index === currentIndex) {
            dot.classList.add('dot_selected');
        }
        dots.appendChild(dot);
    });
}
//Appel de la fonction pour créer les points au chargement de la page
createDots();
//Ecouteur d'évenements pour les fleches gauche et droite
arrowLeft.addEventListener("click", () => {
    currentIndex--;
    if (currentIndex < 0) {
        currentIndex = slides.length - 1;
    }
    updateSlider();
});

arrowRight.addEventListener("click", () => {
    currentIndex++;
    if (currentIndex >= slides.length) {
        currentIndex = 0;
    }
    updateSlider();
});
