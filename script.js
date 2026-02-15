// ================================
// LOADING SCREEN
// ================================
const loader = document.createElement("div");
loader.id = "loader";
loader.innerText = "Loading Portfolio...";
document.body.appendChild(loader);

window.addEventListener("load", () => {
    setTimeout(() => {
        loader.style.display = "none";
    }, 1200);
});


// ================================
// SMOOTH SCROLL
// ================================
document.querySelectorAll('.nav-menu a').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href'))
            .scrollIntoView({ behavior: 'smooth' });
    });
});


// ================================
// ACTIVE MENU
// ================================
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-menu a");

window.addEventListener("scroll", () => {
    let current = "";

    sections.forEach(section => {
        const sectionTop = section.offsetTop - 200;
        if (window.pageYOffset >= sectionTop) {
            current = section.getAttribute("id");
        }
    });

    navLinks.forEach(link => {
        link.classList.remove("active");
        if (link.getAttribute("href") === "#" + current) {
            link.classList.add("active");
        }
    });
});


// ================================
// FADE IN SECTION
// ================================
const allSections = document.querySelectorAll(".section");

function reveal() {
    allSections.forEach(section => {
        const top = section.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        if (top < windowHeight - 100) {
            section.style.opacity = "1";
            section.style.transform = "translateY(0)";
            section.style.transition = "all 0.8s ease";
        } else {
            section.style.opacity = "0";
            section.style.transform = "translateY(50px)";
        }
    });
}

window.addEventListener("scroll", reveal);
window.addEventListener("load", reveal);


// ================================
// TYPING ANIMATION HERO
// ================================
const heroText = document.querySelector(".hero-text p");
const text = heroText.innerText;
heroText.innerText = "";
let i = 0;

function typing() {
    if (i < text.length) {
        heroText.innerText += text.charAt(i);
        i++;
        setTimeout(typing, 40);
    }
}

window.addEventListener("load", typing);


// ================================
// SKILL ANIMATION
// ================================
const skills = document.querySelectorAll(".skill-box");

skills.forEach(skill => {
    skill.addEventListener("mouseenter", () => {
        skill.style.background = "#ffd369";
        skill.style.color = "#333";
        skill.style.transform = "scale(1.1)";
        skill.style.transition = "0.3s";
    });

    skill.addEventListener("mouseleave", () => {
        skill.style.background = "rgba(255, 255, 255, 0.2)";
        skill.style.color = "#fff";
        skill.style.transform = "scale(1)";
    });
});


// ================================
// DARK MODE TOGGLE
// ================================
const toggleBtn = document.createElement("div");
toggleBtn.classList.add("dark-toggle");
toggleBtn.innerText = "🌙";
document.body.appendChild(toggleBtn);

toggleBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
});


// ================================
// ALERT BUTTON
// ================================
const hireBtn = document.querySelector(".btn");

hireBtn.addEventListener("click", () => {
    alert("Terima kasih telah tertarik! Silakan hubungi saya melalui bagian Kontak 😊");
});
