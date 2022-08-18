// My Version!

window.addEventListener("keydown", (e) => {
  e.preventDefault();
  playSound(e.keyCode);
  playAnimation(e.keyCode);
});

function playSound(keyCode) {
  const sounds = document.querySelectorAll("audio").forEach((sound) => {
    if (keyCode == sound.dataset.key) {
      let audio = new Audio(sound.src);
      audio.play();
    }
  });
}
function playAnimation(keyCode) {
  const key = document.querySelectorAll(".key").forEach((key) => {
    if (keyCode == key.dataset.key) {
      key.className = "key playing";
      setTimeout(() => {
        key.className = "key";
      }, 200);
    }
  });
}

// Instructor version
