function startExperience() {
  const msg = document.getElementById("startMessage");
  const music = document.getElementById("bgMusic");

  if (msg) msg.style.display = "none";

  document.body.classList.remove("not-loaded");

  if (music) {
    music.volume = 0.5;
    music.play().catch(() => {});
  }
}
