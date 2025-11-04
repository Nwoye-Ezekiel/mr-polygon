const handleButtonClick = (playAudio) => {
  const audioEl = document.querySelector("audio");
  const modal = document.querySelector(".music-modal-wrapper");
  const controls = document.querySelector(".controls");

  modal.classList.add("fade-out-animation");
  document.documentElement.classList.remove("paused");
  controls.classList.add("active");

  if (playAudio && audioEl) {
    audioEl.play();
  }
};

document.getElementById("no-button").addEventListener("click", () => {
  handleButtonClick(false);
});

document.getElementById("yes-button").addEventListener("click", () => {
  handleButtonClick(true);
});

let isExpanded = false;
const html = document.documentElement;
const expandButton = document.getElementById("size");

expandButton.innerHTML = '<i data-lucide="maximize-2"></i>';
lucide.createIcons();

expandButton.addEventListener("click", () => {
  if (isExpanded) {
    html.style.fontSize = "max(calc(16 * min(100vw / 300, 100vh / 500)), 0rem)";
    expandButton.innerHTML = '<i data-lucide="maximize-2"></i>';
  } else {
    html.style.fontSize = "max(calc(16 * min(100vw / 300, 100vh / 420)), 0rem)";
    expandButton.innerHTML = '<i data-lucide="minimize-2"></i>';
  }
  lucide.createIcons();
  isExpanded = !isExpanded;
});

const musicButton = document.getElementById("music");
const audio = document.querySelector("audio");
let isPlaying = false;

function updateMusicButton(playing) {
  isPlaying = playing;
  musicButton.innerHTML = playing
    ? '<i data-lucide="volume-2"></i>'
    : '<i data-lucide="volume-x"></i>';
  lucide.createIcons();
}

updateMusicButton(false);

if (audio) {
  audio.addEventListener("play", () => updateMusicButton(true));
  audio.addEventListener("pause", () => updateMusicButton(false));

  musicButton.addEventListener("click", () => {
    isPlaying ? audio.pause() : audio.play();
  });
}

const isDarkMode = true;
let isLightMode = !isDarkMode;
const body = document.body;
const themeButton = document.getElementById("theme");

function setDarkMode() {
  body.style.backgroundColor = "var(--color-black-1)";
  body.setAttribute("data-theme", "dark");
  themeButton.innerHTML = '<i data-lucide="sun"></i>';
  lucide.createIcons();
}

function setLightMode() {
  body.style.backgroundColor = "var(--color-white-1)";
  body.removeAttribute("data-theme");
  themeButton.innerHTML = '<i data-lucide="moon"></i>';
  lucide.createIcons();
}

isDarkMode ? setDarkMode() : setLightMode();

themeButton.addEventListener("click", () => {
  isLightMode ? setDarkMode() : setLightMode();
  isLightMode = !isLightMode;
});
