// Efek Typing
const text = "Dengan menyebut nama Allah Yang Maha Pengasih lagi Maha Penyayang";
let index = 0;

function typeEffect() {
    if (index < text.length) {
        document.getElementById("typing-text").innerHTML += text.charAt(index);
        index++;
        setTimeout(typeEffect, 70);
    }
}

window.onload = function() {
    typeEffect();
};

// Tombol tampilkan refleksi
document.getElementById("btnDoa").addEventListener("click", function() {
    const refleksi = document.getElementById("refleksi");
    refleksi.classList.remove("hidden");
    refleksi.scrollIntoView({ behavior: "smooth" });
});
// Kontrol Audio
const audio = document.getElementById("bgAudio");
const btnSound = document.getElementById("btnSound");
let isPlaying = false;

btnSound.addEventListener("click", function() {
    if (!isPlaying) {
        audio.play();
        btnSound.innerHTML = "🔈 Matikan Murottal";
        isPlaying = true;
    } else {
        audio.pause();
        btnSound.innerHTML = "🔊 Nyalakan Murottal";
        isPlaying = false;
    }
});
// 🎞 Slide System
let currentSlide = 0;
const slidesContainer = document.getElementById("slides");
const totalSlides = document.querySelectorAll(".slide").length;

document.getElementById("nextSlide").addEventListener("click", function () {
    currentSlide++;
    if (currentSlide >= totalSlides) {
        currentSlide = 0;
    }
    updateSlide();
});

document.getElementById("prevSlide").addEventListener("click", function () {
    currentSlide--;
    if (currentSlide < 0) {
        currentSlide = totalSlides - 1;
    }
    updateSlide();
});
function updateSlide() {
    slidesContainer.style.transform = `translateX(-${currentSlide * 100}%)`;

    document.querySelectorAll(".slide").forEach((slide, index) => {
        slide.classList.remove("active");
        if (index === currentSlide) {
            slide.classList.add("active");
        }
    });
}


