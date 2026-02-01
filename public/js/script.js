const answers_no = { english: [ "No", "Are you sure?", "Really sure??", "Think again?", "Don’t break my heart 💔", 
                               "Give me a chance 🥺", "Still no?", "This hurts 😭", "Pleaseee 💕", "Last chance…" ], 
                    french: [ "Non", "Tu es sûr ?", "Vraiment sûr ??", "Réfléchis encore ?", "Ne me brise pas le cœur 💔", 
                             "Donne-moi une chance 🥺", "Toujours non ?", "Ça fait mal 😭", "S’il te plaît 💕", "Dernière chance…" ], 
                    thai: [ "ไม่อ่ะ", "แน่ใจจริงหรอ?", "คิดดีแล้วนะ?", "อย่าใจร้ายสิ 💔", "ขอโอกาสหน่อย 🥺", "ยังไม่เปลี่ยนใจหรอ?", "เราเสียใจนะ 😭", 
                           "น้าาา 💕", "ขอร้องละ", "ครั้งสุดท้ายแล้ว…" ] };

const answers_yes = {
  english: "YES 💖",
  french: "OUI 💖",
  thai: "ตกลง 💖"
};

let language = "english";
let noIndex = 0;
let yesScale = 1;
let clicks = 0;

const noBtn = document.getElementById("no-button");
const yesBtn = document.getElementById("yes-button");
const banner = document.getElementById("banner");

noBtn.addEventListener("click", () => {
  banner.src = "./public/images/no.gif";

  noIndex = (noIndex + 1) % answers_no[language].length;
  noBtn.textContent = answers_no[language][noIndex];

  yesScale += 0.15;
  yesBtn.style.transform = `scale(${yesScale})`;

  const x = Math.random() * 60 - 30;
  const y = Math.random() * 40 - 20;
  noBtn.style.transform = `translate(${x}px, ${y}px)`;
});

yesBtn.addEventListener("click", () => {
  banner.src = "./public/images/yes.gif";

  document.querySelector(".buttons").style.display = "none";
  document.querySelector(".message").style.display = "block";

  for (let i = 0; i < 20; i++) createHeart();
});

function createHeart() {
  const heart = document.createElement("div");
  heart.textContent = "💖";
  heart.style.position = "fixed";
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.bottom = "-20px";
  heart.style.fontSize = Math.random() * 20 + 20 + "px";
  heart.style.animation = "floatUp 3s linear forwards";
  document.body.appendChild(heart);
  setTimeout(() => heart.remove(), 3000);
}

function changeLanguage() {
  language = document.getElementById("language-select").value;

  document.getElementById("question-heading").textContent =
    language === "french" ? "Bonjour Aashu Baby, veux-tu être ma Valentine ? ? 💕" :
    language === "thai" ? "สวัสดี อาชูที่รัก คุณจะเป็นวาเลนไทน์ของฉันได้ไหม? 💕" :
    "Hello Aashu Baby, Will you be my Valentine? 💕";

  yesBtn.textContent = answers_yes[language];
  noBtn.textContent = answers_no[language][0];
  noIndex = 0;
}

const style = document.createElement("style");
style.innerHTML = `
@keyframes floatUp {
  from { transform: translateY(0); opacity: 1; }
  to { transform: translateY(-100vh); opacity: 0; }
}`;
document.head.appendChild(style);
