/* =====================================
   APP ENTRY POINT
   ===================================== */

document.addEventListener("DOMContentLoaded", () => {
  // Initial render
  renderChat();
  showView("chat");

  // Safety: pause all videos when leaving reel stack
  document.addEventListener("visibilitychange", () => {
    if (document.hidden) {
      document.querySelectorAll("video").forEach(v => v.pause());
    }
  });
});
const moreBtn = document.querySelector(".header-right img");
const aboutModal = document.getElementById("aboutModal");
const closeAbout = document.getElementById("closeAbout");

moreBtn.addEventListener("click", () => {
  aboutModal.classList.remove("hidden");
});

closeAbout.addEventListener("click", () => {
  aboutModal.classList.add("hidden");
});
