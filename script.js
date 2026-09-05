
const photos = [
    {
    image: "images/1.jpg",
    caption: "If I could choose one person to love in every lifetime, I’d find you every single time. ❤️"
},

{
    image: "images/2.jpg",
    caption: "Somehow, every beautiful memory leads back to you. 🌸"
},

{
    image: "images/3.jpg",
    caption: "Your smile has a way of making everything feel right. 💕"
},

{
    image: "images/4.jpg",
    caption: "I didn’t know a person could become such a beautiful part of my life. 🥺"
},

{
    image: "images/5.jpg",
    caption: "With you, even the simplest moments become unforgettable. ✨"
},

{
    image: "images/6.jpg",
    caption: "I could look at this moment a thousand times and never get tired of it. ❤️"
},

{
    image: "images/7.jpg",
    caption: "You’re the kind of memory my heart never wants to forget. 🌷"
},

{
    image: "images/8.jpg",
    caption: "Every picture tells a story, and I’m happiest when you’re in mine. 💗"
},

{
    image: "images/9.jpg",
    caption: "Some people enter your life and quietly make it more beautiful. That’s you. 🫶"
},

{
    image: "images/10.jpg",
    caption: "If happiness had a favorite place, I think mine would be beside you. 🌙"
},

{
    image: "images/11.jpg",
    caption: "There’s something about you that makes my heart feel at home. ❤️"
}
];


let currentPhoto = 0;


// ================= SCREEN CHANGE =================

function changeScreen(oldScreen, newScreen) {

    document.getElementById(oldScreen)
        .classList.remove("active");

    setTimeout(() => {

        document.getElementById(newScreen)
            .classList.add("active");

    }, 200);
}


// ================= OPEN SURPRISE =================

function showMemories() {

    changeScreen("welcome", "memories");

    createDots();

    updatePhoto();

}


// ================= PHOTO UPDATE =================

function updatePhoto() {

    const image =
        document.getElementById("memoryImage");

    const caption =
        document.getElementById("caption");


    image.style.opacity = "0";


    setTimeout(() => {

        image.src = photos[currentPhoto].image;

        caption.innerText =
            photos[currentPhoto].caption;

        image.style.opacity = "1";

    }, 250);


    updateDots();
}


// ================= NEXT PHOTO =================

function nextPhoto() {

    currentPhoto++;

    if (currentPhoto >= photos.length) {

        showProposal();

        return;
    }

    updatePhoto();
}


// ================= DOTS =================

function createDots() {

    const dots =
        document.getElementById("dots");

    dots.innerHTML = "";


    photos.forEach((photo, index) => {

        const dot =
            document.createElement("div");

        dot.classList.add("dot");

        if (index === currentPhoto) {

            dot.classList.add("active");

        }

        dots.appendChild(dot);

    });

}


function updateDots() {

    const allDots =
        document.querySelectorAll(".dot");


    allDots.forEach((dot, index) => {

        dot.classList.toggle(
            "active",
            index === currentPhoto
        );

    });

}


// ================= PROPOSAL =================

function showProposal() {

    document.getElementById("memories")
        .classList.remove("active");


    setTimeout(() => {

        document.getElementById("proposal")
            .classList.add("active");

    }, 200);

}


// ================= YES =================

function sayYes() {

    document.getElementById("proposal")
        .classList.remove("active");


    setTimeout(() => {

        document.getElementById("yesScreen")
            .classList.add("active");

        createCelebration();

    }, 200);

}


// ================= FLOATING HEARTS =================

function createHeart() {

    const heart =
        document.createElement("div");

    heart.classList.add("heart");

    const heartTypes = [
        "❤️",
        "💕",
        "💗",
        "💖",
        "🌸"
    ];

    heart.innerText =
        heartTypes[
            Math.floor(Math.random() * heartTypes.length)
        ];


    heart.style.left =
        Math.random() * 100 + "%";


    heart.style.fontSize =
        (12 + Math.random() * 20) + "px";


    heart.style.animationDuration =
        (5 + Math.random() * 5) + "s";


    document
        .querySelector(".hearts")
        .appendChild(heart);


    setTimeout(() => {

        heart.remove();

    }, 10000);

}


setInterval(createHeart, 700);


// ================= CELEBRATION =================

function createCelebration() {

    for (let i = 0; i < 30; i++) {

        setTimeout(() => {

            createHeart();

        }, i * 100);

    }

}