/* ---------------- DATA ---------------- */

const answers_no = {
    english: [
        "No", "Are you sure?", "Really sure??", "Think again?",
        "Don’t break my heart 💔", "Give me a chance 🥺",
        "Still no?", "This hurts 😭", "Pleaseee 💕", "Last chance…"
    ],
    french: [
        "Non", "Tu es sûr ?", "Vraiment sûr ??", "Réfléchis encore ?",
        "Ne me brise pas le cœur 💔", "Donne-moi une chance 🥺",
        "Toujours non ?", "Ça fait mal 😭", "S’il te plaît 💕", "Dernière chance…"
    ],
    thai: [
        "ไม่อ่ะ", "แน่ใจจริงหรอ?", "คิดดีแล้วนะ?", "อย่าใจร้ายสิ 💔",
        "ขอโอกาสหน่อย 🥺", "ยังไม่เปลี่ยนใจหรอ?",
        "เราเสียใจนะ 😭", "น้าาา 💕", "ขอร้องละ", "ครั้งสุดท้ายแล้ว…"
    ]
};

const answers_yes = {
    english: "YES 💖",
    french: "OUI 💖",
    thai: "ตกลง 💖"
};

/* ---------------- STATE ---------------- */

let language = "english";
let noIndex = 0;
let yesSize = 50;

const noBtn = document.getElementById("no-button");
const yesBtn = document.getElementById("yes-button");
const banner = document.getElementById("banner");

/* ---------------- NO BUTTON BEHAVIOR ---------------- */

noBtn.addEventListener("click", () => {
    banner.src = "public/images/no.gif";
    refreshBanner();

    // Change text
    noIndex = (noIndex + 1) % answers_no[language].length;
    noBtn.innerHTML = answers_no[language][noIndex];

    // Make YES more irresistible
   yesSize = Math.min(yesSize + 12, 160); // cap growth
yesBtn.style.height = yesSize + "px";
yesBtn.style.width = yesSize + "px";

    // Make NO dodge a little 😈
    const container = document.querySelector(".container");
const rect = container.getBoundingClientRect();

const moveX = Math.random() * 60 - 30;
const moveY = Math.random() * 30 - 15;

noBtn.style.transform = `translate(${moveX}px, ${moveY}px)`;
});

/* ---------------- YES BUTTON BEHAVIOR ---------------- */

yesBtn.addEventListener("click", () => {
    banner.src = "public/images/yes.gif";
    refreshBanner();

    document.querySelector(".buttons").style.display = "none";
    document.querySelector(".message").style.display = "block";

    celebrateLove();
});

/* ---------------- LOVE EFFECTS ---------------- */

function celebrateLove() {
    for (let i = 0; i < 20; i++) {
        createHeart();
    }
}

function createHeart() {
    const heart = document.createElement("div");
    heart.innerHTML = "💖";
    heart.style.position = "fixed";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.bottom = "-20px";
    heart.style.fontSize = Math.random() * 20 + 20 + "px";
    heart.style.animation = "floatUp 3s linear forwards";
    document.body.appendChild(heart);

    setTimeout(() => heart.remove(), 3000);
}

/* ---------------- LANGUAGE SWITCH ---------------- */

function changeLanguage() {
    language = document.getElementById("language-select").value;

    const heading = document.getElementById("question-heading");
    const success = document.getElementById("success-message");

    if (language === "french") {
        heading.textContent = "Tu veux être mon valentin ? 💕";
        success.textContent = "Yepppie, à très bientôt :3";
    } else if (language === "thai") {
        heading.textContent = "คืนดีกับเราได้ไหม 💕";
        success.textContent = "ฮูเร่ คืนดีกันแล้วน
