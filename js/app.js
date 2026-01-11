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
