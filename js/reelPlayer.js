/* =====================================
   REEL PLAYER (AUTO PLAY / PAUSE)
   ===================================== */

function setupReelAutoPlay() {
  const reels = document.querySelectorAll(".reel");

  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        const video = entry.target.querySelector("video");

        if (!video) return;

        if (entry.isIntersecting) {
          video.play().catch(() => {});
        } else {
          video.pause();
        }
      });
    },
    {
      threshold: 0.75
    }
  );

  reels.forEach(reel => observer.observe(reel));
}

/* ---------- Hook after render ---------- */

document.addEventListener("DOMContentLoaded", () => {
  const originalRender = renderReelStack;

  renderReelStack = function () {
    originalRender();
    setupReelAutoPlay();
  };
});
